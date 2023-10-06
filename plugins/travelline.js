(function (w) {
  let q = [
    ['setContext', 'TL-INT-polyanagroup-ru_2023-10-05', 'ru'],
    ['embed', 'booking-form', {
      container: 'tl-booking-form'
    }],
    ['embed', 'search-form', {
      container: 'tl-search-form'
    }],
    ['setContext', 'TL-INT-polyanagroup-ru_2023-10-05.32513', 'ru'],
    ['embed', 'search-form', {
      container: 'tl-search-form-32513'
    }],
    ['embed', 'booking-form', {
      container: 'tl-booking-form-32513'
    }],
    ['setContext', 'TL-INT-polyanagroup-ru_2023-10-05.23660', 'ru'],
    ['embed', 'search-form', {
      container: 'tl-search-form-23660'
    }],
    ['embed', 'booking-form', {
      container: 'tl-booking-form-23660'
    }],
    ['setContext', 'TL-INT-polyanagroup-ru_2023-10-05.22866', 'ru'],
    ['embed', 'search-form', {
      container: 'tl-search-form-22866'
    }],
    ['embed', 'booking-form', {
      container: 'tl-booking-form-22866'
    }],
  ];
  let h = ["ru-ibe.tlintegration.ru", "ibe.tlintegration.ru", "ibe.tlintegration.com"];
  let t = w.travelline = (w.travelline || {}),
    ti = t.integration = (t.integration || {});
  ti.__cq = ti.__cq ? ti.__cq.concat(q) : q;
  if (!ti.__loader) {
    ti.__loader = true;
    let d = w.document, c = d.getElementsByTagName("head")[0] || d.getElementsByTagName("body")[0];

    function e(s, f) {
      return function () {
        w.TL || (c.removeChild(s), f())
      }
    }

    (function l(h) {
      if (0 === h.length) return;
      let s = d.createElement("script");
      s.type = "text/javascript";
      s.async = !0;
      s.src = "https://" + h[0] + "/integration/loader.js";
      s.onerror = s.onload = e(s, function () {
        l(h.slice(1, h.length))
      });
      c.appendChild(s)
    })(h);
  }
})(window)
