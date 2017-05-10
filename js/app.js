'use strict'

// $('header h1').text('This works!');

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
  // $newProject.data('category', this.category);

    // lots of $newArticle.find...  (look at jQuery $.find docs)
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
  // REVIEW: Take a look at this sort method; This may be the first time we've seen it.
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

projectData.forEach(function(projectObject) {
  // REVIEW: Take a look at this forEach method; This may be the first time we've seen it.
  projects.push(new Project(projectObject));
});

projects.forEach(function(a) {
  $('#projects').append(a.toHtml());
});
