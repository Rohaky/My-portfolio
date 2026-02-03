
//sections appearing smoothly one by one
const sections = document.querySelectorAll("section");

const revealOnScroll = () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight * 0.85;

    if (sectionTop < triggerPoint) {
      section.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);

// show first section immediately
revealOnScroll();

function sendMessage(e) {
  e.preventDefault();
  alert("Message Sent Successfully ✅");
  e.target.reset();
}
