chrome.runtime.sendMessage({ event: "removeLocalStreamers" });
chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
    debugger;
    if(details.frameId === 0) {
        // Fires only when details.url === currentTab.url
        chrome.tabs.get(details.tabId, function(tab) {
            if(tab.url === details.url) {
                console.log("onHistoryStateUpdated");
            }
        });
    }
});

let timerID = 0;
let start = new Date();

debugger;
function divIsLoaded() {
    return document.getElementsByTagName('h4').length > 1;
}

function checkDom() {
    if (divIsLoaded()) {
        removeDiv();
    } else {
        let timePassed = new Date() - start;
        if (timePassed > 5000) {
            clearInterval(timerID);
        }
    }
}

function findChild(h4elements) {
    for (let i = 0; i < h4elements.length; i++) {
        let value = h4elements[i].getAttribute('data-a-target');
        if (value === 'international-section-header') {
            return h4elements[i];
        }
    }
}

function removeDiv() {
    const element = findChild(document.getElementsByTagName('h4'));

    if (element && element.parentElement && element.parentElement.parentElement) {
        element.parentElement.parentElement.remove();
    }
}

timerID = setInterval(checkDom.bind(this), 200);