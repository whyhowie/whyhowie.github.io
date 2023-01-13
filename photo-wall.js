// Make image lightboxes
// https://stackoverflow.com/questions/10910537/how-to-show-an-image-in-a-popup-on-click

$('body').append(`<div id="larger-image"></div>
  <div id="image-overlay"></div>`)

let overlayFlag = false;


function enableLightboxes (selector) {

  // Fade-in

  $(selector).click(function () {
    var projectTitle = $(this).closest(".project").children("h2")[0].textContent
    var $img = $(this);
    $('#larger-image').html($img.clone().add(`<p id="project-image-title">${projectTitle}</p>`)).add($('#image-overlay')).fadeIn();

    // Stop all autoscrolling
    try {
      horizontalPhotoWalls.forEach( context => {
        autoPageScroll(context, false)
      })
    } catch {}
    
    overlayFlag = true;

  });


  // Fade-out
  $('#larger-image').add($('#image-overlay')).click(function () {
    $('#larger-image').add($('#image-overlay')).fadeOut(
      function () {
        $('#larger-image').empty();
      }
    )

    overlayFlag = false;  // change to false before restarting auto scroll

    // Restart all autoscrolling
    try {
      horizontalPhotoWalls.forEach( context => {
        autoPageScroll(context, true)
      })
    } catch {}

  })

}



// Enable lightbox for photo wall columns
enableLightboxes('.photo-wall-columns img')

// Enable lightbox for photo wall grid
enableLightboxes('.photo-wall-grid img')


// -------------------------------------------------------------------------

// Horizontal infinite loop
// https://codepen.io/vincentorback/pen/zxRyzj


const autoPageScroll = function (context, status=true) {
  // https://stackoverflow.com/questions/9837676/smooth-auto-scroll-by-using-javascript
  // automatic scrolling
  try {
    clearInterval(context.pageScrollInterval)
  } catch { 
  }

  if (status && !overlayFlag) {
    context.pageScrollInterval = setInterval(function () {
      context.scrollBy(1,0);
    }, 10);
  }
}


let horizontalPhotoWalls = document.querySelectorAll('.photo-wall-row')

horizontalPhotoWalls.forEach( context => {

  let imgElements = Array.from(context.querySelectorAll('.photo-wall-row > div'))
  let clonedImgElements = []

  context.disableScroll = 0;

  let scrollWidth = 0,
    scrollPos = 0,
    clonesWidth = 0;


  function cloneElements(n) {
    // Clone the first n elements and append them
    console.log(imgElements.length)
    let imgElementsToClone = imgElements.slice(0,n)
    imgElementsToClone.forEach( (imgElement) => {
      let clonedImgElement = imgElement.cloneNode(true)
      clonedImgElements.push(clonedImgElement)
      context.appendChild(clonedImgElement)
    })
  }


  function getScrollPos() {
    let pos = (context.pageXOffset || context.scrollLeft) - (context.clientLeft || 0)
    return pos;
  }

  function setScrollPos (pos) {
    context.scrollLeft = pos;
  }

  function getClonesWidth () {
    clonesWidth = 0;
    for (i = 0; i < clonedImgElements.length; i++) {
      let clonedImgWidth = clonedImgElements[i].clientWidth //  must wait till images are fully loaded
      clonesWidth = clonesWidth + clonedImgWidth
    }
    return clonesWidth;
  }

  function reCalc () {
    scrollPos = getScrollPos();
    scrollWidth = context.scrollWidth;
    clonesWidth = getClonesWidth();

    if (scrollPos <= 0) {
      setScrollPos(1); // Scroll 1 pixel to allow scrolling to the right
    }
  }

  function scrollUpdate () {

    if (!context.disableScroll) {
      scrollPos = getScrollPos();

      if (clonesWidth + scrollPos >= scrollWidth) {
        // Scroll to the left when you’ve reached the right end
        setScrollPos(1); // Scroll 1 pixel to allow scrolling to the right
        context.disableScroll = true;
      } else if (scrollPos <= 0) {
        // Scroll to the bottom when you reach the top
        setScrollPos(scrollWidth - clonesWidth);
        context.disableScroll = true;
      }
    }

    if (context.disableScroll) {
      // Disable scroll-jumping for a short time to avoid flickering
      window.setTimeout(function () {
        context.disableScroll = false;
      }, 40);
    }
  }


  function initHorizontalLoopScroll () {
    cloneElements(4); 
    // Set to 4 to cover sufficient width

    enableLightboxes('.photo-wall-row img');
  
    reCalc();
  
    autoPageScroll(context)
    
    context.addEventListener('scroll', function () {
      window.requestAnimationFrame(scrollUpdate);
    }, false);
  
    window.addEventListener('resize', function () {
      window.requestAnimationFrame(reCalc);
    }, false);
  }
  
  
  window.addEventListener('DOMContentLoaded', function () {
    setTimeout(initHorizontalLoopScroll, 2000)
  }, false)
  //  Wait a few moments until the images are loaded (maybe there is a better way)


  //  Pause/Restart Autoscroll when mouse enters/leaves
  context.addEventListener('mouseenter', function () {
    autoPageScroll(context, false)
  })
  
  context.addEventListener('mouseleave', function () {
    autoPageScroll(context, true)
  })


})





