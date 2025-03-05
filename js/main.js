// JavaScript for Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    menuToggle.addEventListener('click', function() {
        // Toggle active class on menu icon
        this.classList.toggle('active');
        
        // Toggle active class on navbar collapse
        navbarCollapse.classList.toggle('active');
    });

    // Close menu when a menu item is clicked
    const menuItems = document.querySelectorAll('.navbar-nav > li > a');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navbarCollapse.classList.remove('active');
        });
    });

    // Close menu if clicked outside
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = navbarCollapse.contains(event.target) || 
                                  menuToggle.contains(event.target);
        
        if (!isClickInsideMenu && navbarCollapse.classList.contains('active')) {
            menuToggle.classList.remove('active');
            navbarCollapse.classList.remove('active');
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Get the current page filename
    const currentPage = window.location.pathname.split('/').pop();
    
    // Select all menu items
    const menuItems = document.querySelectorAll('.navbar-nav > li');
    
    // Remove active class from all menu items
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
    
    // Add active class to the matching menu item
    menuItems.forEach(item => {
        const link = item.querySelector('a');
        if (link) {
            // Check if the link's href matches the current page
            if (link.getAttribute('href') === currentPage) {
                item.classList.add('active');
            }
        }
    });
});


// Existing scroll functionality
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



document.addEventListener('DOMContentLoaded', () => {
    // Get all slides and their descriptions
    const slides = document.querySelectorAll('.hero-slide');
    const descriptions = Array.from(slides).map(slide => slide.dataset.description);
    
    const typingText = document.getElementById('typing-text');
    let currentSlideIndex = 0;
    let typingInterval = null;
    let deletingInterval = null;
    
    // Function to type text character by character
    function typeText(text, index = 0) {
        if (index === 0) {
            typingText.textContent = '';
        }
        
        if (index < text.length) {
            typingText.textContent += text.charAt(index);
            index++;
            typingInterval = setTimeout(() => typeText(text, index), 100); // Adjust speed as needed
        } else {
            // When typing is complete, wait a bit before deleting
            setTimeout(deleteText, 2000);
        }
    }
    
    // Function to delete text character by character
    function deleteText() {
        const currentText = typingText.textContent;
        
        if (currentText.length > 0) {
            typingText.textContent = currentText.slice(0, -1);
            deletingInterval = setTimeout(deleteText, 50); // Adjust speed as needed
        } else {
            // Move to next slide/description when deleted
            changeSlide();
        }
    }
    
    // Function to change the active slide
    function changeSlide() {
        // Hide current slide
        slides[currentSlideIndex].classList.remove('active');
        
        // Move to next slide
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        
        // Show new slide
        slides[currentSlideIndex].classList.add('active');
        
        // Type the corresponding description
        typeText(descriptions[currentSlideIndex]);
    }
    
    // Start the typing and slide changing sequence
    function startSequence() {
        // Make sure the first slide is active
        slides[0].classList.add('active');
        
        // Start typing the first description
        typeText(descriptions[0]);
    }
    
    // Initialize the sequence
    startSequence();
    
    // Function to handle manual slide changes (if needed)
    function resetIntervals() {
        if (typingInterval) clearTimeout(typingInterval);
        if (deletingInterval) clearTimeout(deletingInterval);
    }
    
    // Optional: Add event listeners for manual slide changes
    document.querySelector('.scroll-down').addEventListener('click', (e) => {
        // Scroll action here if needed
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the biography page
    if (window.location.pathname.includes('biography')) {
        showPasswordModal();
    }
    
    // Password Modal Functions
    function showPasswordModal() {
        const modal = document.getElementById('passwordModal');
        const closeBtn = document.getElementsByClassName('close-modal')[0];
        const form = document.getElementById('passwordForm');
        const errorMessage = document.getElementById('errorMessage');
        
        // Show the modal
        modal.style.display = 'block';
        
        // Hide all content except the header, password modal, and footer
        const contentElements = document.querySelectorAll('.bread-crumb, .section-padding, .parallax-section');
        contentElements.forEach(element => {
            element.style.display = 'none';
        });
        
        // Close modal when clicking the X (and redirect to home)
        closeBtn.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
        
        // When user submits the password
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const passwordInput = document.getElementById('password').value;
            
            if (passwordInput === 'आमादब्लम es amor') {
                // Correct password
                modal.style.display = 'none';
                
                // Show the content
                contentElements.forEach(element => {
                    element.style.display = 'block';
                });
            } else {
                // Wrong password
                errorMessage.style.display = 'block';
                document.getElementById('password').value = '';
            }
        });
        
        // Prevent users from closing the modal by clicking outside
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                return false;
            }
        });
        
        // Prevent back button from bypassing the password
        window.history.pushState(null, '', window.location.href);
        window.addEventListener('popstate', function() {
            window.history.pushState(null, '', window.location.href);
        });
    }
});


