'use strict'

// $('header h1').text('This works!'); //THis is a test for file being called correctly in index.html.

var projects = [];

function Project (projectDataObj) {
  this.title = projectDataObj.title;
  this.description = projectDataObj.description;
  this.url = projectDataObj.url;
  this.imgUrl = projectDataObj.imgUrl;
  this.publishedOn = projectDataObj.publishedOn;
  this.category = projectDataObj.category;
}

Project.prototype.toHtml = function() {
  var templateScript = $('#article-template').html();
  var template = Handlebars.compile(templateScript);

  // var $newProject = $('article.template').clone();

  // $newProject.removeClass('template');

  // if (!this.publishedOn) $newProject.addClass('draft');
  // $newProject.attr('data-category', this.category);

    // jQuery appends the DOM for properties above.
  // $newProject.find('a').attr('href', this.url);
  // $newProject.find('img').attr('alt', this.description);
  // $newProject.find('img').attr('src', this.imgUrl);
  // $newProject.find('h2').text(this.title);
  // $newProject.find('section.project-description').html(this.description);
  // $newProject.find('time').attr('datetime', this.publishedOn);

  // Display the date as a relative number of 'days ago'
  // $newProject.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago.');
  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? `about ${this.daysAgo} days ago.` : '(draft)';
  // $newProject.append('<hr>');
  // return $newProject;
  return template(this)
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
