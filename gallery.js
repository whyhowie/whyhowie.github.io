$(document).ready(function() {
  const galleries = document.querySelectorAll('.gallery');
  console.log(galleries.length);

  let imgEnlargedFlag = 0
  let enlargedImg = []

  // Add buttons
  $("<i class='fa-solid fa-chevron-left fa-lg btn prev'></i>").appendTo('.gallery_scroller')
  $("<i class='fa-solid fa-chevron-right fa-lg btn next'></i>").appendTo('.gallery_scroller')


  galleries.forEach( gallery => {
    let gallery_scroller = gallery.querySelector('.gallery_scroller')
    
    // Button behavior
    gallery.querySelector('.btn.next').addEventListener('click', scrollToNextPage);
    gallery.querySelector('.btn.prev').addEventListener('click', scrollToPrevPage);

    gallery_scroller.currentSlide = 0;

    function scrollToNextPage(event) {
      if (gallery_scroller.currentSlide < gallery_scroller.children.length) {
        ++gallery_scroller.currentSlide
      }
      gallery_scroller.children[gallery_scroller.currentSlide].scrollIntoView({behavior: "smooth", block: "nearest", inline: "center"});
    }
    function scrollToPrevPage(event) {
      if (gallery_scroller.currentSlide > 0) {
        --gallery_scroller.currentSlide
      }
      gallery_scroller.children[gallery_scroller.currentSlide].scrollIntoView({behavior: "smooth", block: "nearest", inline: "center"});
    }
  })

  // For paginated scrolling, simply scroll the gallery one item in the given
  // direction and let css scroll snaping handle the specific alignment.
});

// Make image lightboxes
// https://stackoverflow.com/questions/10910537/how-to-show-an-image-in-a-popup-on-click
$('body').append(`<div id="larger-image"></div>
  <div id="image-overlay"></div>`)

$('.gallery img').click(function () {
  console.log($(this).attr('src'))
  var $img = $(this);
  $('#larger-image').html($img.clone()).add($('#image-overlay')).fadeIn();
});
$('#larger-image').add($('#image-overlay')).click(function () {
  $('#larger-image').add($('#image-overlay')).fadeOut(
    function () {
      $('#larger-image').empty();
    }
  )
})