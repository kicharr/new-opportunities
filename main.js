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

    Math.round(pageYOffset) >= 1000 ? helpingBackground.style.cssText = 'transform: rotate(5deg);' : null
  } else;

});



// https://xn----7sbbaqhlkm9ah9aiq.net/news-new/fiksatsiya-bloka-pri-prokrutke.html