$(document).ready(function() {
  const gallery = document.querySelector('#paginated_gallery');
  const gallery_scroller = gallery.querySelector('.gallery_scroller');
  const gallery_item_size = gallery_scroller.querySelector('div').clientWidth;

  gallery.querySelector('.btn.next').addEventListener('click', scrollToNextPage);
  gallery.querySelector('.btn.prev').addEventListener('click', scrollToPrevPage);

  // For paginated scrolling, simply scroll the gallery one item in the given
  // direction and let css scroll snaping handle the specific alignment.
  function scrollToNextPage() {
    gallery_scroller.scrollTo(gallery_scroller.scrollLeft + gallery_item_size, 0);
  }
  function scrollToPrevPage() {
    gallery_scroller.scrollTo(gallery_scroller.scrollLeft - gallery_item_size, 0);
  }

});
