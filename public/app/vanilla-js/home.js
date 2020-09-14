
let menuButton = document.getElementById('menu-button')
let mobileMenu = document.getElementById('mobile-menu');

let navContactButton = document.getElementById('nav-contact-button');
let navContactButtonMobile = document.getElementById('nav-contact-button-mobile');
let contactButton = document.getElementById('contact-button');
let contactMenu = document.getElementById('contact-menu');

let menuClose = document.getElementById('close-button');
let innerButton = document.getElementById('inner-menu-button');

let titleContainer = document.getElementById('banner-title-main');
let birdTitle = 'Solar Panel Bird Exclusion';
let bedBugTitle = 'Bye Bye, Bed Bugs.';
let insectTitle = 'Insect and Spider Control';

let titleStopper = document.getElementById('title-stopper')
let titleStopperTwo = document.getElementById('title-stopper-two')
let titleStopperThree = document.getElementById('title-stopper-three')
let titleStopperMobile = document.getElementById('title-stopper-mobile')
let titleStopperMobileTwo = document.getElementById('title-stopper-mobile-two')

titleStopper.addEventListener('click', stopTitle)
titleStopperTwo.addEventListener('click', stopTitle)
titleStopperThree.addEventListener('click', stopTitle)

titleStopperMobile.addEventListener('click', stopTitle)
titleStopperMobileTwo.addEventListener('click', stopTitle)

// titleContainer.innerHTML = birdTitle;

// -------------------------------------------------------------------

menuButton.addEventListener('click', menuToggle);
contactButton.addEventListener('click', contactToggle);
navContactButton.addEventListener('click', contactToggle);
navContactButtonMobile.addEventListener('click', contactToggle);
menuClose.addEventListener('click', contactToggle);
innerButton.addEventListener('click', menuToggle);
// console.log(contactButton, contactMenu)

// -------------------------------------------------------------------

mobileMenu.style.display = 'none';
contactMenu.style.display = 'none';
contactMenu.style.opacity = 0;
contactMenu.style.transitionDuration = '.6s';

// -------------------------------------------------------------------

function menuToggle () {

  // console.log('its triggering')
  // console.log(menuButton)
  // console.log(mobileMenu.style.display)

  if (mobileMenu.style.display == 'none'){
    mobileMenu.style.display = 'flex';
    return;
  } else if (mobileMenu.style.display == 'flex'){
    mobileMenu.style.display ='none';
    return;
  }

}

// -------------------------------------------------------------------

function contactToggle () {

  // console.log('its triggering')
  // console.log(contactButton)
  // console.log(contactMenu.style.display)

  if (contactMenu.style.display == 'none'){

    contactMenu.style.display = 'flex';

    setTimeout (() => {
      contactMenu.style.opacity = '1';
    },100)

    return;
  } else if (contactMenu.style.display == 'flex'){

    contactMenu.style.opacity = '0';

    setTimeout (() => {
      contactMenu.style.display ='none';
    },600)

    return;
  }

}

// -------------------------------------------------------------------

function stopTitle(){
  console.log('stopping title swap')
  clearInterval(titleInterval)
}

titleContainer.style.transitionDuration = '.3s';

let titleInterval;

titleInterval = setInterval( () => {

  console.log('interval running')

  if (titleContainer.innerHTML == 'Every Service Guaranteed.') {
    return;
  }

  titleContainer.style.opacity = '0';

setTimeout(()=>{
  if (titleContainer.innerHTML == birdTitle) {
    titleContainer.innerHTML = bedBugTitle;
    setTimeout(()=>{
      titleContainer.style.opacity = '1';
    },300)
    return;
  } else if (titleContainer.innerHTML == bedBugTitle){
    titleContainer.innerHTML = insectTitle;
    setTimeout(()=>{
      titleContainer.style.opacity = '1';
    },300)
    return;
  } else if (titleContainer.innerHTML == insectTitle) {
    titleContainer.innerHTML = birdTitle;
    setTimeout(()=>{
      titleContainer.style.opacity = '1';
    },300)
    return;
  }
  return;
},300)
return;

}, 4500)
