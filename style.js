


document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


window.addEventListener('scroll', () => {
  let fromTop = window.scrollY;
  document.querySelectorAll('nav a').forEach(link => {
      let section = document.querySelector(link.getAttribute('href'));
      if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
          link.classList.add('active');
      } else {
          link.classList.remove('active');
      }
  });
});


const typingElement = document.querySelector('.typing-effect');
const typingText = typingElement.textContent;
typingElement.textContent = '';
let index = 0;

function type() {
  if (index < typingText.length) {
      typingElement.textContent += typingText.charAt(index);
      index++;
      setTimeout(type, 100);
  }
}
type();


const scrollElements = document.querySelectorAll('.scroll-animation');
const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return (elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend);
};

const displayScrollElement = (element) => {
  element.classList.add('scrolled');
};

const hideScrollElement = (element) => {
  element.classList.remove('scrolled');
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
          displayScrollElement(el);
      } else {
          hideScrollElement(el);
      }
  });
}

window.addEventListener('scroll', () => {
  handleScrollAnimation();
});


const galleryImages = document.querySelectorAll('.gallery img');
galleryImages.forEach(image => {
  image.addEventListener('click', () => {
      const lightbox = document.createElement('div');
      lightbox.classList.add('lightbox');
      document.body.appendChild(lightbox);
      const img = document.createElement('img');
      img.src = image.src;
      lightbox.appendChild(img);
      lightbox.addEventListener('click', () => {
          lightbox.remove();
      });
  });
});

const backToTopBtn = document.getElementById('backToTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
      backToTopBtn.style.display = 'block';
  } else {
      backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


const form = document.querySelector('.container5 form');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Form submitted successfully!');
    form.reset();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}