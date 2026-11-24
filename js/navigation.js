document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menuToggle");
    const navigation = document.getElementById("navigation");

    // Menu para telas menores
    if (menuToggle && navigation) {

        menuToggle.addEventListener("click", () => {

            const isOpen = navigation.classList.toggle("open");

            menuToggle.setAttribute("aria-expanded", isOpen);

        });

        // Fecha o menu após clicar em um link
        const links = navigation.querySelectorAll("a");

        links.forEach(link => {

            link.addEventListener("click", () => {
                navigation.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
            });

        });

    }

    // Identifica a seção atual no menu
    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    if ("IntersectionObserver" in window) {

        const sectionObserver = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    navLinks.forEach(link => {
                        link.classList.remove("active");

                        if (link.getAttribute("href") === "#" + entry.target.id) {
                            link.classList.add("active");
                        }
                    });

                }

            });

        }, {
            rootMargin: "-35% 0px -55% 0px"
        });

        sections.forEach(section => {
            sectionObserver.observe(section);
        });

    }

});