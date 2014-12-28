var ui5Found = !!(document.getElementById('sap-ui-bootstrap'));

if (ui5Found) {

  var html = document.getElementsByTagName('html')[0];

  var eventProxyElement = document.createElement('div');
  eventProxyElement.id = '__ui5DetectorElement';
  eventProxyElement.style.display = 'none';
  html.appendChild(eventProxyElement);

  // inject into the application context from the content script context

  var script = window.document.createElement('script');
  script.src = chrome.extension.getURL('inject.js');
  script.id = '__ui5DetectorScript';

  eventProxyElement.addEventListener('ui5DataEvent', function () {
    var eventData = eventProxyElement.innerText;
    chrome.runtime.sendMessage(eventData);
  });

  html.appendChild(script);
}
