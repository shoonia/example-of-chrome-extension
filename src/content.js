const script = Object.assign(
  document.createElement('script'),
  {
    src: chrome.runtime.getURL('module.js'),
    type: 'module',
    async: true,
  },
);

document.body.append(script);

chrome.runtime.onMessage.addListener((detail) => {
  window.dispatchEvent(
    new CustomEvent('>>>Request>>>', {
      detail,
    }),
  );
});

window.addEventListener('<<<Response<<<', ({ detail }) => {
  chrome.runtime.sendMessage(detail);
});
