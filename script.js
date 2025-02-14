const lenis = new Lenis({    // Lenis Code
    autoRaf: true,
});

lenis.on('scroll', (e) => {
    console.log(e);
});

const page1 = document.querySelector("#page1");  // Custom Cursor Code
const page2 = document.querySelector("#page2");
const page3 = document.querySelector("#page3");
const cursor = document.querySelector("#cursor");

page1.addEventListener("mousemove", function(dets){
    gsap.to(cursor,{
        x: dets.x,
        y: dets.y,
        duration: 0.2,
        ease: "power.out"
    })
});
page2.addEventListener("mousemove", function(dets){
    gsap.to(cursor,{
        x: dets.x,
        y: dets.y,
        duration: 0.2,
        ease: "power.out"
    })
});
page3.addEventListener("mousemove", function(dets){
    gsap.to(cursor,{
        x: dets.x,
        y: dets.y,
        duration: 0.2,
        ease: "power.out"
    })
});

let mm = gsap.matchMedia();

mm.add("(min-width: 800px)", () => {   // Desktop GSAP Code
    const lenis = new Lenis({    // Lenis Code
        autoRaf: true,
    });
    
    lenis.on('scroll', (e) => {
        console.log(e);
    });
    
    gsap.to("#page2", {
        backgroundColor: "#F72C5B",
        duration: 2,
        delay: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#page2",
            scroller: "body",
            start: "top center",
            end: "bottom center",
            scrub: 1
        }
    });
    gsap.to("#page3", {
        backgroundColor: "red",
        duration: 2,
        delay: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#page3",
            scroller: "body",
            start: "top center",
            end: "bottom center",
            scrub: 1
        }
    });
    
    gsap.to("#img-1", {
        x: "-30vw",
        y: "85vh",
        left: "40%",
        rotate: "360deg",
        duration: 2,
        ease: "power.out",
        scrollTrigger: {
            trigger: "#page2",
            scroller: "body",
            start: "top 90%",
            end: "bottom bottom",
            scrub: 3,
        }
    });
    
    gsap.to("#img-2",{
        left:"10%",
        duration: 2,
        ease:"power.out",
        scrollTrigger:{
            trigger:"#page2",
            scroller:"body",
            start:"top 50%",
            end:"bottom bottom",
            scrub: 2,
        }
    });
    gsap.to("#img-3",{
        left:"22%",
        duration: 2,
        ease:"power.out",
        scrollTrigger:{
            trigger:"#page2",
            scroller:"body",
            start:"top 50%",
            end:"bottom bottom",
            scrub: 2,
        }
    });
    gsap.to("#img-5",{
        right:"50%",
        duration: 2,
        ease:"power.out",
        scrollTrigger:{
            trigger:"#page2",
            scroller:"body",
            start:"top 50%",
            end:"bottom bottom",
            scrub: 2,
        }
    });
    
    gsap.to("#img-6",{
       left:"30%",
       duration: 2,
       ease:"power.out",
       scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        start:"top center",
        end:"bottom center",
        scrub: 2
       }
    });
    gsap.to("#img-8",{
        top:"70%",
        duration: 3,
        ease:"power.out",
        scrub: 2,
        scrollTrigger:{
            trigger:"#page3",
            scroller:"body",
            start:"top center",
            end:"bottom center",
            scrub: 2
           }
    });
    gsap.to("#img-7",{
        right:"30%",
        duration: 3,
        ease:"power.out",
        scrub: 2,
        scrollTrigger:{
            trigger:"#page3",
            scroller:"body",
            start:"top center",
            end:"bottom center",
            scrub: 2
           }
    });
    gsap.to("#heading3",{
       left:"80%",
       duration: 3,
       ease:"power.out",
       scrollTrigger:{
          trigger:"#page3",
          scroller: "body",
          start:"top center",
          end: "bottom center",
          scrub: 2 
       }
    });
    
    const heading2 = document.querySelectorAll("#heading2");
    const heading1 = document.querySelectorAll("#heading1 span"); 
    
    gsap.from(heading2,{
        y: "-20%",
        opacity: 0,
        duration: 2,
        delay: 1,
        stagger: 1,
        ease: "power2.out",
        scrollTrigger:{
            trigger:"#page2",
            scroller:"body",
            start:"top center",
            end:"bottom center",
            scrub: 2
        }
    });
    
    const tl = gsap.timeline();
    
    tl.from("#page1",{
        top:"-100%",
        opacity: 0,
        duration: 2,
        ease: "power.out",
        scrub: 2,
    });
    
    tl.from("#navbar a",{
        y:"-20%",
        opacity: 0,
        duration: 1.5,
        scrub: 2,
        ease:"bounce.out"
    });
    tl.from(heading1,{
        opacity: 0,
        duration: 2,
        stagger: 1, 
        ease:"power2.out"
    });
    
});

