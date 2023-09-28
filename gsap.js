var tl = gsap.timeline();

tl.from(".circle", {
  scale: 0,
  // y: 110,
  // delay: 0.5,
  duration: 0.3,
  stagger: 0.1,
  repeat: 5,
  yoyo: true,
});

tl.to(".load", {
  top: "-100vh",
  duration: 1,
  delay: 0.5,
});

// 00000000000000000000000

tl.from(".navbar .left,.navbar .right,.navbar .menu", {
  y: -100,
  duration: 0.5,
  stagger: 0.3,
});

tl.from(".profile .img img", {
  scale: 0,
  display: "none",
  duration: 0.5,
  stagger: 0.3,
});

tl.from(".profile .div2 h1,.profile .resume,.profile .socialLinks img", {
  scale: 0,
  stagger: 0.3,
  duration: 0.5,
});

// -----------about
gsap.from(".about .para", {
  scale: 0,
  x: -500,
  duration: 1,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".about .para",
    start: "top 90%",
    end: "top 70%",
    // markers: true,
    // scrub: true,
  },
});

gsap.from(".about .personalDetail", {
  scale: 0,
  x: 500,
  duration: 1,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".about .personalDetail",
    start: "top 90%",
    end: "top 70%",
    // markers: true,
    // scrub: true,
  },
});

// ---------- images rotation
const socialLink = document.querySelectorAll(".socialLinks a img");
socialLink.forEach((button) => {
  button.addEventListener("mouseover", () => {
    // Use GSAP to animate the button element
    gsap.from(button, {
      rotate: 360,
      duration: 0.5,
      ease: "power2.out",
    });
  });
});

socialLink.forEach((button) => {
  button.addEventListener("mouseout", () => {
    // Use GSAP to animate the button element
    gsap.to(button, {
      rotate: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  });
});

const skill = document.querySelectorAll(".skillFlex  img");
skill.forEach((button) => {
  button.addEventListener("mouseover", () => {
    // Use GSAP to animate the button element
    gsap.from(button, {
      rotate: 360,
      duration: 0.5,
      ease: "power2.out",
    });
  });
});

skill.forEach((button) => {
  button.addEventListener("mouseout", () => {
    // Use GSAP to animate the button element
    gsap.to(button, {
      rotate: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  });
});

//-------------skills

tl.from(".skills ", {
  scale: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".skills",
    start: "top 90%",
    end: "top 60%",
    // markers: true,
    scrub: true,
  },
});
tl.from(".skills .skillFlex img ", {
  duration: 1,
  repeat: -1,
  rotate: 10,
  boxShadow: "5px 1px 5px black",
  yoyo: true,
});

// ------------education
tl.from(".education .educationsteps div", {
  duration: 1,
  scale: 0,
  stagger: 0.7,
  scrollTrigger: {
    trigger: ".education .educationsteps div",
    start: "top 90%",
    end: "top 70%",
    // markers: true,
    scrub: true,
  },
});
// ------------projects

tl.from(".projects .project", {
  scale: 0,
  duration: 1,
  stagger: 0.5,

  scrollTrigger: {
    trigger: ".projects .project",
    start: "top 90%",
    end: "top 60%",
    // markers: true,
    // scrub: true,
  },
});

// --------------contact

gsap.from(".socialLinks img ", {
  duration: 0.7,
  repeat: -1,
  rotate: 10,
  boxShadow: "2px 1px 2px black",
  yoyo: true,
});
