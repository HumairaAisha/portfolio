const menuToggle = document.getElementById('menuToggle')
const navbarList = document.getElementById('navbarList');

// Toggle menu function
        function toggleMenu() {
            navbarList.classList.toggle('active');
            
            // Change icon based on menu state
            const icon = menuToggle.querySelector('i');
            if (navbarList.classList.contains('active')) {
                icon.className = 'fa-solid fa-times';
            } else {
                icon.className = 'fa-solid fa-bars';
            }
        }

        // Add click event listener
        menuToggle.addEventListener('click', toggleMenu);

        // Close menu when clicking on a link (for mobile)
        const navLinks = navbarList.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 768) {
                    navbarList.classList.remove('active');
                    const icon = menuToggle.querySelector('i');
                    icon.className = 'fa-solid fa-bars';
                }
            });
        });

        // Close menu when clicking outside (optional enhancement)
        document.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && !navbarList.contains(e.target)) {
                navbarList.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.className = 'fa-solid fa-bars';
            }
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) {
                navbarList.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.className = 'fa-solid fa-bars';
            }
        });