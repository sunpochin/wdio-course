* Coding with: https://appium.io/docs/en/about-appium/getting-started/?lang=en#driver-specific-setup
* Prerequisites
  * We'll assume you have an Android 8.0 emulator configured and running (the example will work on lower versions, just fix the version numbers accordingly)
  * We'll assume you have this test APK downloaded and available on your local filesystem

* Have to use ```sudo npm i -g appium``` to use Appium v1.22.2 because: 
  * https://github.com/appium/appium/issues/15261
* ```ApiDemos-debug.apk``` path is relative to where we run appium, so better run appium at this project folder, then run ```node index.js```.