const projects = document.querySelector('.projects')
const skills = document.querySelector('.skills')
const logo = document.querySelector('#logo')
const root = document.querySelector(':root')
const social_media_icons = document.querySelectorAll('.fa')
//const bounding = projects.getBoundingClientRect()
//console.log(bounding)

function isInViewport (elem, offset = 0) {
    const { top, bottom } = elem.getBoundingClientRect();
    //return (bounding.top >= 0 && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset);
    return top <= 0 && bottom > 0
}

/* const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
    const { top, left, bottom, right } = el.getBoundingClientRect();
    const { innerHeight, innerWidth } = window;
    return partiallyVisible
      ? ((top > 0 && top < innerHeight) ||
          (bottom > 0 && bottom < innerHeight)) &&
          ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
      : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
  }; */

function makeWhiteText() {
    root.style.setProperty('--text-color', 'white')
    social_media_icons.forEach(icon => {
        icon.style.color = 'white'
    })
}
function makeBlackText() {
    root.style.setProperty('--text-color', 'black')
    social_media_icons.forEach(icon => {
        icon.style.color = 'black'
    })
}

document.addEventListener('scroll', () => {
    if(isInViewport( projects ) || isInViewport(skills)) {
        makeBlackText()
    }
    else {
        makeWhiteText()
    }

})
    
    