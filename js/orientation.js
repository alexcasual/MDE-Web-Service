function doOnOrientationChange() {
    switch(window.orientation) {
	case -90:
	case 90:
	alert('landscape');
	setStylesheet('landscape');
	break;
	default:
	alert('portrait');
	setStylesheet('portrait');
	break;
    }
}
function setStylesheet(title) {
    var currTag;
    for (var i = 0; (currTag = document.getElementsByTagName("link")[i]); i++) {
	if (currTag.getAttribute("rel").indexOf("style") != -1 && currTag.getAttribute("title") {
	    currTag.disabled = true;
	    if (currTag.getAttribute("title") == title) {
		currTag.disabled = false;
	    }
	}
    }
}
window.addEventListener('orientationchange', doOnOrientationChange);

doOnOrientationChange();
