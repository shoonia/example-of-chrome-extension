export const sendReqMessage = async (type, payload) => {
  const [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  });

  if (typeof tab?.id === 'number') {
    chrome.tabs.sendMessage(tab.id, {
      type,
      payload,
    });
  }
};

window.addEventListener('DOMContentLoaded', () => {
  sendReqMessage('>>>request/editorVersion');
});

chrome.runtime.onMessage.addListener((message) => {
  if (message?.type === '<<<response/editorVersion') {
    document.querySelector('#output').textContent = `Editor Version: ${message.payload}`;
  }
});
