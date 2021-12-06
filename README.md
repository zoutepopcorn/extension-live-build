# What is this
This was my question on [stackoverflow](https://stackoverflow.com/questions/69072670/vue-cli-live-build-folder-for-chrome-extension).

* I wanted to have a "live build" folder to have my Vuetify as option page,
* Because I want to be able to talk with the webextension API from my option page. 
* Before it took 6 seconds for every change,
* So with Vuetify 3 + vite I was able to refresh my extension in 300ms.

### Project setup (in root folder)
```
npm install
```

### Run web-ext and have live build folder
```
npm run all
```