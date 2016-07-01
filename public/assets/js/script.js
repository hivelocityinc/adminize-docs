$(function () {

  var apiURL = "https://api.github.com/repos/hivelocityinc/adminize/releases/latest";

  function setReleaseName () {
    var $tagName;
    $.ajax({
      url: apiURL
    })
    .then(function (data) {
      $tagName = data.tag_name;
      $('.js-release-name').text($tagName);
    }, function () {
      console.log("Fail");
    });
  }

  setReleaseName();

});
