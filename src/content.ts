chrome.runtime.sendMessage({ event: 'removeLocalStreamers' });

chrome.runtime.onMessage.addListener((message) => {
  if (message.event === 'clearScreen') {
    clearScreen();
  }
});

const divIsLoaded = (): boolean => {
  return document.getElementsByTagName('h4').length > 1;
}

const checkDom = (timerID: number, startTime: number): void => {
  if (divIsLoaded()) {
    removeDiv();
  } else {
    const timePassed = new Date().getTime() - startTime;
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
  let startTime = new Date().getTime();
  timerID = setInterval(checkDom.bind(this, timerID, startTime), 200);
}
clearScreen();