const options = {
  active: true,
  currentWindow: true,
};

chrome.runtime.onMessage.addListener((request) => {
  if (request.event == "removeLocalStreamers") {
    chrome.tabs.query(options, (tabs) => {
      chrome.pageAction.show(tabs[0].id);
    });
  }
})