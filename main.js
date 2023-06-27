// CUSTOM SELECT

// const customSelect = document.getElementById('customSelect');
// const selectOptopnWrapper = document.getElementById('selectOptopnWrapper');
// const options = document.getElementsByClassName('custom-select__option');

// function showOptions() {
//     !selectOptopnWrapper.style.cssText || selectOptopnWrapper.style.cssText === 'display: none;' ? selectOptopnWrapper.style.cssText = 'display: flex;'
//         : selectOptopnWrapper.style.cssText = 'display: none;'

// }
// customSelect.addEventListener('click', showOptions);
// console.log(customSelect);


// function checkOptions() {

// }

// checkOptions()


//Tabs
function showTabs(evt, tabNames) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabNames).style.display = "flex";
  evt.currentTarget.className += " active";
}


// HELPING BG IMG

window.addEventListener('scroll', () => {
  const helpingBackground = document.getElementById('helpingBackground');
  if (Math.round(pageYOffset) >= 500) {
    helpingBackground.style.cssText = 'transform: rotate(0deg);'

    Math.round(pageYOffset) >= 1500 ? helpingBackground.style.cssText = 'transform: rotate(5deg);' : null
  } else;
});

// SUCCESS BG IMG

window.addEventListener('scroll', () => {
  const successBackground = document.getElementById('successBackground');
  console.log(Math.round(pageYOffset))

  if (Math.round(pageYOffset) >= 1500) {
    successBackground.style.cssText = 'transform: rotate(0);'

    Math.round(pageYOffset) >= 2500 ? successBackground.style.cssText = 'transform: rotate(-5deg)' : null
  } else;
});


//SUCCESS SLIDER

$(document).ready(function () {
  $('.slider-wrapper').slick({
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 6,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});
