// USS motion engine - tiny vanilla effects, all reduced-motion aware.
// Loaded once from BaseLayout. No external dependencies.

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── Unified scroll loop ──
   Header glass toggle, progress bar, and hero parallax all read/write on scroll.
   Running them as three separate listeners (each with its own rAF) caused layout
   thrash: one handler wrote `classList` while another read `scrollHeight` in the
   same frame, forcing a synchronous reflow every tick. Batching them into a single
   rAF - all reads first, then all writes - removes the forced reflow. Layout metrics
   that don't change on scroll (doc/client height) are cached and refreshed only on
   resize. */
function initScroll() {
  const header = document.querySelector<HTMLElement>('[data-header]');
  const bar = document.querySelector<HTMLElement>('.scroll-progress');
  const parallax = reduceMotion
    ? []
    : Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));

  if (!header && !bar && !parallax.length) return;

  // Cached layout metric - only depends on viewport/document size, not scroll.
  let scrollMax = 0;
  const refreshMetrics = () => {
    const h = document.documentElement;
    scrollMax = h.scrollHeight - h.clientHeight;
  };
  refreshMetrics();

  // Pre-parse parallax speeds once (avoids dataset reads + parseFloat per frame).
  const layers = parallax.map((el) => ({ el, speed: Number(el.dataset.parallax ?? '0.2') }));

  let ticking = false;
  let isScrolled = false;

  const update = () => {
    // ── reads ──
    const y = window.scrollY;

    // ── writes ──
    if (header) {
      const next = y > 24;
      if (next !== isScrolled) {
        isScrolled = next;
        header.classList.toggle('is-scrolled', next);
      }
    }
    if (bar) {
      bar.style.setProperty('--p', String(scrollMax > 0 ? y / scrollMax : 0));
    }
    for (const { el, speed } of layers) {
      el.style.transform = `translate3d(0, ${y * speed}px, 0)`;
    }

    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  };

  document.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => {
    refreshMetrics();
    onScroll();
  }, { passive: true });
  window.addEventListener('load', refreshMetrics);
  update();
}

/* ── Scroll reveal ── */
function initReveal() {
  const els = document.querySelectorAll<HTMLElement>('.reveal');
  if (!els.length) return;
  if (reduceMotion || !('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      }
    },
    // Reveal as soon as any part of the element is near the viewport. The
    // positive bottom rootMargin starts the transition ~10% before the element
    // scrolls into view, so on tall mobile sections you never scroll into a
    // blank gap waiting for it to fire.
    { threshold: 0, rootMargin: '0px 0px 10% 0px' },
  );
  els.forEach((el) => io.observe(el));

  // Failsafe: if anything is already within the viewport on load (or the
  // observer is slow to deliver its first callback), force-reveal it so the
  // first screenful is never stuck invisible.
  const revealInView = () => {
    const vh = window.innerHeight || document.documentElement.clientHeight;
    els.forEach((el) => {
      if (el.classList.contains('is-visible')) return;
      const r = el.getBoundingClientRect();
      if (r.top < vh && r.bottom > 0) {
        el.classList.add('is-visible');
        io.unobserve(el);
      }
    });
  };
  revealInView();
  window.addEventListener('load', revealInView, { once: true });
}

/* ── Count-up stats ── */
function initCounters() {
  const els = document.querySelectorAll<HTMLElement>('[data-count]');
  if (!els.length) return;
  if (reduceMotion || !('IntersectionObserver' in window)) {
    els.forEach((el) => {
      el.textContent = (el.dataset.prefix ?? '') + el.dataset.count + (el.dataset.suffix ?? '');
    });
    return;
  }
  const run = (el: HTMLElement) => {
    const target = Number(el.dataset.count ?? '0');
    const prefix = el.dataset.prefix ?? '';
    const suffix = el.dataset.suffix ?? '';
    const dur = 1600;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = prefix + Math.round(target * eased).toString() + suffix;
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          run(entry.target as HTMLElement);
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.5 },
  );
  els.forEach((el) => io.observe(el));
}

