chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (typeof request === 'string') {
      try {
        request = JSON.parse(request);
      } catch (e) {}
    }

    var ui5Data = request.ui5Data;

    if (ui5Data) {
      var version = (ui5Data.openUI5 ? 'OpenUI5 ' : 'SAP UI5 ') + ui5Data.version,
          mode = (ui5Data.debug ? 'Debug ' : 'Production ') + 'mode';

      chrome.pageAction.show(sender.tab.id);
      chrome.pageAction.setTitle({
        tabId: sender.tab.id,
        title: 'Powered by \n' + version + '\n' + mode
      });

    }
  });
