// Description: Main JavaScript file for the project
//=======================================================

// HTML and CSS Section
let htmlAndCss = document.getElementById('htmlAndCss');
let contHtmlAndCss = document.getElementById("contHtmlAndCss");

htmlAndCss.addEventListener('click', function () {
    contHtmlAndCss.style.backgroundColor = 'rgb(238, 233, 218)';
    contHtmlAndCss.style.height = '250px';
    contHtmlAndCss.style.paddingBottom = '20px';
});

contHtmlAndCss.style.display = "none";

function toggleContainer() {
    if (contHtmlAndCss.style.display === "none") {
        contHtmlAndCss.style.display = "block";
    } else {
        contHtmlAndCss.style.display = "none";
    }
}

//=======================================================

// JavaScript Section
let javascript = document.getElementById('javascript');
let contJavascript = document.getElementById("contJavascript");

javascript.addEventListener('click', function () {
    contJavascript.style.backgroundColor = 'rgb(147, 191, 207)';
    contJavascript.style.height = '250px';
});

contJavascript.style.display = "none";

function toggleContainer1() {
    if (contJavascript.style.display === "none") {
        contJavascript.style.display = "block";
    } else {
        contJavascript.style.display = "none";
    }
}

//=======================================================

// Git and GitHub Section
let gitAndGithub = document.getElementById('gitAndGithub');
let contGitAndGithub = document.getElementById("contGitAndGithub");

gitAndGithub.addEventListener('click', function () {
    contGitAndGithub.style.backgroundColor = 'rgb(238, 233, 218)';
    contGitAndGithub.style.height = '250px';
    contGitAndGithub.style.paddingBottom = '20px';
});

contGitAndGithub.style.display = "none";

function toggleContainer2() {
    if (contGitAndGithub.style.display === "none") {
        contGitAndGithub.style.display = "block";
    } else {
        contGitAndGithub.style.display = "none";
    }
}

//=======================================================

// Python Section
let python = document.getElementById('python');
let contPython = document.getElementById("contPython");

python.addEventListener('click', function () {
    contPython.style.backgroundColor = 'rgb(147, 191, 207)';
    contPython.style.height = '250px';
});

contPython.style.display = "none";

function toggleContainer3() {
    if (contPython.style.display === "none") {
        contPython.style.display = "block";
    } else {
        contPython.style.display = "none";
    }
}

//=======================================================

// Other Libraries Section
let otherLibrary = document.getElementById('otherLibrary');
let contOtherLibrary = document.getElementById("contOtherLibrary");

otherLibrary.addEventListener('click', function () {
    contOtherLibrary.style.backgroundColor = 'rgb(238, 233, 218)';
});

contOtherLibrary.style.display = "none";

function toggleContainer4() {
    if (contOtherLibrary.style.display === "none") {
        contOtherLibrary.style.display = "block";
    } else {
        contOtherLibrary.style.display = "none";
    }
}