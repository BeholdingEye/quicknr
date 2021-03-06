/* ===========================================================
*
*           QUICKNR GENERAL UTILITY FUNCTIONS
*
*  ===========================================================*/


// ----------------------- Mobile device detector

function DeviceIsMobile() {
    var isMobile = /iPhone|iPad|iPod|Android|Blackberry|Nokia|Opera mini|Windows mobile|Windows phone|iemobile/i.test(navigator.userAgent);
    return isMobile;
}

// ----------------------- Percentage function

function rangeToPercent(number, min, max) {
    return ((number - min) / (max - min)) * 100;
}

// ----------------------- Position functions

// Returns Y position of element, with given offset
function GetYPos(elem, offsetPos) {
    oPos = offsetPos;
    if (elem.offsetParent) {
        do {
            oPos += elem.offsetTop;
        } while (elem = elem.offsetParent);
    }
    return oPos;
}

// Returns X position of element, with given offset
function GetXPos(elem, offsetPos) {
    oPos = offsetPos;
    if (elem.offsetParent) {
        do {
            oPos += elem.offsetLeft;
        } while (elem = elem.offsetParent);
    }
    return oPos;
}

// ----------------------- Image preloader

function LoadImagesIntoMemory(imgList) {
    for (var i = 0; i < imgList.length; i++) {
        var img = new Image();
        img.src = imgList[i];
    }
}

// ----------------------- Other functions

function Async(fn, args) {
    // Execute the passed function asynchronously
    setTimeout(function() {fn(args);}, 0);
}

function print(args) {
    console.log(args);
}

// ----------------------- Convenience object-getting functions

function objHtml() {
    return document.documentElement;
}

function objClass(name, parent) {
    if (!parent) {
        return document.getElementsByClassName(name)[0];
    }
    else {
        return parent.getElementsByClassName(name)[0];
    }
}

function classObjs(name, parent) {
    if (!parent) {
        return document.getElementsByClassName(name);
    }
    else {
        return parent.getElementsByClassName(name);
    }
}

function objID(id, parent) {
    if (!parent) {
        return document.getElementById(id);
    }
    else {
        return parent.getElementById(id);
    }
    
}

function objTag(tag, parent) {
    if (!parent) {
        return document.getElementsByTagName(tag)[0];
    }
    else {
        return parent.getElementsByTagName(tag)[0];
    }
}

function tagObjs(tag, parent) {
    if (!parent) {
        return document.getElementsByTagName(tag);
    }
    else {
        return parent.getElementsByTagName(tag);
    }
}

