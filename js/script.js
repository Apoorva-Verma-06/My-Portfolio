$(function () { 
	// In case of Blur event i.e. when user clicks somewhere else, blur event handling
	$("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });
	// In Firefox and Safari, the click event doesn't retain the focus
  // on the clicked button. Therefore, the blur event will not fire on
  // user clicking somewhere else in the page and the blur event handler
  // which is set up above will not be called.
  // Refer to issue #28 in the repo.
  // Solution: force focus on the element that the click event fired on
	$("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});


(function (global) {

var av = {};

var abouthtml = "snippets/about.html";
var academicshtml = "snippets/academics.html";
var curricularhtml = "snippets/curricular.html";
var certificateshtml = "snippets/certificates.html";
var contacthtml = "snippets/contact.html";

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='images/ajax-loader.gif'></div>";
  document.querySelector(selector).innerHTML = html;
};


// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {

// On first load, show home view
showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  abouthtml,
  function (responseText) {
   document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
});

// Load the about view
av.loadabout = function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
  abouthtml,
  function (responseText) {
   document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

// Load the academics view
av.loadacademics = function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
  academicshtml,
  function (responseText) {
   document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

// Load the curricular view
av.loadcurricular = function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
  curricularhtml,
  function (responseText) {
   document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

// Load the certificates view
av.loadcertificates = function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
  certificateshtml,
  function (responseText) {
   document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

// Load the contact view
av.loadcontact = function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
  contacthtml,
  function (responseText) {
   document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};


global.$av = av;

})(window);
