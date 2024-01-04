/* 
    Core Functions
*/

chrome.action.onClicked.addListener(openDemoTab);

chrome.webNavigation.onDOMContentLoaded.addListener(async ({ tabId, url }) => {
  if (url !== 'https://*.youtube.com/*') return;
  console.log('chrome event listener did NOT execute')
  const { options } = await chrome.storage.local.get('options');
  chrome.scripting.executeScript({
    console.log('chrome event listener IS executing')
    target: { tabId },
    files: ['content-script.js'],
    ...options
  });
});

/* 
    Helper Functions
*/

function openDemoTab() {
    chrome.tabs.create({ url: 'index.html' });
  }

// chrome.webNavigation.onCompleted.addListener((details) => {
//     if (details.url) {
//         chrome.scripting.executeScript({
//             target: { tabId: details.tabId },
//             files: ['content.js']
//         });
//     }
// }, { url: [{ urlMatches: 'https://*.youtube.com/*' }, { urlMatches: 'https://www.hulu.com/*' }] });
