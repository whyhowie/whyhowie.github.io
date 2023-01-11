$(document).ready(function() {
  const galleries = document.querySelectorAll('.gallery');
  console.log(galleries.length);

  let imgEnlargedFlag = 0
  let enlargedImg = []

  // Add buttons
  $("<i class='fa-solid fa-chevron-left fa-lg btn prev'></i>").appendTo('.gallery-scroller')
  $("<i class='fa-solid fa-chevron-right fa-lg btn next'></i>").appendTo('.gallery-scroller')


  galleries.forEach( gallery => {
    let galleryScroller = gallery.querySelector('.gallery-scroller')
    
    // Button behavior
    gallery.querySelector('.btn.next').addEventListener('click', scrollToNextPage);
    gallery.querySelector('.btn.prev').addEventListener('click', scrollToPrevPage);

    // galleryScroller.currentSlide = 0;

    function scrollToNextPage(event) { 
      let scrollWidth = galleryScroller.children[0].clientWidth
      galleryScroller.scrollLeft += scrollWidth
    }
    function scrollToPrevPage(event) {
      let scrollWidth = galleryScroller.children[0].clientWidth
      galleryScroller.scrollLeft -= scrollWidth
      // if (galleryScroller.currentSlide > 0) {
      //   --galleryScroller.currentSlide
      // }
      // galleryScroller.children[galleryScroller.currentSlide].scrollIntoView({behavior: "smooth", block: "nearest", inline: "center"});
    }
  })

  // For paginated scrolling, simply scroll the gallery one item in the given
  // direction and let css scroll snaping handle the specific alignment.
});

// Make image lightboxes
// https://stackoverflow.com/questions/10910537/how-to-show-an-image-in-a-popup-on-click
$('body').append(`<div id="larger-image"></div>
  <div id="image-overlay"></div>`)

// Fade-in
$('.gallery img').click(function () {
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