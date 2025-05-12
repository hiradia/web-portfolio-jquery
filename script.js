document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const menuIcon = document.getElementById('menu-icon');
  const sidebar = document.getElementById('sidebar');
  const closeBtn = document.getElementById('close-btn');
  const navLinks = document.querySelectorAll('.sidebar a');
  
  // Toggle sidebar
  menuIcon.addEventListener('click', function(e) {
    e.stopPropagation();
    sidebar.classList.add('active');
  });
  
  // Close sidebar
  closeBtn.addEventListener('click', function() {
    sidebar.classList.remove('active');
  });
  
  // Close sidebar ketika klik sebuah link
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      sidebar.classList.remove('active');
    });
  });
  
  // Close sidebar ketika klik di luar sidebar
  document.addEventListener('click', function(e) {
    if (!sidebar.contains(e.target) && e.target !== menuIcon) {
      sidebar.classList.remove('active');
    }
  });
  
  // Efek scroll navbar
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Validasi input nomor telepon
  const phoneInput = document.getElementById('phone');
  if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
      this.value = this.value.replace(/[^0-9]/g, '');
    });
  }
  
  // Validasi form
  if (document.getElementById('contactForm')) {
    $('#contactForm').validate({
      rules: {
        name: 'required',
        email: {
          required: true,
          email: true
        },
        phone: {
          required: true,
          minlength: 10,
          digits: true
        },
        message: 'required'
      },
      messages: {
        name: 'Please enter your name',
        email: {
          required: 'Please enter your email',
          email: 'Please enter a valid email address'
        },
        phone: {
          required: 'Please enter your phone number',
          minlength: 'Phone number must be at least 10 digits',
          digits: 'Please enter numbers only'
        },
        message: 'Please enter your message'
      },
      errorElement: 'span',
      errorClass: 'error-message',
      highlight: function(element) {
        $(element).addClass('error-input');
      },
      unhighlight: function(element) {
        $(element).removeClass('error-input');
      },
      submitHandler: function(form, event) {
        event.preventDefault();
        
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Your message has been sent.',
          confirmButtonColor: '#740938',
          confirmButtonText: 'OK'
        });
        
        form.reset();
      }
    });
  }
  
  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Animasi scroll
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.section-header, .skills-grid, .hire-list, .testimonial-grid, .portfolio-grid, .contact-form');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        element.classList.add('animated');
      }
    });
  };
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); 
});