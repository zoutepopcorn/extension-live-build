console.clear();
console.log(" ||| start background ||| ", new Date());
const API = chrome || browser;

API.browserAction.onClicked.addListener((tab) => {
    API.runtime.openOptionsPage(() => console.log('options page opened'));
    console.log("TAB ", tab);
})

API.tabs.onRemoved.addListener((tab) => {
    console.log("yes ", tab);
})


setTimeout(() => {
    API.tabs.create({ url: "options/index.html" });
}, 700)
