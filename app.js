/* 
   AJAY KUMAR R - PREMIUM PORTFOLIO JAVASCRIPT
   Interactivity and animations
*/

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Mouse Glow Tracker
  const updateGlowPosition = (e) => {
    // Set custom CSS variables on documentElement
    document.documentElement.style.setProperty('--pointer-x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--pointer-y', `${e.clientY}px`);
  };
  
  window.addEventListener('mousemove', updateGlowPosition);
  
  // 2. Typewriter Effect
  const typewriterElement = document.getElementById('typewriter');
  if (typewriterElement) {
    const roles = ["Full-Stack Developer", "DevOps Engineer", "SRE"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    const typeEffect = () => {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        // Remove characters
        typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50; // Deleting is faster
      } else {
        // Add characters
        typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100; // Normal typing speed
      }
      
      // Word completion check
      if (!isDeleting && charIndex === currentRole.length) {
        typingSpeed = 2000; // Hold full word for 2s
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500; // Rest before next word
      }
      
      setTimeout(typeEffect, typingSpeed);
    };
    
    // Start typing effect after 800ms
    setTimeout(typeEffect, 800);
  }
  
  // 3. Scroll Header Effect & Active Nav Link Highlight
  const header = document.querySelector('.header');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  const handleScroll = () => {
    const scrollY = window.scrollY;
    
    // Header shadow/blur background on scroll
    if (scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    // Highlight active section link
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  };
  
  window.addEventListener('scroll', handleScroll);
  
  // 4. Mobile Navigation Toggle
  const navToggle = document.getElementById('navToggle');
  const mainHeader = document.getElementById('mainHeader');
  
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      mainHeader.classList.toggle('menu-open');
    });
  }
  
  // Close menu when clicking nav links
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mainHeader.classList.remove('menu-open');
    });
  });
  

  
});
