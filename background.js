chrome.browserAction.setIcon({
    path: {
        38: "icons/icon.svg"
    },
});

chrome.browserAction.onClicked.addListener(function () {
    chrome.browserAction.setPopup({
        popup: "tabs_list.html"
    });
});


chrome.contextMenus.create({
    id: browse_later_tab_menu_id,
    title: "Add current tab to Browse-later",
    contexts: ["page"]
});

chrome.contextMenus.create({
    id: browse_later_all_tab_menu_id,
    title: "Add all tabs to Browse-later",
    contexts: ["page"]
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if(info.menuItemId == browse_later_tab_menu_id) {
        saveTab(tab.id, tab.url, tab.title, tab.pinned, tab.favIconUrl);
    } else if (info.menuItemId == browse_later_all_tab_menu_id) {
        chrome.tabs.query({currentWindow: true}, function(tabs) {
            saveTabs(tabs);
        });
    }
});

updateBrowserAction(); // update badge text and title
