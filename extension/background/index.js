const API = chrome || browser;

console.log(API.action) // => undefined

API.action.onClicked.addListener((tab) => {
    console.log("clicked icon on tab ", tab);
    API.tabs.create({url: "options/index.html"});
})

setTimeout(() => {
    API.tabs.create({url: "options/index.html"});
}, 700)