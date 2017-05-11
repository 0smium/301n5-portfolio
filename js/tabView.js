'use strict'

//Create pageView object for holding all functions for display tweaks and tab navigation.
var pageView = {};

//Allows single-page app to display 'tab-content' using main-nav.
pageView.handleMainNav = function () {
  $('.nav').on('click', '.tab', function() {
    $('.tab-content').hide();  //Hides all tab-content sections.
    $('#' + $(this).attr('data-content')).fadeIn('slow');  //Fade in single .tab-content based on .tab element's data-content attribute.
  });
  $('.main-nav .tab:first').click(); //Event listener for .main-nav and .tab:first elements.
};

//Call the above function(s).
pageView.handleMainNav();
