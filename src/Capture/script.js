/**
 * Created by Valdis003 on 14.06.2017.
 */


document.getElementById('startRecording').addEventListener('click', recordClick, false);

function recordClick() {
    chrome.desktopCapture.chooseDesktopMedia(["screen", "window"], accessToRecord);
}

function accessToRecord(windowId) {
    navigator.webkitGetUserMedia({
        audio: false,
        video: {
            mandatory: {
                chromeMediaSource: "desktop",
                chromeMediaSourceId: windowId
            }
        }
    }, startStream, failedStream);
}

function startStream(stream) {
    console.log("before");
    var video = document.getElementById('mainScreen');
    video.src = URL.createObjectURL(stream);
    stream.onended = function () {
        console.log("in stream");
    };
}

function failedStream() {
    console.log("error");
}