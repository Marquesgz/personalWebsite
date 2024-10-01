const projects = [
    {
        title: "Property Management",
        description: "Full-stack web application for managing properties. The backend is built using Node.js with Express.js for the REST API and MongoDB as the database, handling property data storage, creation, deletion, and updates.The frontend uses HTML, CSS, and JavaScript to present a user-friendly interface, allowing users to view, add, and filter properties by rooms. ",
        links: [
            { name: "GitHub Frontend", url: "https://github.com/Marquesgz/FS_propertyManagement-frontend" },
            { name: "Github Backend", url: "https://github.com/Marquesgz/FS_propertyManagement-backend" },
        ],
        image: "/assets/propertyManagement.png" 
    },
    {
        title: "Balance",
        description: "Emerged from a 24-hour hackathon. This multipage application was developed using HTML, CSS, and JavaScript, providing a simple and interactive interface.",
        links: [
            { name: "GitHub", url: "https://github.com/Marquesgz/balanceApp" },
            { name: "Live Demo", url: "https://balanceapp.netlify.app" }
        ],
        image: "/assets/BalanceApp.png"
    },
    {
        title: "Notes App",
        description: "Web-based application built using Angular with TypeScript, HTML, and CSS. It allows users to create, edit, and manage notes. The project leverages Angular's component-based architecture, with functionality for real-time updates and efficient note management.",
        links: [
            { name: "GitHub", url: "https://github.com/Marquesgz/NotesApp" },
        ],
        image: "/assets/NotesApp.png"
    },
    {
        title: "Sun Seekers",
        description: "A browser-based game built with HTML, CSS, and JavaScript. It features interactive gameplay, dynamic animations, and responsive design, showcasing skills in DOM manipulation and JavaScript game logic.",
        links: [
            { name: "GitHub", url: "https://github.com/Marquesgz/sunSeekersWebGame" },
            { name: "Play Now", url: "https://sunseekersgame.netlify.app" }
        ],
        image: "/assets/startMenu.png"
    },
    {
        title: "My Paint Tool",
        description: "A Java desktop painting application using Swing for its GUI. Users can draw on a grid, select colors, and save or load images with keyboard inputs. It utilizes BufferedImage for pixel manipulation and IO Streams for file handling.",
        links: [
            { name: "GitHub", url: "https://github.com/Marquesgz/myPaintTool" },
        ],
        image: "/assets/myPaintTool.png"
    },
    {
        title: "Neo Snake",
        description: "a browser-based version of the classic snake game, developed using HTML, CSS, and JavaScript. The game features customizable settings for canvas size, scale, and frame rate. Players use arrow keys for control, while barriers and special foods add to the challenge, demonstrating proficiency in front-end development, game logic, and interactive DOM manipulation.",
        links: [
            { name: "GitHub", url: "https://github.com/Marquesgz/neoSnakeGame" },
            { name: "Play Now", url: "https://neosnake.netlify.app" }
        ],
        image: "/assets/neoSnake.png"
    },
    {
        title: "Who Wants To Be A Programmer",
        description: "A web-based multiple-choice quiz developed using Angular, TypeScript, HTML, and CSS. Players answer 15 programming-related questions fetched from an external API. The game tracks scores and offers restart options, demonstrating skills in front-end development, API integration, and user interaction management with Angular.",
        links: [
            { name: "GitHub", url: "https://github.com/Marquesgz/quizGame" },
        ],
        image: "/assets/quizApp.png"
    },
    {
        title: "Shark Attack",
        description: "Developed in Java, utilizing Java Swing for the graphical user interface. It features real-time controls, collision detection, and game logic, demonstrating expertise in Java's event handling, graphics, and state management to create an immersive gaming experience.",
        links: [
            { name: "GitHub", url: "https://github.com/Marquesgz/sharkGame/tree/main" },
        ],
        image: "/assets/sharkGame.png"
    }
];

window.onload = function() {
    const projectsContainer = document.getElementById('projects');

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        projectDiv.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-links">
                ${project.links.map(link => `<a href="${link.url}" target="_blank">${link.name}</a>`).join(' | ')}
            </div>
        `;
        projectsContainer.appendChild(projectDiv);
    });
};


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        const templateParams = {
            from_name: name,
            reply_to: email,
            message: message,
        };

        emailjs.send('service_1jdnaya', 'template_rsxcylk', templateParams)
            .then(function(response) {
                alert('Message Sent Successfully!');
                document.getElementById('contact-form').reset(); 
            }, function(error) {
                alert('Failed to send message, please try again.');
                console.error('Error:', error);
            });
    } else {
        alert('Please fill in all fields.');
    }
});

