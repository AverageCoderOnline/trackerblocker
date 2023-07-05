function blockTrackers(requestDetails) {
    const trackingRegex = /google-analytics\.com|doubleclick\.net|facebook\.com/;
    if (trackingRegex.test(requestDetails.url)) {
      return { cancel: true };
    }
  }
  
  browser.webRequest.onBeforeRequest.addListener(
    blockTrackers,
    { urls: ["<all_urls>"] },
    ["blocking"]
  );