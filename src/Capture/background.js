/**
 * Created by Valdis003 on 14.06.2017.
 */

chrome.app.runtime.onLaunched.addListener(function () {
    console.log("aaaaaaaaa");
    chrome.app.window.create('index.html', {
        bounds: {
            width: 800,
            height: 500
        }
    });
});
