const main = document.querySelector('main');
const burgerBtn = document.getElementById('burgerBtn');
const burgerMenu = document.getElementById('burgerMenu');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const scrollBar = document.querySelector('#scrollBar');

function loadPageDelay() {
  if (body.classList.contains('homePage')) {
    return 3000;
  } else {
    return 250;
  }
}

window.onload = function () {
  main.classList.add('loaded_hiding');
  body.classList.add('look');
  scrollBar.classList.add('hiding')
  window.setTimeout(function () {
      main.classList.add('loaded');
      main.classList.remove('loaded_hiding');
      body.classList.remove('look');
      scrollBar.classList.remove('hiding')
      burgerBtn.addEventListener('click', function() {
          body.classList.toggle('look');
          burgerMenu.classList.toggle('active');
          burgerBtn.classList.toggle('active');
      })
  }, loadPageDelay());
}


// PORTFOLIO
const portfolioItems = document.querySelectorAll('.portfolio-item');
const portfolioItemInfo = document.querySelectorAll('.portfolio-item__info');
const portfolioInfoClose = document.querySelectorAll('.portfolio-item__info_close');

portfolioItems.forEach(function(item, index) {
    item.addEventListener('click', function() {
        for(let i = 0; i < portfolioItemInfo.length; i++) {
          if(index == i) {
            portfolioItemInfo[i].classList.add('active');
            body.classList.add('look');
            scrollBar.classList.add('hiding')
          }
        }
    });
});

portfolioInfoClose.forEach(function(item) {
  item.addEventListener('click', function() {
    for(let i = 0; i < portfolioItemInfo.length; i++) {
        portfolioItemInfo[i].classList.remove('active');
    }
    body.classList.toggle('look');
    scrollBar.classList.remove('hiding')
  })
});

let animItems = document.querySelectorAll('.anim-item');
let anchors = document.querySelectorAll('.anchor')
let anchorLinks = document.querySelectorAll('.header-nav__item')

window.addEventListener('scroll', animOnScroll);

anchorLinks.forEach(function(link) {
  link.addEventListener('click', function() {
      burgerMenu.classList.remove('active');
      burgerBtn.classList.remove('active');
  })
})

function animOnScroll() {

    for(let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i];
      const anchorHight = anchor.offsetHeight;
      const anchorOffSet = offset(anchor).top - 80;
      const animStart = 4;

      let anchorPoint = (window.innerHeight - anchorHight) / anchorOffSet;
      if (anchorHight > window.innerHeight) {
        anchorPoint = (window.innerHeight - window.innerHeight) / anchorOffSet;
      }
      anchorLinks[i].classList.remove('active');
      if((pageYOffset > anchorOffSet - anchorPoint) && pageYOffset < (anchorOffSet + anchorHight)) {
        anchorLinks[i].classList.add('active');
      }
    }

    for(let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      const animItemHight = animItem.offsetHeight;
      const animItemOffSet = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHight / animItemOffSet;
      if (animItemHight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animItemOffSet;
      }

      if((pageYOffset > animItemOffSet - animItemPoint) && pageYOffset < (animItemOffSet + animItemHight)) {
        animItem.classList.add('anim-active');
      } 
      // else {
      //   animItem.classList.remove('anim-active');
      // }
    }
}
function offset(el) {
    let rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

setTimeout(() => {
  animOnScroll();
}, loadPageDelay());

// ScrollBar 
const scrollBarLine = document.querySelector('#scrollBar > span');
window.addEventListener('scroll', function() {
  scrollBarLine.style.width = (offset(header).top / (body.scrollHeight - window.innerHeight)) * 100 + '%';
})


// Tik-tak
function setValue() {
  const utc0 = {
    hour: new Date().getUTCHours() % 12,
    min: new Date().getUTCMinutes()
  }
  const minutesArrows = document.getElementsByClassName('clock-arrow-min');
  const time = {
    california: getDeg(utc0.hour + 4),
    tokio: getDeg(utc0.hour + 9),
    davos: getDeg(utc0.hour + 1),
    london: getDeg(utc0.hour),
    melbourne: getDeg(utc0.hour + 11)
  }
  function getDeg(timeZone) {
    return 180 + (((timeZone) % 12) * 31.66666666666667)
  }
  // setMinutes
  for(let i = 0; i < minutesArrows.length; i++) {
    let minuteArrow = minutesArrows[i];
    minuteArrow.style.transform = `rotate(${180 + (utc0.min * 6.33)}deg)`;
  }
  // setHours
  const hourArrow = {
    california: document.querySelector('#clockUSA .clock-arrow-hour'),
    tokio: document.querySelector('#clockTokio .clock-arrow-hour'),
    davos: document.querySelector('#clockDavos .clock-arrow-hour'),
    london: document.querySelector('#clockLondon .clock-arrow-hour'),
    melbourne: document.querySelector('#clockMelbourne .clock-arrow-hour'),
  }
  // setRotateProperti
  hourArrow.california.style.transform = `rotate(${time.california}deg)`;
  hourArrow.tokio.style.transform = `rotate(${time.tokio}deg)`;
  hourArrow.davos.style.transform = `rotate(${time.davos}deg)`;
  hourArrow.london.style.transform = `rotate(${time.london}deg)`;
  hourArrow.melbourne.style.transform = `rotate(${time.melbourne}deg)`;
}
setInterval(setValue, 5000);


// anchor logic 

const btnFintech = document.querySelector('.header-fintech');
const btnMiltech = document.querySelector('.header-miltech');
const btnClimate = document.querySelector('.header-climate');
const btnNext = document.querySelector('.header-next');
const btnAi = document.querySelector('.header-ai');

const anchorFintech = document.getElementById('fintech');
const anchorMiltech = document.getElementById('miltech');
const anchorClimate = document.getElementById('climate');
const anchorNext = document.getElementById('next');
const anchorAi = document.getElementById('ai');


btnFintech.addEventListener('click', function() {
    anchorFintech.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
});

btnMiltech.addEventListener('click', function() {
    anchorMiltech.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
});

btnClimate.addEventListener('click', function() {
    anchorClimate.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
});

btnNext.addEventListener('click', function() {
    anchorNext.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
});

btnAi.addEventListener('click', function() {
    anchorAi.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
});
