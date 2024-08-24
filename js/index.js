document.addEventListener("DOMContentLoaded", function () {
  //뉴스스탠드 언론가 세로 슬라이드
  var swiper = new Swiper(".myNewsSwiper", {
    direction: "vertical",
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
  });
});
