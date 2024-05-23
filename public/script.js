var navClicked = false;
window.addEventListener("hashchange", (e) => {
    var prevNav = document.querySelector('[href="#' + e.oldURL.split('#')[1] + '"]');
    var currNav = document.querySelector('[href="#' + e.newURL.split('#')[1] + '"]');
    if (prevNav) prevNav.className = "";
    if (currNav) currNav.className = "nav-active";
    navClicked = true;
    setTimeout(() => {
        navClicked = false;
    }, 1000);
});

//Setup intersection observers for when scrolling over a section on desktop
if (document.documentElement.clientWidth >= 1024) {
    (function () {
        // CSS class to add
        const activeClass = 'nav-active';

        // Function to handle intersection changes
        const handleIntersection = (entries, observer) => {
            let maxVisibleArea = 0;
            let mostVisibleSection = null;

            entries.forEach(entry => {
                const visibleArea = entry.intersectionRect.width * entry.intersectionRect.height;

                if (visibleArea > maxVisibleArea) {
                    maxVisibleArea = visibleArea;
                    mostVisibleSection = entry.target;
                }
            });

            if (!navClicked) {
                // Remove the active class from all sections
                document.querySelectorAll('main section').forEach(section => {
                    document.querySelector('[href="#' + section.getAttribute('id') + '"]').classList.remove(activeClass);
                });

                // Add the active class to the most visible sections nav item
                if (mostVisibleSection) {
                    document.querySelector('[href="#' + mostVisibleSection.getAttribute('id') + '"]').classList.add(activeClass);
                }
            }
        };

        // Options for the observer
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1.0
        };

        // Create the observer
        const observer = new IntersectionObserver(handleIntersection, options);

        // Select all the sections to observe
        const sections = document.querySelectorAll('main section');

        // Start observing each section
        sections.forEach(section => {
            observer.observe(section);
        });
    })();
}