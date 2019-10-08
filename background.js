var image = "" + chrome.runtime.getURL("wileyminus.gif");
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        if (details.url === "https://edugen.wileyplus.com/edugen/art_v4_9/common/default/header_logo.gif")
            return {redirectUrl: image};
    },
    {
        urls: [
            "<all_urls>"
        ],
        types: ["image", "other"]
    },
    ["blocking"]
);
