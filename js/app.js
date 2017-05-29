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
  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? `Published about ${this.daysAgo} days ago.` : '(draft)';
  return template(this)
};

Project.loadAll = function(rawData) {

  rawData.sort(function(a,b) {
    // Sort the Projects based on newest first.
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });

  rawData.forEach(function(projectEle) {
    // Iterate over projectData and push results to projects array.
    projects.push(new Project(projectEle));
  });
}

projects.forEach(function(a) {
  $('#projects').append(a.toHtml());
});
