// gsap.to("#nav", {
//     backgroundColor:"#000",
//   height:"120px",
//   duration: 0.5,
//   scrollTrigger:{
//     trigger:"#nav",
//     scroller:"body",
//     start:"top -10%",
//     end:"top -11%",
//     scrub:1
//   }
// })

var tl = gsap.timeline();

tl.to(".loader", {
  opacity:"0",
  duration:5,
  delay:0.2
})



gsap.from("#nav", {
    backgroundColor:"transparent",
    delay:5,
    duration:0.5,
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        start:"top -20%",
        end:"top -40%",
        scrub:1
    }
})

gsap.from("#page1 h2",{
    opacity:0,
    top:"20%",
    delay:5,
    duration:5
})

gsap.from("#page1 h1",{
    opacity:0,
    top:"20%",
    delay:5,
    duration:5
})

gsap.from("#left img", {
   left:"45%",
   duration:2,
   scrollTrigger:{
    trigger:"#page2",
    scroller:"body",
    start:"top 95%",
    end:"top 30%",
    scrub:2
   }
})

gsap.from("#middle img", {
  right:"45%",
  duration:2,
  scrollTrigger:{
   trigger:"#page2",
   scroller:"body",
   start:"top 85%",
   end:"top 40%",
   scrub:2
  }
})

gsap.from("#right img", {
  left:"45%",
  duration:2,
  scrollTrigger:{
   trigger:"#page2",
   scroller:"body",
   start:"top 29%",
   end:"top 100%",
   scrub:2
  }
})


  var swipers = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
