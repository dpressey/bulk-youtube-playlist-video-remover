/* 
    Core Functions
*/

// TODO: implement this action to open up the modal in a new tab
// chrome.action.onClicked(function(
//   chrome.tabs.create({ url: 'index.html' });
// ));

chrome.webNavigation.onDOMContentLoaded.addListener(async ({ tabId, url }) => {
  if (url !== 'https://*.youtube.com/*') return;
  
  const { options } = await chrome.storage.local.get('options');
  chrome.scripting.executeScript({
    target: { tabId },
    files: ['content-script.js'],
    ...options
  });
});

/* 
    Helper Functions
*/
