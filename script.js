
// =====================================
// ACTIVE NAVIGATION HIGHLIGHT
// =====================================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

function updateActiveNavigation() {
    let currentSection = "home";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 160;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {
            currentSection = section.id;
        }
    });

    navLinks.forEach((link) => {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${currentSection}`
        );
    });
}

window.addEventListener("scroll", updateActiveNavigation);
window.addEventListener("load", updateActiveNavigation);

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        setTimeout(updateActiveNavigation, 100);
    });
});

function openImage(image) {
    const lightbox = document.getElementById("imageLightbox");
    const expandedImage = document.getElementById("lightboxImage");

    expandedImage.src = image.src;
    lightbox.classList.add("active");
}

function closeImage() {
    document.getElementById("imageLightbox").classList.remove("active");
}

// MULTIMEDIA IMAGE LIGHTBOX
const multimediaImages = document.querySelectorAll(
    ".multimedia-gallery img"
);

const multimediaLightbox = document.getElementById(
    "multimediaLightbox"
);

const multimediaLightboxImage = document.getElementById(
    "multimediaLightboxImage"
);

const multimediaClose = document.querySelector(
    ".multimedia-close"
);

multimediaImages.forEach(image => {
    image.addEventListener("click", () => {
        multimediaLightboxImage.src = image.src;
        multimediaLightboxImage.alt = image.alt;
        multimediaLightbox.classList.add("active");
    });
});

multimediaClose.addEventListener("click", () => {
    multimediaLightbox.classList.remove("active");
});

multimediaLightbox.addEventListener("click", event => {
    if (event.target === multimediaLightbox) {
        multimediaLightbox.classList.remove("active");
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        multimediaLightbox.classList.remove("active");
    }
});
