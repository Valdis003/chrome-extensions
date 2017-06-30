/**
 * Created by Valdis003 on 01.06.2017.
 */

var contextsList = ["selection", "link", "image", "page"];

for (i = 0; i < contextsList.length; i++) {

    var title = "Share this " + contextsList[i] + " in twitter";

    chrome.contextMenus.create({
        title: title,
        contexts: [contextsList[i]],
        onclick: onClick,
        id: contextsList[i]
    });
}

//selection, link, image, page
function onClick(data, tab) {
    switch (data.menuItemId) {
        case "selection":
            chrome.windows.create({
                url: "https://twitter.com/share?text=" + encodeURIComponent(data.selectionText), type: "panel"
            });
            break;
        case "link":
            chrome.windows.create({
                url: "https://twitter.com/share?url=" + encodeURIComponent(data.linkUrl), type: "panel"
            });
            break;
        case "image":
            chrome.windows.create({
                url: "https://twitter.com/share?url=" + encodeURIComponent(data.srcUrl), type: "panel"
            });
            break;
        case "page":
            chrome.windows.create({
                url: "https://twitter.com/share?text=" + encodeURIComponent(tab.title)
                + "&url=" + data.pageUrl, type: "panel"
            });
            break;
    }
}