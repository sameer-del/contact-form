
gsap.fromTo(".left",{ 
  x:-1000,
  opacity:0,
},{
  opacity:1,
  x:0,
  duration:2,
  ease: "expo.out",
  
})

gsap.fromTo(".right",{ 
  y:-1000,
  opacity:0,
},{
  opacity:1,
  y:0,
  duration:2,
  
  ease: "expo.out",
})


