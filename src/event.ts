const filter = {
  url: [{ urlContains: "twitch.tv/directory/game/" }]
} as chrome.webNavigation.WebNavigationEventFilter;

const logOnHistoryStateUpdated = (details: chrome.webNavigation.WebNavigationTransitionCallbackDetails) => {
  if (details.frameId === 0) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { event: "clearScreen" });
    })
  }
}

chrome.webNavigation.onHistoryStateUpdated.addListener(logOnHistoryStateUpdated, filter);

chrome.runtime.onMessage.addListener((request) => {
  const options = {
    active: true,
    currentWindow: true,
  };

  if (request.event === "removeLocalStreamers") {
    chrome.tabs.query(options, (tabs) => {
      chrome.pageAction.show(tabs[0].id);
    });
  }
})