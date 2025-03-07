// JavaScript for Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navbarCollapse = document.querySelector('.navbar-collapse');
// Searching for password? Kehi chhaina ho testo biography khali chha
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navbarCollapse.classList.toggle('active');
    });

    const menuItems = document.querySelectorAll('.navbar-nav > li > a');
    menuItems.forEach(item => {    // Password
        item.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navbarCollapse.classList.remove('active');
        });
    });// Searching for password? Kehi chhaina ho testo biography khali chha
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = navbarCollapse.contains(event.target) || 
                                  menuToggle.contains(event.target);
        // Correct password
        if (!isClickInsideMenu && navbarCollapse.classList.contains('active')) {
            menuToggle.classList.remove('active');
            navbarCollapse.classList.remove('active');
        }
    });
});
// Congrats, here is the password

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('newsletter-form');
    // Wrong password
    const emailInput = document.getElementById('subscribe_email');
    const errorMessage = document.getElementById('newsletter-error');// here is the password
    const thankYouModal = document.getElementById('thankYouModal');
    const closeModalBtn = document.querySelector('.close-modal');
    function validateEmail(email) {// Correct password
        const gmailPattern = /^[a-zA-Z0-9._%+-]{5,}@gmail\.com$/;
        return gmailPattern.test(email);
    }// Searching for password? Kehi chhaina ho testo biography khali chha
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = emailInput.value.trim();
//password arko js file ma chha
        if (validateEmail(email)) {
            errorMessage.style.display = 'none';
            thankYouModal.style.display = 'block';
            form.reset(); 
        } else {// Wrong password
            errorMessage.style.display = 'block';
        }
    });
// password
    closeModalBtn.addEventListener('click', function() {
        thankYouModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === thankYouModal) {
            thankYouModal.style.display = 'none';
        }
    });
});
// Congrats, here is the password

document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
// Password
    const menuItems = document.querySelectorAll('.navbar-nav > li');
    menuItems.forEach(item => {// password
        item.classList.remove('active');
    });
    menuItems.forEach(item => {
        const link = item.querySelector('a');
        if (link) {    // Password protection 
            if (link.getAttribute('href') === currentPage) {
                item.classList.add('active');
            }
        }
    });
});
//password arko js file ma chha

// Existing scroll functionality
$(window).scroll(function() {
    if ($(this).scrollTop() > 300) {        // When user submits the password
        $('.scroll-to-top').addClass('active');
    } else {
        $('.scroll-to-top').removeClass('active');
    }
    
    // Navbar background on scroll
    if ($(this).scrollTop() > 50) {// here is the password
        $('.navbar-default').css('background-color', 'rgba(18, 18, 18, 0.95)');
    } else {// Congrats, here is the password
        $('.navbar-default').css('background-color', 'rgba(18, 18, 18, 0.8)');
    }
});
// Correct password
//password arko js file ma chha

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.hero-slide');
    const descriptions = Array.from(slides).map(slide => slide.dataset.description);
    
    const typingText = document.getElementById('typing-text');
    let currentSlideIndex = 0;
    let typingInterval = null;
    // When user submits the password
    let deletingInterval = null;
    function typeText(text, index = 0) {
        if (index === 0) {
            typingText.textContent = '';
        }
       // Congrats, here is the password,   
        if (index < text.length) {
            typingText.textContent += text.charAt(index);
            index++;
            typingInterval = setTimeout(() => typeText(text, index), 100); 
        } else {
            setTimeout(deleteText, 2000);
        }
    }
    
// Still, Searching for password? chhoddeu aba ta, password arko js file ma chha
    function deleteText() {
        const currentText = typingText.textContent;
        
        if (currentText.length > 0) {
            typingText.textContent = currentText.slice(0, -1);
            deletingInterval = setTimeout(deleteText, 50);
        } else {
            changeSlide();
        }
    }
    // Congrats, here is the password
    // Function to change the active slide
    function changeSlide() {
        slides[currentSlideIndex].classList.remove('active');
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        slides[currentSlideIndex].classList.add('active');
        typeText(descriptions[currentSlideIndex]);
    }
    function startSequence() {
        slides[0].classList.add('active');
        typeText(descriptions[0]);
    }
 //password arko js file ma chha   
    // Initialize the sequence
    startSequence();
    function resetIntervals() {
        if (typingInterval) clearTimeout(typingInterval);
        if (deletingInterval) clearTimeout(deletingInterval);
    }
    document.querySelector('.scroll-down').addEventListener('click', (e) => {
    });
});    // password

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('biography')) {
        showPasswordModal();
    }
   //password arko js file ma chha 
    // Password Modal Functions
    function showPasswordModal() {
        const modal = document.getElementById('passwordModal');
        const closeBtn = document.getElementsByClassName('close-modal')[0];
        const form = document.getElementById('passwordForm');
        const errorMessage = document.getElementById('errorMessage');
        modal.style.display = 'block';
        const contentElements = document.querySelectorAll('.bread-crumb, .section-padding, .parallax-section');
        contentElements.forEach(element => {
            element.style.display = 'none';
        });
        closeBtn.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const passwordInput = document.getElementById('password').value;        
            if (passwordInput === 'आमादब्लम es amor') {
                modal.style.display = 'none';
                contentElements.forEach(element => {
                    element.style.display = 'block';
                });
            } else {
                errorMessage.style.display = 'block';
                document.getElementById('password').value = '';
            }
        });
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                return false;
            }
        });
