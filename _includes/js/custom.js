(function (bgd, undefined) {
  // Event handling
  bgd.onReady = function (ready) {
    // in case the document is already rendered
    if (document.readyState != "loading") ready();
    // modern browsers
    else if (document.addEventListener)
      document.addEventListener("DOMContentLoaded", ready);
    // IE <= 8
    else
      document.attachEvent("onreadystatechange", function () {
        if (document.readyState == "complete") ready();
      });
  };

  function initGA() {
    var a = document.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      if (
        a[i].href.indexOf(location.host) == -1 &&
        a[i].href.match(/^https:\/\//i)
      ) {
        a[i].onclick = function () {
          var target = this.href.replace(/^https:\/\//i, "");
          var source = window.location.href.replace(/^https:\/\//i, "");

          gtag("event", "page_view", {
            source: source,
            target: target,
          });
        };
      }
    }
  }

  bgd.onReady(function () {
    initGA();
  });
})((window.bgd = window.bgd || {}));