mm.add("(max-width: 799px)", () => {   // Mobile GSAP Code
    const lenis = new Lenis({    // Lenis Code
        autoRaf: true,
    });
    
    lenis.on('scroll', (e) => {
        console.log(e);
    });
       
    gsap.to("#page2", {
        backgroundColor: "#F72C5B",
        duration: 2,
        delay: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#page2",
            scroller: "body",
            start: "top center",
            end: "bottom center",
            scrub: 1
        }
    });
    gsap.to("#page3", {
        backgroundColor: "red",
        duration: 2,
        delay: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#page3",
            scroller: "body",
            start: "top center",
            end: "bottom center",
            scrub: 1
        }
    });
    
    gsap.to("#img-1", {
        x: "-30vw",
        y: "65vh",
        left: "25%",
        rotate: "360deg",
        duration: 2,
        ease: "power.out",
        scrollTrigger: {
            trigger: "#page2",
            scroller: "body",
            start: "top 90%",
            end: "bottom bottom",
            scrub: 3,
        }
    });
    
    gsap.to("#img-2",{
        left:"5%",
        duration: 2,
        ease:"power.out",
        scrollTrigger:{
            trigger:"#page2",
            scroller:"body",
            start:"top 50%",
            end:"bottom bottom",
            scrub: 2,
        }
    });
    gsap.to("#img-3",{
        left:"25%",
        duration: 2,
        ease:"power.out",
        scrollTrigger:{
            trigger:"#page2",
            scroller:"body",
            start:"top 50%",
            end:"bottom bottom",
            scrub: 2,
        }
    });
    gsap.to("#img-5",{
        right:"28%",
        duration: 2,
        ease:"power.out",
        scrollTrigger:{
            trigger:"#page2",
            scroller:"body",
            start:"top 50%",
            end:"bottom bottom",
            scrub: 2,
        }
    });
    
    gsap.to("#img-6",{
       left:"20%",
       duration: 2,
       ease:"power.out",
       scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        start:"top center",
        end:"bottom center",
        scrub: 2
       }
    });
    gsap.to("#img-8",{
        top:"65%",
        duration: 3,
        ease:"power.out",
        scrub: 2,
        scrollTrigger:{
            trigger:"#page3",
            scroller:"body",
            start:"top center",
            end:"bottom center",
            scrub: 2
           }
    });
    gsap.to("#img-7",{
        right:"15%",
        duration: 3,
        ease:"power.out",
        scrub: 2,
        scrollTrigger:{
            trigger:"#page3",
            scroller:"body",
            start:"top center",
            end:"bottom center",
            scrub: 2
           }
    });
    gsap.to("#heading3",{
       left:"100%",
       duration: 3,
       ease:"power.out",
       scrollTrigger:{
          trigger:"#page3",
          scroller: "body",
          start:"top center",
          end: "bottom center",
          scrub: 2 
       }
    });
    
    const heading2 = document.querySelectorAll("#heading2");
    const heading1 = document.querySelectorAll("#heading1 span"); 
    
    gsap.from(heading2,{
        y: "-20%",
        opacity: 0,
        duration: 2,
        delay: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger:{
            trigger:"#page2",
            scroller:"body",
            start:"top center",
            end:"bottom center",
            scrub: 2
        }
    });
    
    const tl = gsap.timeline();
    
    tl.from("#page1",{
        top:"-100%",
        opacity: 0,
        duration: 2,
        ease: "power.out",
        scrub: 2,
    });
    
    tl.from("#navbar a",{
        y:"-20%",
        opacity: 0,
        duration: 1.5,
        scrub: 2,
        ease:"bounce.out"
    });
    tl.from(heading1,{
        opacity: 0,
        duration: 2,
        stagger: 1, 
        ease:"power2.out"
    });
    
});

