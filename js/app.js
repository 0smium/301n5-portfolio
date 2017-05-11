'use strict'

// $('header h1').text('This works!'); //THis is a test for file being called correctly in index.html.

var projects = [];

function Project (opts) {
  this.title = opts.title;
  this.description = opts.description;
  this.url = opts.url;
  this.imgUrl = opts.imgUrl;
  this.publishedOn = opts.publishedOn;
}

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();

  $newProject.removeClass('template');

  if (!this.publishedOn) $newProject.addClass('draft');
  // $newProject.data('category', this.category);  //!!Save for later.

    // jQuery appends the DOM for properties above.
  $newProject.find('a').attr('href', this.url);
  $newProject.find('img').attr('alt', this.description);
  $newProject.find('img').attr('src', this.imgUrl);
  $newProject.find('h1').text(this.title);
  $newProject.find('section.project-description').html(this.description);
  $newProject.find('time').attr('datetime', this.publishedOn);

  // Display the date as a relative number of 'days ago'
  $newProject.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago.');
  $newProject.append('<hr>');
  return $newProject;
};

projectData.sort(function(a,b) {
  // Sort the Projects based on newest first.
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

projectData.forEach(function(projectObject) {
  // Iterate over projectData and push results to projects array.
  projects.push(new Project(projectObject));
});

projects.forEach(function(a) {
  $('#projects').append(a.toHtml());
});
