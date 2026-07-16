/* ==========================================================================
   JewelSoft & Shyam Software Digital Brochure Logic
   Author: Antigravity / Shyam Software Team
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================
       1. Brochure Tab Toggling & Hero Selectors
       ========================================== */
    const tabNavButtons = document.querySelectorAll('.brochure-tab-btn');
    const selectorCards = document.querySelectorAll('.selector-card');
    const brochurePages = document.querySelectorAll('.brochure-page');

    // Function to switch active brochure page
    const switchBrochure = (targetId) => {
        // Update header tab button states
        tabNavButtons.forEach(btn => {
            if (btn.getAttribute('data-target') === targetId) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update hero selector cards states
        selectorCards.forEach(card => {
            if (card.getAttribute('data-target') === targetId) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });

        // Update brochure page content visibility
        brochurePages.forEach(page => {
            if (page.id === targetId) {
                page.classList.add('active-brochure');
            } else {
                page.classList.remove('active-brochure');
            }
        });
    };

    // Click handler for header tab selectors
    tabNavButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            switchBrochure(targetId);

            // Scroll smoothly to brochure start
            const brochureSection = document.querySelector('.brochure-container-section');
            window.scrollTo({
                top: brochureSection.offsetTop - 90,
                behavior: 'smooth'
            });
        });
    });

    // Click handler for hero selector cards
    selectorCards.forEach(card => {
        card.addEventListener('click', () => {
            const targetId = card.getAttribute('data-target');
            switchBrochure(targetId);

            // Scroll smoothly to brochure start
            const brochureSection = document.querySelector('.brochure-container-section');
            window.scrollTo({
                top: brochureSection.offsetTop - 90,
                behavior: 'smooth'
            });
        });
    });

    /* ==========================================
       2. Mobile Navigation Menu Toggle
       ========================================== */
    const mobileNavToggle = document.getElementById('mobile-nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu .nav-link');

    const toggleMobileMenu = () => {
        mobileNavToggle.classList.toggle('open');
        navMenu.classList.toggle('open');
        document.body.classList.toggle('no-scroll');
    };

    mobileNavToggle.addEventListener('click', toggleMobileMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Close mobile menu
            if (navMenu.classList.contains('open')) {
                toggleMobileMenu();
            }

            // Check if link triggers a brochure tab switch
            if (link.classList.contains('tab-trigger-jewel')) {
                e.preventDefault();
                switchBrochure('brochure-jewelsoft');
                const pageElem = document.getElementById('brochure-jewelsoft');
                window.scrollTo({
                    top: pageElem.offsetTop - 90,
                    behavior: 'smooth'
                });
            } else if (link.classList.contains('tab-trigger-weight')) {
                e.preventDefault();
                switchBrochure('brochure-weightscale');
                const pageElem = document.getElementById('brochure-weightscale');
                window.scrollTo({
                    top: pageElem.offsetTop - 90,
                    behavior: 'smooth'
                });
            }
        });
    });

    /* ==========================================
       3. Circular Diagram Node Hovers
       ========================================== */
    const setupNodeHovers = (wheelId, infoBoxId, defaultText) => {
        const wheel = document.getElementById(wheelId);
        const infoDisplay = document.getElementById(infoBoxId);

        if (!wheel || !infoDisplay) return;

        const nodes = wheel.querySelectorAll('.diagram-node');

        nodes.forEach(node => {
            node.addEventListener('mouseenter', () => {
                const infoText = node.getAttribute('data-info');
                infoDisplay.textContent = infoText;
                infoDisplay.style.color = '#1e293b';
                infoDisplay.style.fontWeight = '600';
            });

            node.addEventListener('mouseleave', () => {
                infoDisplay.textContent = defaultText;
                infoDisplay.style.color = 'var(--text-secondary)';
                infoDisplay.style.fontWeight = '400';
            });
        });
    };

    setupNodeHovers('jewelsoft-wheel', 'jewelsoft-node-desc', 'Hover over a circular node to explore details...');
    setupNodeHovers('weightscale-wheel', 'weightscale-node-desc', 'Hover over a circular node to explore details...');

    /* ==========================================
       4. Sidebar Click Toggles
       ========================================== */
    const setupSidebarToggles = (buttonsClass, descBoxId) => {
        const buttons = document.querySelectorAll(buttonsClass);
        const descBox = document.getElementById(descBoxId);

        if (!descBox) return;

        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Clear active states
                buttons.forEach(b => b.classList.remove('active'));

                // Set active
                btn.classList.add('active');

                // Show description with fade
                descBox.style.opacity = 0;
                setTimeout(() => {
                    descBox.textContent = btn.getAttribute('data-desc');
                    descBox.style.opacity = 1;
                }, 150);
            });
        });
    };

    setupSidebarToggles('.sidebar-btn.orange-btn', 'jewelsoft-sidebar-desc');
    setupSidebarToggles('.sidebar-btn.purple-btn', 'weightscale-sidebar-desc');



    /* ==========================================
       6. Scale & Barcode printing simulator
       ========================================== */
    const scaleLcdWeight = document.getElementById('scale-lcd-weight');
    const btnScaleRead = document.getElementById('btn-scale-read');
    const btnScaleTare = document.getElementById('btn-scale-tare');
    const itemSelect = document.getElementById('scale-item-select');

    const btnPrintTag = document.getElementById('btn-print-tag');
    const labelContainer = document.getElementById('label-container');
    const barcodeSticker = document.getElementById('barcode-sticker');
    const stItem = document.getElementById('st-item');
    const stWeight = document.getElementById('st-weight');
    const stDate = document.getElementById('st-date');
    const stBarcodeNum = document.getElementById('st-barcode-num');

    let currentWeight = 0;
    let weightInterval = null;

    // Simulate scale balance reading gold/silver ornaments
    if (btnScaleRead && scaleLcdWeight) {
        btnScaleRead.addEventListener('click', () => {
            // Prevent multiple parallel simulations
            clearInterval(weightInterval);

            // Tare scale digits
            scaleLcdWeight.textContent = "0.000";
            btnPrintTag.disabled = true;
            barcodeSticker.classList.remove('spit-tag');

            const selectedItem = itemSelect.value;
            let targetWeight = 0;

            // Generate realistic weights based on category
            if (selectedItem.includes("Ring")) {
                targetWeight = 4.5 + Math.random() * 8.5; // Rings: 4.5g - 13g
            } else if (selectedItem.includes("Chain")) {
                targetWeight = 12.0 + Math.random() * 32.0; // Chains: 12g - 44g
            } else if (selectedItem.includes("Pendant")) {
                targetWeight = 2.5 + Math.random() * 6.5; // Pendants: 2.5g - 9g
            } else {
                targetWeight = 18.0 + Math.random() * 26.0; // Bangles: 18g - 44g
            }

            // Animate LCD reading count up
            let speed = 20; // ms per step
            let currentDisplay = 0.000;
            const steps = 30;
            const increment = targetWeight / steps;
            let counter = 0;

            weightInterval = setInterval(() => {
                counter++;
                currentDisplay += increment;
                scaleLcdWeight.textContent = currentDisplay.toFixed(3);

                if (counter >= steps) {
                    clearInterval(weightInterval);
                    scaleLcdWeight.textContent = targetWeight.toFixed(3);
                    currentWeight = targetWeight;
                    btnPrintTag.disabled = false; // Enable print button
                }
            }, speed);
        });

        // Scale Tare / Reset button
        btnScaleTare.addEventListener('click', () => {
            clearInterval(weightInterval);
            scaleLcdWeight.textContent = "0.000";
            currentWeight = 0;
            btnPrintTag.disabled = true;
            barcodeSticker.classList.remove('spit-tag');
        });

        // Trigger Tag Printing simulation
        btnPrintTag.addEventListener('click', () => {
            if (currentWeight <= 0) return;

            const selectedItem = itemSelect.value;
            const currentDate = new Date();
            const formattedDate = `${String(currentDate.getDate()).padStart(2, '0')}/${String(currentDate.getMonth() + 1).padStart(2, '0')}/${currentDate.getFullYear()}`;

            // Random serial numbers for barcodes
            const barcodeNumber = `JS${Math.floor(10000000 + Math.random() * 90000000)}`;

            // Populate sticker fields
            stItem.textContent = selectedItem;
            stWeight.textContent = `Wt: ${currentWeight.toFixed(3)} g`;
            stDate.textContent = formattedDate;
            stBarcodeNum.textContent = barcodeNumber;

            // Trigger visual thermal printing feed animation
            barcodeSticker.classList.remove('spit-tag');
            void barcodeSticker.offsetWidth; // Trigger reflow for animation restart
            barcodeSticker.classList.add('spit-tag');
        });
    }

    /* ==========================================
       7. Lead Contact Form & Modal Action
       ========================================== */
    const demoForm = document.getElementById('demo-request-form');
    const successModal = document.getElementById('success-modal');
    const modalUserName = document.getElementById('modal-user-name');
    const modalUserPhone = document.getElementById('modal-user-phone');
    const closeModalBtn = document.getElementById('btn-close-modal');
    let whatsappUrl = ''; // Persistent URL for redirecting client

    const phoneInputEl = document.getElementById('form-phone');
    if (phoneInputEl) {
        phoneInputEl.addEventListener('input', function () {
            // Strip out any non-numeric characters and limit to 10 digits
            this.value = this.value.replace(/[^0-9]/g, '').slice(0, 10);
        });
    }

    if (demoForm) {
        demoForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Retrieve form values
            const nameInput = document.getElementById('form-name').value;
            const phoneInput = document.getElementById('form-phone').value;
            const messageInput = document.getElementById('form-message').value;
            const interestInput = document.getElementById('form-product-interest').value;

            // Set loading state on submit button
            const submitBtn = document.getElementById('btn-submit-demo');
            const originalBtnText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = "Processing Lead Request...";

            // Create parameters payload
            const formData = new FormData();
            formData.append('name', nameInput);
            formData.append('phone', phoneInput);
            formData.append('interest', interestInput);
            formData.append('message', messageInput);

            // Fetch request to local PHP logger script
            fetch('submit_lead.php', {
                method: 'POST',
                body: formData
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network error logging lead details');
                    }
                    return response.json();
                })
                .then(data => {
                    // Restore button state
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalBtnText;

                    if (data.status === 'success') {
                        // Cache the generated WhatsApp redirect URL
                        whatsappUrl = data.whatsapp_url;

                        // Open success modal and reset form
                        modalUserName.textContent = nameInput;
                        modalUserPhone.textContent = phoneInput;
                        successModal.classList.add('active');
                        demoForm.reset();
                    } else {
                        alert('Error submitting details: ' + data.message);
                    }
                })
                .catch(error => {
                    console.warn('Backend CSV logging failed. Falling back to direct WhatsApp launch.', error);

                    // Fallback: generate WhatsApp link client-side directly
                    const fallbackMessage = `Hello Shyam Software,\n\nI want to request a demo.\nName: ${nameInput}\nPhone: ${phoneInput}\nInterest: ${interestInput}\nMessage: ${messageInput}`;
                    whatsappUrl = `https://api.whatsapp.com/send?phone=917016146191&text=${encodeURIComponent(fallbackMessage)}`;

                    // Restore button state and launch modal
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalBtnText;

                    modalUserName.textContent = nameInput;
                    modalUserPhone.textContent = phoneInput;
                    successModal.classList.add('active');
                    demoForm.reset();
                });
        });
    }

    // Dismiss modal handlers (Triggering WhatsApp redirect on dismissal)
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            successModal.classList.remove('active');
            if (whatsappUrl) {
                window.location.href = whatsappUrl;
            }
        });
    }

    if (successModal) {
        successModal.addEventListener('click', (e) => {
            if (e.target === successModal) {
                successModal.classList.remove('active');
                if (whatsappUrl) {
                    window.location.href = whatsappUrl;
                }
            }
        });
    }

    /* ==========================================
       7.5 Save PDF Print Triggers (Handled by brochure page redirect)
       ========================================== */

    /* ==========================================
       8. Smooth Scroll Alignment Helper
       ========================================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();

                const headerHeight = document.getElementById('main-header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 10;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

});
