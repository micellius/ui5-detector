(function () {
  'use strict';

  var eventProxyElement,
      customEvent,
      scriptElement,
      openUI5;

  function sendMessage(content) {
    eventProxyElement.innerText = JSON.stringify(content);
    eventProxyElement.dispatchEvent(customEvent);
  }

  eventProxyElement = document.getElementById('__ui5DetectorElement');

  customEvent = document.createEvent('Event');
  customEvent.initEvent('ui5DataEvent', true, true);

  try {
    openUI5 = !!(sap.ui.getVersionInfo && sap.ui.getVersionInfo().gav.match(/openui5/))
  } catch (e) {
    openUI5 = false;
  }

  sendMessage({
    ui5Data: window.sap && sap.ui ? {
      version: sap.ui.version,
      openUI5: openUI5,
      debug: !!sap.ui.debug
    } : {}
  });

  // remove elements from page
  scriptElement = document.getElementById('__ui5DetectorScript');
  eventProxyElement.remove();
  scriptElement.remove();

}());
