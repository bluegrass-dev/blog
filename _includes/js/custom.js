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
          gtag({ event: "outbound_link", target: target });
        };
      }
    }
  }

  function addGTM() {
    var noscriptElement = document.createElement("noscript");
    var iframeElement = document.createElement("iframe");
    iframeElement.src =
      "https://www.googletagmanager.com/ns.html?id=GTM-K74TLQP";
    iframeElement.style = "display:none;visibility:hidden";
    iframeElement.width = "0";
    iframeElement.height = "0";
    noscriptElement.appendChild(iframeElement);
    document.body.prepend(noscriptElement);
  }

  bgd.onReady(function () {
    initGA();
    addGTM();
  });
})((window.bgd = window.bgd || {}));
