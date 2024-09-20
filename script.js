// Data for portfolio projects
const projects = [
    {
        title: "Project 1",
        description: "Description of project 1.",
        link: "#"
    },
    {
        title: "Project 2",
        description: "Description of project 2.",
        link: "#"
    },
    {
        title: "Project 3",
        description: "Description of project 3.",
        link: "#"
    }
];

// Load projects into the portfolio
window.onload = function() {
    const projectsContainer = document.getElementById('projects');

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        projectsContainer.appendChild(projectDiv);
    });
};

// Form validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Message Sent Successfully!');
        // You can send the form data to an API or server here
    } else {
        alert('Please fill in all fields.');
    }
});
