// script.js
document.addEventListener("DOMContentLoaded", function() {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
        aboutSection.innerHTML = `
            <div class="container">
                <h1>About Me</h1>
                <p>👋 Hi, I’m <strong>Rifat Hossin</strong>, a passionate <strong>Web Designer, UI Design Expert & E-commerce Developer</strong> from <strong>Bangladesh</strong>. I specialize in creating modern, responsive, and user-friendly websites that help businesses grow online.</p>
                <p>As an <strong>Expert in All Web Scripts</strong>, I craft stunning websites & intuitive user interfaces that provide a seamless user experience. Whether you need a business website, an online store, or a custom UI/UX solution, I can help bring your ideas to life with precision and creativity.</p>
                <p>📩 <strong>Let’s work together!</strong> Feel free to contact me:</p>
                <p>📧 Email: <a href="mailto:riftakarim825@gmail.com">riftakarim825@gmail.com</a></p>
                <p>📞 Phone: <a href="tel:+8801634584474">01634584474</a></p>
            </div>
        `;
    }

    const projectSection = document.getElementById("projects");
    if (projectSection) {
        projectSection.innerHTML = `
            <div class="container">
                <h2>My Work</h2>
                <div class="project-grid">
                    <div class="project-card">
                        <img src="https://source.unsplash.com/300x200/?app" alt="Project 1">
                        <h3>Restaurant Booking App</h3>
                        <p>Developed a complete online restaurant reservation system.</p>
                        <a href="https://www.opentable.com/" target="_blank" class="btn">View Project</a>
                    </div>
                    <div class="project-card">
                        <img src="https://source.unsplash.com/300x200/?design" alt="Project 2">
                        <h3>Creative Portfolio</h3>
                        <p>Designed an interactive and visually appealing portfolio website.</p>
                        <a href="https://www.behance.net/" target="_blank" class="btn">View Project</a>
                    </div>
                    <div class="project-card">
                        <img src="https://source.unsplash.com/300x200/?shop" alt="Project 3">
                        <h3>Multi-Vendor E-commerce Platform</h3>
                        <p>Built a scalable and feature-rich multi-vendor e-commerce platform.</p>
                        <a href="https://www.bigcommerce.com/" target="_blank" class="btn">View Project</a>
                    </div>
                </div>
            </div>
        `;
    }
});
