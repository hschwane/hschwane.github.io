---
---

{% if site.enable_google_analytics %}
  // google analytics
  var gaScript = document.createElement('script');
  gaScript.type = 'text/javascript';
  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id={{ site.google_analytics }}';
  document.body.appendChild(gaScript);

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', '{{ site.google_analytics }}');
{% endif %}

{% if site.enable_panelbear_analytics %}
<!-- Panelbear Analytics - We respect your privacy -->
  // google analytics
  var paScript = document.createElement('script');
  paScript.type = 'text/javascript';
  paScript.src = 'https://cdn.panelbear.com/analytics.js?site={{site.panelbear_analytics}}';
  document.body.appendChild(paScript);
  
  window.panelbear = window.panelbear || function() { (window.panelbear.q = window.panelbear.q || []).push(arguments); };
  panelbear('config', { site: '{{site.panelbear_analytics}}' });
{% endif %}