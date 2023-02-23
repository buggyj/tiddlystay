chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    console.log("tiddlystay: got request");
    if (msg.type === "blockDiscard") {
		chrome.tabs.update(sender.tab.id, {autoDiscardable: false});
		sendResponse ({status:"discardblocked"});
		return;
	}
});


