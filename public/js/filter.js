    let taxSwitch = document.getElementById("switchCheckDefault");
    taxSwitch.addEventListener("click", () => {
      let taxInfo = document.getElementsByClassName("tax-info");
      for (info of taxInfo) {
        if (info.style.display != "inline") {
          info.style.display = "inline";
        } else {
          info.style.display = "none";
        }
      }
    })

    // Side scroll functionality for filters
    const filters = document.getElementById('filters');
    const btnLeft = document.querySelector('.scroll-left');
    const btnRight = document.querySelector('.scroll-right');
    const scrollAmount = 200;

    function updateScrollButtons() {
      // Check if we're on mobile (screen width <= 768px)
      const isMobile = window.innerWidth <= 768;
      
      if (isMobile) {
        // Hide scroll buttons on mobile
        btnLeft.style.display = 'none';
        btnRight.style.display = 'none';
      } else {
        // Show/hide scroll buttons based on scroll position on desktop
        btnLeft.style.display = filters.scrollLeft > 0 ? 'flex' : 'none';
        btnRight.style.display = (filters.scrollLeft + filters.clientWidth < filters.scrollWidth - 1) ? 'flex' : 'none';
      }
    }

    btnLeft.addEventListener('click', () => {
      filters.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
    btnRight.addEventListener('click', () => {
      filters.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    filters.addEventListener('scroll', updateScrollButtons);
    window.addEventListener('resize', updateScrollButtons);
    // Initial check
    updateScrollButtons();