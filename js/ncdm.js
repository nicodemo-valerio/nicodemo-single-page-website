/*
 File: ncdm.js
 Author: Nicodemo valerio
*/
window.onscroll = function() {scrollToTop()};
document.body.onload = hideSections(true);

function hideSections(isOnLoad) {
  var menuLinks = document.getElementById("menu").childNodes[1].children;
  var i = 0;
  var l = menuLinks.length;
  var sectionName = "";
  var link;
  for(; i < l; i++) {
    link = menuLinks[i].children[0];
    if(isOnLoad) {
      link.onclick = displaySection;
    }
    hideSection(getName(link));
  }
}

function getName(link) {
  var sectionName = link.attributes.href.value;
  return sectionName.substr(1, sectionName.length);
}

function hideSection(sectionName) {
  document.getElementById(sectionName + "Section").style.display = "none";
}

function displaySection() {
  hideSections(false);
  var sectionName = getName(this);
  document.getElementById(sectionName + "Section").style.display = "block";
}

function scrollToTop() {
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
