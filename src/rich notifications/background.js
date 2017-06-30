/**
 * Created by Valdis003 on 08.06.2017.
 */

// var options = {
//     iconUrl: "icon.png",
//     type: "basic",
//     title: "My first popup with Chrome",
//     message: "Message text"
// };
//
// chrome.notifications.create(options, callback);
//
// chrome.notifications.onClicked.addListener(notificationClicked);
//
// function notificationClicked() {
//     console.log("Clicked!");
// }
//
// function callback() {
//     console.log("popup've done");
// }

//option type: basic, image, list, progress


chrome.notifications.onClicked.addListener(notificationClicked);

function notificationClicked() {
    console.log("Clicked!");
    chrome.tabs.create({url: "https://twitter.com/i/notifications"}, function (tab) {})
}

var lastId;

$(function () {
    setInterval(engine, 10000);
});

function engine() {
    $.get('https://twitter.com/i/notifications', function (data) {
        var htmlData = data;

        var message;
        var msgId;

        var $data = $(htmlData).find("#stream-items-id").eq(0);
        $data.find('.activity-truncated-tweet').remove();
        $data.find('.activity-supplement').remove();

        var text = $data.find('li.stream-item').eq(0)
            .find('div.ActivityItem-displayText');
        text.find('div.ActivityItem-activityTimestamp').remove();
        message = text.text().replace(/\n/g, '').replace(/\s\s+/g, '  ').trim();
        msgId = $data.find('li.stream-item').eq(0).attr('data-item-id');

        if (lastId === undefined) {
            var options = {
                iconUrl: "icon.png",
                type: "basic",
                title: "Twitter News",
                message: "Last new is: " + message
            };

            chrome.notifications.create(options, function () {
            });

            lastId = msgId;
        } else if (lastId != msgId) {
            var options = {
                iconUrl: "icon.png",
                type: "basic",
                title: "Twitter News",
                message: message
            };

            chrome.notifications.create(options, function () {
            });

            lastId = msgId;
        } else if (lastId == msgId) {
            //    already shown
        }
    })
}
