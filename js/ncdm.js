/*
 File: ncdm.js
 Author: Nicodemo valerio
*/

// Scroll to top button
window.onscroll = function() {scroll()};

function scroll() {
  if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("goToTopButton").style.display = "block";
  } else {
    document.getElementById("goToTopButton").style.display = "none";
  }
}

function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Set opacity on page load
document.body.onload = setSections(true);

function setSections(isFirstTime) {
  var menuLinks = document.getElementById("menu").childNodes[1].children;
  var i = 0;
  var l = menuLinks.length-1; //last link language not considered
  var link = ""; var sectionName = "";
  for(; i < l; i++) {
    link = menuLinks[i].children[0];
    sectionName = getSectionName(link);
    if(isFirstTime) {
      link.onclick = onLinkClick;
      document.getElementById(sectionName + "Section").onmouseover = removeOpacity;
      document.getElementById(sectionName + "Section").ontouchstart = removeOpacity;
    }
    document.getElementById(sectionName + "Section").style.opacity = 0.1;
  }
}

function onLinkClick() {
  document.getElementById(getSectionName(this) + "Section").style.opacity = 1;
}

function getSectionName(link) {
  var sectionName = link.attributes.href.value; // href="#about"
  return sectionName.substr(1, sectionName.length); // remove #
}

function removeOpacity() {
    document.getElementById(this.attributes.id.value).style.opacity = 1;
}
