window.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 2000,
    },

    pagination: {
      el: '.swiper-pagination',
    },

    noSwiping: true,
    SimulateTouch: false,
  });

  document.querySelector(".block__burger").addEventListener('click', function () {
    document.querySelector('.menu__burger').classList.toggle('menu__burger-active')
  })
  document.querySelector(".burger__close").addEventListener('click', function () {
    document.querySelector('.menu__burger').classList.toggle('menu__burger-active')
  })

  document.querySelectorAll('.work__link').forEach(function (tabsbtn) {
    tabsbtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      const link = event.currentTarget.dataset.path

      document.querySelectorAll('.work-block').forEach(function (tabContent) {
        tabContent.classList.remove('work-block-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add("work-block-active")

      document.querySelectorAll('.work__link-active').forEach(function (Content) {
        Content.classList.remove('work__link-active')
      })
      document.querySelector(`[data-path="${link}"]`).classList.add("work__link-active")
    })
  })

  $(function () {
    $("#accordion").accordion({
      active: false,
      collapsible: true,
      heightStyle: "content",
    });
  });

})