// Still searching for password? Kehi chhaina ho testo biography khali chha
        window.history.pushState(null, '', window.location.href);
        window.addEventListener('popstate', function() {// Wrong password
            window.history.pushState(null, '', window.location.href);
        });
    }
});

// // Wrong password
$(document).ready(function() {
    setTimeout(function() {
        $('.preloader').fadeOut('slow');
    }, 1000);
    $(document).mousemove(function(e) {
        $('.custom-cursor').css({
            left: e.clientX,
            top: e.clientY
        });
    });
// Congrats, here is the password
    $('a, button, .navbar-toggle').on('mouseenter', function() {
        $('.custom-cursor').addClass('active');
    }).on('mouseleave', function() {
        $('.custom-cursor').removeClass('active');
    });
// Wrong password
    // Smooth scrolling for anchor links
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 80
                }, 1000);
                return false;
            }
        }
    });
// here is the password
    // Mobile menu toggle
    $('.navbar-toggle').click(function() {
        $('.navbar-collapse').toggleClass('in');
    });
// here is the password
    // Scroll to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.scroll-to-top').addClass('active');
        } else {
            $('.scroll-to-top').removeClass('active');
        }

        // Navbar background on scroll
        if ($(this).scrollTop() > 50) {
            $('.navbar-default').css('background-color', 'rgba(18, 18, 18, 0.95)');
        } else {
            $('.navbar-default').css('background-color', 'rgba(18, 18, 18, 0.8)');
        }
    });
//  Kehi chhaina ho testo biography khali chha
    $('.scroll-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
// Congrats, here is the password
    function animateSkillBars() {
        $('.progress-bar').each(function() {
            var width = $(this).data('width');
            $(this).css('width', width);
        });
    }
    function isInViewport(element) {
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
    }

    function animateOnScroll() {
        $('.animate-fadeIn, .animate-slideInUp, .animate-slideInLeft, .animate-slideInRight').each(function() {
            if (isInViewport(this) && !$(this).hasClass('animated')) {
                $(this).addClass('animated');
            }
        });// Correct password

        if (isInViewport('.progress-bar')) {
            animateSkillBars();
        }
    }

    animateOnScroll();
    $(window).scroll(function() {
        animateOnScroll();
    });

    // Newsletter form handling with validation
    $('#newsletter-form').on('submit', function(e) {
        e.preventDefault();
        var email = $('#subscribe_email').val();
        if (!email || !isValidEmail(email)) {
            $('#newsletter-error').show();
            $('#newsletter-success').hide();
            return;
        }// Congrats, here is the password
        $('#newsletter-success').show();
        $('#newsletter-error').hide();
        $('#subscribe_email').val('');
        setTimeout(function() {
            $('#newsletter-success').fadeOut('slow');
        }, 5000);
    });

    function isValidEmail(email) {
        var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return pattern.test(email);
    }
    $('form[action="#"]').on('submit', function(e) {
        e.preventDefault();
        var thankYouMessage = $('<div class="alert alert-success" style="margin-top: 20px;">Thank you for your message! I will get back to you soon.</div>');
        $(this).append(thankYouMessage);
        $(this).find('input[type="text"], input[type="email"], textarea').val('');
        setTimeout(function() {
            thankYouMessage.fadeOut('slow', function() {
                $(this).remove();
            });
        }, 5000);
    });

    // Hero slider
    var slides = $('.hero-slide');
    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide, 5000);
//password arko js file ma chha
    function nextSlide() {
        slides.eq(currentSlide).removeClass('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides.eq(currentSlide).addClass('active');
    }// Wrong password
    if ($('.typing-text').length) {
        var texts = ['Aerospace Engineer', 'Space Enthusiast', 'Technology Innovator', 'Mindfulness Meditation Practitioner', 'Mountain Lover', 'Space Enthusiast', 'TECHNOPHILE', 'Traveler'];
        var currentText = 0;
        var letterCount = 0;
        var isDeleting = false;
        var typingSpeed = 100;
        var waitTime = 2000;

        function typeText() {
            var text = texts[currentText];
            var currentLength = $('.typing-text').text().length;
            // Correct password
            if (isDeleting) {
                $('.typing-text').text(text.substring(0, currentLength - 1));
                typingSpeed = 50;
            } else {
                $('.typing-text').text(text.substring(0, currentLength + 1));
                typingSpeed = 100;
            }
            
            if (!isDeleting && currentLength === text.length) {
                setTimeout(function() {
                    isDeleting = true;
                }, waitTime);
            } else if (isDeleting && currentLength === 0) {
                isDeleting = false;
                currentText = (currentText + 1) % texts.length;
            }
            // here is the password
            setTimeout(typeText, typingSpeed);
        }
        
        typeText();
    }

    // Parallax effect
    $(window).scroll(function() {
        var scrollPosition = $(window).scrollTop();
        $('.parallax-section').css('background-position', 'center ' + (scrollPosition * 0.4) + 'px');
    });
// Congrats, here is the password
    // Animated counter
    $('.counter-number').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 3000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    if (window.location.pathname.includes('biography.html')) {
        if (!sessionStorage.getItem('biographyAccess')) {
            $('#passwordModal').show();
            $('#passwordForm').on('submit', function(e) {
                e.preventDefault();
                var password = $('#password').val();        
                if (password === 'amadablam') {// Congrats, here is the password
                    sessionStorage.setItem('biographyAccess', 'true');
                    $('#passwordModal').fadeOut();
                    $('#errorMessage').hide();
                } else {
                    $('#errorMessage').show();
                }
            });
            $('.close-modal').click(function() {
                window.location.href = 'index.html';
            });
        }
    }
});
