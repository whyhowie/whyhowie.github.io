$(document).ready(function() {
  const galleries = document.querySelectorAll('.gallery');
  console.log(galleries.length);


  for (var i=0; i<2; i++) {
    let gallery = galleries[i];
    let gallery_scroller = gallery.querySelector('.gallery_scroller');
    let gallery_item_size = gallery_scroller.querySelector('div').clientWidth;

    gallery.querySelector('.btn.next').addEventListener('click', scrollToNextPage);
    gallery.querySelector('.btn.prev').addEventListener('click', scrollToPrevPage);

    function scrollToNextPage() {
      gallery_scroller.scrollTo(gallery_scroller.scrollLeft + gallery_item_size, 0);
    }
    function scrollToPrevPage() {
      gallery_scroller.scrollTo(gallery_scroller.scrollLeft - gallery_item_size, 0);
    }
  }

  // For paginated scrolling, simply scroll the gallery one item in the given
  // direction and let css scroll snaping handle the specific alignment.

});
