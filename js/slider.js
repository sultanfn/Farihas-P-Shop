/**************************************
 * Glide JS Carousel
 **************************************/
const heroSlide = document.getElementById("glide-1");
const latestProduct = document.getElementById("glide-2");
const related = document.getElementById("glide-3");
const testimonial = document.getElementById("glide-4");
const news = document.getElementById("glide-5");

/**************************************
 * HERO
 **************************************/

if(heroSlide){
    new Glide(heroSlide, {
        type: "carousel",
        startAt: 0,
        autoplay: 3000,
        hoverpause: true,
        perView: 1,
        animationDuration: 800,
        animationTimingFunc: "linear",
    }).mount()
}

/**************************************
 *Latest Products
 **************************************/
if(latestProduct){
    new Glide(latestProduct,{
        type: "carousel",
        startAt: "0",
        perView: 4,
        rewin: false,
        animationDuration: 800,
        animationTimingFunc: "cubic-bezier(.165, .840, .440, 1.000)",
        breakpoints: {
            1200:{
                perView: 3,
            },
            768:{
                perView: 2,
            },
        },
    }).mount()
}

/**************************************
 *Related Products
 **************************************/

// if (related) {
//   new Glide(related, {
//     type: "carousel",
//     startAt: 0,
//     perView: 4,
//     rewin: false,
//     animationDuration: 800,
//     animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
//     breakpoints: {
//       1200: {
//         perView: 3,
//       },
//       768: {
//         perView: 2,
//       },
//     },
//   }).mount();
// }
/**************************************
 *Testimonials
 **************************************/
if(testimonial){
    new Glide(testimonial,{
        type: "carousel",
        startAt: "0",
        perView: 1,
        rewin: false,
        animationDuration: 800,
        animationTimingFunc: "cubic-bezier(.165, .840, .440, 1.000)",
    }).mount()
}

/**************************************
 *News
 **************************************/
if(news){
    new Glide(news,{
        type: "carousel",
        startAt: "0",
        perView: 3,
        rewin: false,
        autoplay: 3000,
        animationDuration: 800,
        animationTimingFunc: "cubic-bezier(.165, .840, .440, 1.000)",
        breakpoints: {
            998: {
              perView: 2,
            },
            768: {
              perView: 1,
            },
          },
    }).mount()
}


// AOS initialize
AOS.init();