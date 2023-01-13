// Make image lightboxes
// Needs to be an <img>
// https://stackoverflow.com/questions/10910537/how-to-show-an-image-in-a-popup-on-click
$('body').append(`<div id="larger-image"></div>
  <div id="image-overlay"></div>`)

// Fade-in
$('img.enable-lightbox').click(function () {
  var projectTitle = $(this).closest(".project").children("h2")[0].textContent
  var $img = $(this);
  $('#larger-image').html($img.clone().add(`<p id="project-image-title">${projectTitle}</p>`)).add($('#image-overlay')).fadeIn();
});

// Fade-out
$('#larger-image').add($('#image-overlay')).click(function () {
  $('#larger-image').add($('#image-overlay')).fadeOut(
    function () {
      $('#larger-image').empty();
    }
  )
})