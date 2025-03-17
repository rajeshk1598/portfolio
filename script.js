document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll(".top-menu ul li a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            const sectionId = this.getAttribute("href").substring(1);
            const target = document.getElementById(sectionId);

            if (target) {
                event.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // ------------------------
    // Modal Logic for About Me
    // ------------------------
    const aboutModal = document.getElementById("aboutModal");
    const aboutLink = document.querySelector('a[href="#about"]');
    const closeBtn = document.querySelector(".close");

    if (aboutLink) {
        aboutLink.addEventListener("click", (e) => {
            e.preventDefault();
            aboutModal.style.display = "block";
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            aboutModal.style.display = "none";
        });
    }

    // ------------------------
    // Modal Logic for Skills
    // ------------------------
    const skillsModal = document.getElementById("skillsModal");
    const skillsLink = document.querySelector('a[href="#skills"]');
    const closeSkillsBtn = document.querySelector(".close-skills");

    if (skillsLink) {
        skillsLink.addEventListener("click", (e) => {
            e.preventDefault();
            skillsModal.style.display = "block";
        });
    }

    if (closeSkillsBtn) {
        closeSkillsBtn.addEventListener("click", () => {
            skillsModal.style.display = "none";
        });
    }

    // ------------------------
    // Modal Logic for Experience
    // ------------------------
    const experienceModal = document.getElementById("experienceModal");
    const experienceLink = document.querySelector('a[href="#experience"]');
    const closeExperienceBtn = document.querySelector(".close-experience");

    if (experienceLink) {
        experienceLink.addEventListener("click", (e) => {
            e.preventDefault();
            experienceModal.style.display = "block";
        });
    }

    if (closeExperienceBtn) {
        closeExperienceBtn.addEventListener("click", () => {
            experienceModal.style.display = "none";
        });
    }

    // ------------------------
    // Modal Logic for Resume
    // ------------------------
    // ------------------------
    const resumeModal = document.getElementById("resumeModal");
    const resumeLink = document.querySelector('a[href="#resume"]');
    const closeResumeBtn = document.querySelector(".close-resume");
    const resumeFrame = document.getElementById("resumeFrame");
    const resumeDownload = document.getElementById("resumeDownload");

    if (resumeLink) {
        resumeLink.addEventListener("click", (e) => {
            e.preventDefault();

            // Set correct resume file path dynamically
            const resumePath = "resume.pdf"; // Ensure the file exists in the same folder
            resumeFrame.src = resumePath;
            resumeDownload.href = resumePath;

            resumeModal.style.display = "block";
        });
    }

    if (closeResumeBtn) {
        closeResumeBtn.addEventListener("click", () => {
            resumeModal.style.display = "none";
        });
    }

    // Close modal if clicked outside
    window.addEventListener("click", (e) => {
        if (e.target === resumeModal) {
            resumeModal.style.display = "none";
        }
    });

        // ------------------------
    // Modal Logic for Projects
    // ------------------------
    const projectsModal = document.getElementById("projectsModal");
    const projectsLink = document.querySelector('a[href="#projects"]');
    const closeProjectsBtn = document.querySelector(".close-projects");

    if (projectsLink) {
        projectsLink.addEventListener("click", (e) => {
            e.preventDefault();
            projectsModal.style.display = "block";
        });
    }

    if (closeProjectsBtn) {
        closeProjectsBtn.addEventListener("click", () => {
            projectsModal.style.display = "none";
        });
    }

    // ------------------------
    // Modal Logic for Contact
    // ------------------------
    const contactModal = document.getElementById("contactModal");
    const contactLink = document.querySelector('a[href="#contact"]');
    const closeContactBtn = document.querySelector(".close-contact");

    if (contactLink) {
    contactLink.addEventListener("click", (e) => {
        e.preventDefault();
        contactModal.style.display = "block";
    });
    }

    if (closeContactBtn) {
    closeContactBtn.addEventListener("click", () => {
        contactModal.style.display = "none";
    });
    }

    // Close modal if clicked outside content
    window.addEventListener("click", (e) => {
    if (e.target === contactModal) {
        contactModal.style.display = "none";
    }
    });


    // ------------------------
    // Close modals if clicked outside the modal content
    // ------------------------
    window.addEventListener("click", (e) => {
        if (e.target === aboutModal) {
            aboutModal.style.display = "none";
        }
        if (e.target === skillsModal) {
            skillsModal.style.display = "none";
        }
        if (e.target === experienceModal) {
            experienceModal.style.display = "none";
        }
        if (e.target === resumeModal) {
            resumeModal.style.display = "none";
        }
        if (e.target === projectsModal){
            projectsModal.style.display = "none";
        }
    });
});
