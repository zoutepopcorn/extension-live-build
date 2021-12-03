// console.clear();
// console.log(" ||| start background ||| ", new Date());
const API = chrome || browser;

// API.tabs.onRemoved.addListener((tab) => {
//     console.log("yes ", tab);
// })

// API.action.onClicked.addListener((tab) => {})

console.log("API ", API);

//     const API = chrome || browser;
//     API.runtime.openOptionsPage(() => console.log('options page opened'));
//     console.log("TAB ", tab);
// chrome.browserAction.onClicked.addListener(function(tab) { });

setTimeout(() => {
    API.tabs.create({url: "options/index.html"});
}, 700)

console.log("hoi", API.action);

API.tabs.create({url: "options/index.html"});

let color = '#3aa757';

API.runtime.onInstalled.addListener(() => {
    API.storage.sync.set({color});
    console.log('Default background color set to %cgreen', `color: ${color}`);
    API.runtime.openOptionsPage(() => console.log('options page opened'));

});

const listener = (tabs) => {

}

chrome.action.onClicked.addListener(listener);