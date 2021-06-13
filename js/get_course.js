var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var course = urlParams.get('course');

document.body.innerHTML += "<script src='../courses/"+course+"/content.js'></script>";