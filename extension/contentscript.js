document.addEventListener('DOMContentLoaded', blockDiscard, false);
 
function isTiddlyWikiClassic() {
		//from tiddlyfox
		var versionArea = document.getElementById("versionArea");
		return (document.location.protocol === "file:") &&
			document.getElementById("storeArea") &&
			(versionArea && /TiddlyWiki/.test(versionArea.text));
}


function isTiddlyWiki5() {
	//from tiddlyfox
	var metaTags = document.getElementsByTagName("meta"),
		generator = false;
	for(var t=0; t<metaTags.length; t++) {
		if(metaTags[t].name === "application-name" && metaTags[t].content === "TiddlyWiki") {
			generator = true;
		}
	}
	return generator;
}

	
function blockDiscard() {
	if (isTiddlyWikiClassic() || isTiddlyWiki5())
	try {
		var msg = {};
		msg.type = "blockDiscard";
		chrome.runtime.sendMessage(msg,function(x){});
		return true;
	} catch(ex) {
		console.log("error "+ex);
		return false;
	}
}
