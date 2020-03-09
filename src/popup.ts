let htmlToggle = document.getElementById('disableStreams') as HTMLInputElement;

chrome.storage.sync.get('remove', (res) => {
  htmlToggle.checked = res.remove;
})

htmlToggle.addEventListener('change', function () {
  chrome.storage.sync.set({ remove: this.checked });
})