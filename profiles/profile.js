const Texts = [
    'HTML','CSS','JavaScript','Python',
    'C/C++','CP','DataScience','AI/ML',
    'Linux','NumPy','Git','MASM/8086',
    'Pandas','SQL','Flask','Bash'
];
var tagCloud = TagCloud('.sphere',Texts,{
radius: 225,
maxSpeed: 'normal',
initSpeed: 'fast',
direction: 35,
keep: true,
});
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

const isTouchDevice = 'ontouchstart' in document.documentElement;

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