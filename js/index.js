var currentPath = "about"
var currentLang = "en"

$(document).ready(function(){
  loadAbout();
});

function loadWip(pagePath) {
  document.getElementById(currentPath).classList.toggle('active-tab');
  document.getElementById(pagePath).classList.toggle('active-tab');
  currentPath = pagePath;
  $("#content").load("../html/wip.html");
}

function loadProjects() {
  document.getElementById(currentPath).classList.toggle('active-tab');
  document.getElementById("projects").classList.toggle('active-tab');
  currentPath = "projects";
  $("#content").load("../html/projects.html");
}

function loadAbout() {
  document.getElementById(currentPath).classList.toggle('active-tab');
  document.getElementById("about").classList.toggle('active-tab');
  currentPath = "about";
  $("#content").load("../html/about.html");
}

function switchLanguage() {
  // currently unavailable
  alert("Sorry, Chinese version is not ready yet. Try again later.");
}
