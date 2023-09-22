
gsap.from('.img1', {

    y: 100,
    delay: 0.5,
    duration: 1,
    opacity:0,
})
gsap.from('.img2', {

    x: 100,
    delay: 0.5,
    duration: 1,
    opacity:0,
})
gsap.from('.img3', {

    y: -100,
    delay: 0.5,
    duration: 1,
    opacity:0,
})

gsap.from('.page2 h2,h3,.roundline,h4',{
    opacity: 0,
    y: 100,
    stagger:1,
    delay: 0.4,
    scrollTrigger: {
        trigger: ".page2 h2,h3,.roundline,h4",
        scroller: "body",
        start: "top 80%",
        end: "top 40%",
        scrub:3,
        
    }
})

gsap.from('.page3 .left .img01,.img02,.img03,.img04', {
    y: 100,
     delay: 0.2,
    duration: 1,
    opacity: 0,
     scrollTrigger: {
        trigger: ".page3 .left .img01,.img02,.img03,.img04",
        scroller: "body",
        start: "top 80%",
        end: "top 40%",
        scrub:3,
        
    }
})

gsap.from('.page3 .right h1,p', {
    y: 100,
     delay: 0.2,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: ".page3 .right h1,p",
        scroller: "body",
        start: "top 80%",
        end: "top 40%",
        scrub:3,
        
    }
})