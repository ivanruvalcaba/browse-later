chrome.browserAction.setIcon({
    path: {
        38: "icons/BrowseLater-64.png"
    },
});

chrome.browserAction.onClicked.addListener(function () {
    chrome.browserAction.setPopup({
        popup: "/tabs_list.html"
    });
});

updateBrowserAction(); // update badge text and title
