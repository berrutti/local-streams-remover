chrome.runtime.sendMessage({ event: "removeLocalStreamers" });

chrome.runtime.onMessage.addListener((message) => {
  if (message.event == 'clearScreen') {
    clearScreen();
  }
});

const divIsLoaded = (): boolean => {
  return document.getElementsByTagName('h4').length > 1;
}

const checkDom = (timerID: number, start: Date): void => {
  if (divIsLoaded()) {
    removeDiv();
  } else {
    let timePassed: number = new Date().getTime() - start.getTime();
    if (timePassed > 5000) {
      clearInterval(timerID);
    }
  }
}

const findChild = (h4elements: HTMLCollectionOf<HTMLHeadElement>): HTMLHeadElement => {
  for (let i = 0; i < h4elements.length; i++) {
    let value = h4elements[i].getAttribute('data-a-target');
    if (value === 'international-section-header') {
      return h4elements[i];
    }
  }
}

const removeDiv = (): void => {
  const element = findChild(document.getElementsByTagName('h4'));

  if (element && element.parentElement && element.parentElement.parentElement) {
    element.parentElement.parentElement.remove();
  }
}

const clearScreen = () => {
  let timerID = 0;
  let start = new Date();
  timerID = setInterval(checkDom.bind(this, timerID, start), 200);
}
clearScreen();