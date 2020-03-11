const options: chrome.tabs.QueryInfo = {
  active: true,
  currentWindow: true,
};

const sendMessageOnNavigation = (details: chrome.webNavigation.WebNavigationTransitionCallbackDetails) => {
  if (details.frameId === 0) {
    chrome.tabs.query(options, (tabs: chrome.tabs.Tab[]) => {
      chrome.tabs.sendMessage(tabs[0].id, { event: 'clearScreen' });
    })
  }
}

const filter: chrome.webNavigation.WebNavigationEventFilter = {
  url: [{ urlContains: 'twitch.tv/directory/game/' }]
};

chrome.webNavigation.onHistoryStateUpdated.addListener(sendMessageOnNavigation, filter);

chrome.runtime.onMessage.addListener((message) => {
  if (message.event === 'displayPageAction') {
    chrome.tabs.query(options, (tabs: chrome.tabs.Tab[]) => {
      chrome.pageAction.show(tabs[0].id) // With the current options, tabs should only bring one result
    })
  }
})