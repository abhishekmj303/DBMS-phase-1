const isTouchDevice = 'ontouchstart' in document.documentElement;

var cloudKeep = true;
if (isTouchDevice) cloudKeep = false;
var cloudOptions = {
    radius: 225,
    maxSpeed: 'normal',
    initSpeed: 'fast',
    direction: 35,
    keep: cloudKeep,
}
var tagCloud = TagCloud('.sphere',window.Texts,cloudOptions);
function cloudRadius() {
    const width = window.innerWidth;
    if (width < 400) {
        cloudOptions.radius = 150;
    } else if (width < 900) {
        cloudOptions.radius = 200;
    } else {
        cloudOptions.radius = 225;
    }
    tagCloud.destroy();
    tagCloud = TagCloud('.sphere',window.Texts,cloudOptions);
}
cloudRadius();
window.addEventListener("resize", cloudRadius);

var color = '#00FFFF';
document.querySelector('.sphere').style.color = color;
// disable select
window.onload = function() {
    var labels = document.getElementsByTagName('body');
    for (var i = 0; i < labels.length; i++) {
        disableSelection(labels[i]);
    }
};
function disableSelection(element) {
    if (typeof element.onselectstart != 'undefined') {
        element.onselectstart = function() { return false; };
    } else if (typeof element.style.MozUserSelect != 'undefined') {
        element.style.MozUserSelect = 'none';
    } else {
        element.onmousedown = function() { return false; };
    }
}

// SmoothScroll

'use strict';

disableScroll();
if (!isTouchDevice) smoothScroll();

window.onresize = () => {
  resizeBodyHeight();
};

window.onload = () => {
  enableScroll();
  resizeBodyHeight();
};

// Functions

function disableScroll() {
  document.body.style.overflow = 'hidden';
}

function enableScroll() {
  document.body.style.overflow = '';
}

function smoothScroll() {
  document.querySelector('.viewport').classList.add('SmoothScroll');

  new SmoothScroll({
    target: document.querySelector('.container'),
    scrollEase: 0.08,
    maxOffset: 500,
  });
}

function resizeBodyHeight() {
  document.body.style.height = document.querySelector('.viewport').scrollHeight + 'px';
}