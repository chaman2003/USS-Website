import { onCLS, onINP, onLCP } from 'web-vitals';

function send(metric: { name: string; value: number; id: string }) {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'web_vitals',
      metric_name: metric.name,
      metric_value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      metric_id: metric.id,
    });
  }
}

onLCP(send);
onINP(send);
onCLS(send);