$(document).ready(function() {
    // Preloader
    setTimeout(function() {
        $('.preloader').fadeOut('slow');
    }, 1000);

    // Custom cursor
    $(document).mousemove(function(e) {
        $('.custom-cursor').css({
            left: e.clientX,
            top: e.clientY
        });
    });

    $('a, button, .navbar-toggle').on('mouseenter', function() {
        $('.custom-cursor').addClass('active');
    }).on('mouseleave', function() {
        $('.custom-cursor').removeClass('active');
    });

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

    // Mobile menu toggle
    $('.navbar-toggle').click(function() {
        $('.navbar-collapse').toggleClass('in');
    });

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

    $('.scroll-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    // Animate skill bars on scroll
    function animateSkillBars() {
        $('.progress-bar').each(function() {
            var width = $(this).data('width');
            $(this).css('width', width);
        });
    }

    // Check if element is in viewport
    function isInViewport(element) {
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
    }

    // Animate elements when they come into view
    function animateOnScroll() {
        $('.animate-fadeIn, .animate-slideInUp, .animate-slideInLeft, .animate-slideInRight').each(function() {
            if (isInViewport(this) && !$(this).hasClass('animated')) {
                $(this).addClass('animated');
            }
        });

        if (isInViewport('.progress-bar')) {
            animateSkillBars();
        }
    }

    // Initial check on page load
    animateOnScroll();

    // Check on scroll
    $(window).scroll(function() {
        animateOnScroll();
    });

    // Newsletter form handling with validation
    $('#newsletter-form').on('submit', function(e) {
        e.preventDefault();
        
        // Get the email value
        var email = $('#subscribe_email').val();
        
        // Email validation
        if (!email || !isValidEmail(email)) {
            $('#newsletter-error').show();
            $('#newsletter-success').hide();
            return;
        }
        
        // Here you would normally send the data to a server
        // For now, just show a success message
        $('#newsletter-success').show();
        $('#newsletter-error').hide();
        
        // Clear the form
        $('#subscribe_email').val('');
        
        // Hide the success message after 5 seconds
        setTimeout(function() {
            $('#newsletter-success').fadeOut('slow');
        }, 5000);
    });
    
    // Email validation function
    function isValidEmail(email) {
        var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return pattern.test(email);
    }

    // Contact form handling
    $('form[action="#"]').on('submit', function(e) {
        e.preventDefault();
        
        // Show thank you message
        var thankYouMessage = $('<div class="alert alert-success" style="margin-top: 20px;">Thank you for your message! I will get back to you soon.</div>');
        $(this).append(thankYouMessage);
        
        // Clear the form
        $(this).find('input[type="text"], input[type="email"], textarea').val('');
        
        // Hide the message after 5 seconds
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

    function nextSlide() {
        slides.eq(currentSlide).removeClass('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides.eq(currentSlide).addClass('active');
    }

    // Typing effect for hero text with expanded phrases
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
            
            setTimeout(typeText, typingSpeed);
        }
        
        typeText();
    }

    // Parallax effect
    $(window).scroll(function() {
        var scrollPosition = $(window).scrollTop();
        $('.parallax-section').css('background-position', 'center ' + (scrollPosition * 0.4) + 'px');
    });

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

    // Password protection for biography page
    if (window.location.pathname.includes('biography.html')) {
        // Check if the user has already entered the correct password
        if (!sessionStorage.getItem('biographyAccess')) {
            // Show password modal
            $('#passwordModal').show();
            
            // Handle password form submission
            $('#passwordForm').on('submit', function(e) {
                e.preventDefault();
                var password = $('#password').val();
                
                if (password === 'amadablam') {
                    // Correct password
                    sessionStorage.setItem('biographyAccess', 'true');
                    $('#passwordModal').fadeOut();
                    $('#errorMessage').hide();
                } else {
                    // Incorrect password
                    $('#errorMessage').show();
                }
            });
            
            // Close modal when clicking the close button
            $('.close-modal').click(function() {
                window.location.href = 'index.html';
            });
        }
    }
});