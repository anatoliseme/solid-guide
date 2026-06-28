cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "branch-cordova-sdk.Branch",
      "file": "plugins/branch-cordova-sdk/src/index.js",
      "pluginId": "branch-cordova-sdk",
      "clobbers": [
        "Branch"
      ]
    },
    {
      "id": "cordova-clipboard.Clipboard",
      "file": "plugins/cordova-clipboard/www/clipboard.js",
      "pluginId": "cordova-clipboard",
      "clobbers": [
        "cordova.plugins.clipboard"
      ]
    },
    {
      "id": "cordova-plugin-camera.Camera",
      "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "Camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverOptions",
      "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverOptions"
      ]
    },
    {
      "id": "cordova-plugin-camera.camera",
      "file": "plugins/cordova-plugin-camera/www/Camera.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "navigator.camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverHandle",
      "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverHandle"
      ]
    },
    {
      "id": "cordova-plugin-network-information.network",
      "file": "plugins/cordova-plugin-network-information/www/network.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "navigator.connection",
        "navigator.network.connection"
      ]
    },
    {
      "id": "cordova-plugin-network-information.Connection",
      "file": "plugins/cordova-plugin-network-information/www/Connection.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "Connection"
      ]
    },
    {
      "id": "cordova-plugin-statusbar.statusbar",
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    },
    {
      "id": "cordova-sqlite-storage.SQLitePlugin",
      "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
      "pluginId": "cordova-sqlite-storage",
      "clobbers": [
        "SQLitePlugin"
      ]
    },
    {
      "id": "cordova-plugin-googleplus.GooglePlus",
      "file": "plugins/cordova-plugin-googleplus/www/GooglePlus.js",
      "pluginId": "cordova-plugin-googleplus",
      "clobbers": [
        "window.plugins.googleplus"
      ]
    },
    {
      "id": "yandex-appmetrica-plugin-cordova.appmetrica",
      "file": "plugins/yandex-appmetrica-plugin-cordova/www/appmetrica.js",
      "pluginId": "yandex-appmetrica-plugin-cordova",
      "clobbers": [
        "appMetrica"
      ]
    },
    {
      "id": "cordova-plugin-facebook-connect.FacebookConnectPlugin",
      "file": "plugins/cordova-plugin-facebook-connect/www/facebook-native.js",
      "pluginId": "cordova-plugin-facebook-connect",
      "clobbers": [
        "facebookConnectPlugin"
      ]
    },
    {
      "id": "cordova-plugin-purchase.InAppBillingPlugin",
      "file": "plugins/cordova-plugin-purchase/www/store-android.js",
      "pluginId": "cordova-plugin-purchase",
      "clobbers": [
        "store"
      ]
    },
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "es6-promise-plugin.Promise",
      "file": "plugins/es6-promise-plugin/www/promise.js",
      "pluginId": "es6-promise-plugin",
      "runs": true
    },
    {
      "id": "cordova-plugin-x-socialsharing.SocialSharing",
      "file": "plugins/cordova-plugin-x-socialsharing/www/SocialSharing.js",
      "pluginId": "cordova-plugin-x-socialsharing",
      "clobbers": [
        "window.plugins.socialsharing"
      ]
    },
    {
      "id": "cordova-plugin-inappbrowser.inappbrowser",
      "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
      "pluginId": "cordova-plugin-inappbrowser",
      "clobbers": [
        "cordova.InAppBrowser.open"
      ]
    },
    {
      "id": "cordova-plugin-appodeal.AppodealPlugin",
      "file": "plugins/cordova-plugin-appodeal/www/appodeal.js",
      "pluginId": "cordova-plugin-appodeal",
      "clobbers": [
        "Appodeal"
      ]
    },
    {
      "id": "@havesource/cordova-plugin-push.PushNotification",
      "file": "plugins/@havesource/cordova-plugin-push/www/push.js",
      "pluginId": "@havesource/cordova-plugin-push",
      "clobbers": [
        "PushNotification"
      ]
    },
    {
      "id": "cordova-plugin-badge-fix.Badge",
      "file": "plugins/cordova-plugin-badge-fix/www/badge.js",
      "pluginId": "cordova-plugin-badge-fix",
      "clobbers": [
        "cordova.plugins.notification.badge"
      ]
    },
    {
      "id": "cordova-plugin-local-notification-12.LocalNotification",
      "file": "plugins/cordova-plugin-local-notification-12/www/local-notification.js",
      "pluginId": "cordova-plugin-local-notification-12",
      "clobbers": [
        "cordova.plugins.notification.local"
      ]
    }
  ];
  module.exports.metadata = {
    "branch-cordova-sdk": "4.2.0",
    "cordova-clipboard": "1.3.0",
    "cordova-plugin-camera": "6.0.0",
    "cordova-plugin-network-information": "2.0.2",
    "cordova-plugin-statusbar": "2.4.2",
    "cordova-plugin-vibration": "3.1.1",
    "cordova-sqlite-storage": "6.0.0",
    "phonegap-plugin-multidex": "1.0.0",
    "cordova-plugin-googleplus": "8.5.2",
    "yandex-appmetrica-plugin-cordova": "5.2.0",
    "cordova-plugin-facebook-connect": "3.2.0",
    "cordova-plugin-purchase": "11.0.0",
    "cordova-plugin-device": "2.1.0",
    "es6-promise-plugin": "4.2.2",
    "cordova-plugin-x-socialsharing": "6.0.4",
    "cordova-plugin-inappbrowser": "5.0.0",
    "cordova-plugin-appodeal": "3.0.1",
    "@havesource/cordova-plugin-push": "4.0.0-dev.0",
    "cordova-plugin-badge-fix": "0.8.10",
    "cordova-plugin-local-notification-12": "0.1.4"
  };
});