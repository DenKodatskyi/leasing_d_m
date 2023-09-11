
const tabItem = document.querySelectorAll('.tabs__btn_item');
const tabContent = document.querySelectorAll('.tabs__content_item');

tabItem.forEach((tab) => {
  tab.addEventListener('click', openTab)
});

function openTab(ev) {
  const tabTarget = ev.currentTarget;
  tabItem.forEach((item) => {
    item.classList.remove('tabs__btn_item--active')
  })
  tabTarget.classList.add('tabs__btn_item--active')
};

/* Menu button */
const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
  menuList.classList.toggle('menu__list--active')
});



/* SWIPER SLIDER============================= */
  const swiper = new Swiper(".swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    effect: "fade",
  });