/* ── Cursor spotlight on cards ── */
function initSpotlight() {
  if (reduceMotion) return;
  const cards = document.querySelectorAll<HTMLElement>('[data-spotlight]');
  cards.forEach((card) => {
    const glow = card.querySelector<HTMLElement>('.spotlight-glow');
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
      if (glow) glow.style.opacity = '1';
    });
    card.addEventListener('pointerleave', () => {
      if (glow) glow.style.opacity = '0';
    });
  });
}

/* ── 3D tilt on cards ── */
function initTilt() {
  if (reduceMotion) return;
  const cards = document.querySelectorAll<HTMLElement>('[data-tilt]');
  cards.forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      const max = 6;
      card.style.setProperty('--ry', `${px * max}deg`);
      card.style.setProperty('--rx', `${-py * max}deg`);
    });
    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
    });
  });
}

/* ── Zoom buttons ── */
function initMagnetic() {
  if (reduceMotion) return;
  const els = document.querySelectorAll<HTMLElement>('[data-magnetic]');
  els.forEach((el) => {
    el.style.transition = 'transform 0.3s var(--ease-out-expo)';
    el.addEventListener('pointerenter', () => {
      el.style.transform = 'scale(1.06)';
    });
    el.addEventListener('pointerleave', () => {
      el.style.transform = 'scale(1)';
    });
  });
}

/* ── Active section indicator for the services anchor rail ── */
function initScrollSpy() {
  const links = document.querySelectorAll<HTMLAnchorElement>('[data-spy-link]');
  if (!links.length || !('IntersectionObserver' in window)) return;
  const byId = new Map<string, HTMLAnchorElement>();
  links.forEach((l) => byId.set(l.getAttribute('href')!.replace('#', ''), l));
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          links.forEach((l) => l.removeAttribute('data-active'));
          byId.get(entry.target.id)?.setAttribute('data-active', 'true');
        }
      }
    },
    { rootMargin: '-40% 0px -55% 0px' },
  );
  byId.forEach((_, id) => {
    const section = document.getElementById(id);
    if (section) io.observe(section);
  });
}

/* ── Hero orbit: pointer-driven 3D tilt ── */
function initOrbitTilt() {
  if (reduceMotion) return;
  const orbits = document.querySelectorAll<HTMLElement>('[data-orbit]');
  orbits.forEach((orbit) => {
    const stage = orbit.closest<HTMLElement>('.orbit-stage') ?? orbit;
    const max = 14;
    let raf = 0;
    let tx = 0;
    let ty = 0;
    const apply = () => {
      orbit.style.setProperty('--oy', `${tx}deg`);
      orbit.style.setProperty('--ox', `${ty}deg`);
      raf = 0;
    };
    stage.addEventListener('pointermove', (e) => {
      const r = stage.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      tx = px * max;
      ty = -py * max;
      if (!raf) raf = requestAnimationFrame(apply);
    });
    stage.addEventListener('pointerleave', () => {
      tx = 0;
      ty = 0;
      if (!raf) raf = requestAnimationFrame(apply);
    });
  });
}

/* ── Pause the hero orbit when off-screen ──
   The orbit has ~80 continuously-animating elements (rotating rings, twinkling
   stars, blurred glows). Leaving them running while the rest of the page scrolls
   burns paint/compositing for pixels nobody can see and competes with scroll.
   An IntersectionObserver toggles data-paused, which the CSS uses to halt every
   animation inside the stage. */
function initOrbitVisibility() {
  const stages = document.querySelectorAll<HTMLElement>('.orbit-stage');
  if (!stages.length) return;
  if (!('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const stage = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          stage.removeAttribute('data-paused');
        } else {
          stage.setAttribute('data-paused', '');
        }
      }
    },
    { rootMargin: '100px' },
  );
  stages.forEach((s) => io.observe(s));
}

function init() {
  initScroll();
  initReveal();
  initCounters();
  initSpotlight();
  initTilt();
  initMagnetic();
  initScrollSpy();
  initOrbitTilt();
  initOrbitVisibility();
}

if (document.readyState !== 'loading') {
  init();
} else {
  document.addEventListener('DOMContentLoaded', init);
}
