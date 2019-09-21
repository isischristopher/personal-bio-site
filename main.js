console.log("I Love You");

const projects = [
{
    title: "Personal Biography", 
    screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "This site is focused on expreessing the true essence of who Isis is and some of the experiences she has experienced.", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
},
{
    title: "Photography Portfolio", 
    screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "This site showcases the talented vision of the photographer Isis Christopher. This site allows clients and art lovers to enjoy some of Isis's previous work. It also allows clients to book appointments or contact Isis online.", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
},
{
    title: "Personal Biography", 
    screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "This site is focused on expreessing the true essence of who Isis is and some of the experiences she has experienced.", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: false,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
},
{
    title: "Personal Biography", 
    screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "This site is focused on expreessing the true essence of who Isis is and some of the experiences she has experienced.", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
},
{
    title: "Personal Biography", 
    screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "This site is focused on expreessing the true essence of who Isis is and some of the experiences she has experienced.", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: false,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
},
{
    title: "Personal Biography", 
    screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "This site is focused on expreessing the true essence of who Isis is and some of the experiences she has experienced.", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
},
]

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint;
}

const createProjectCards = (projectsArray) => {
    let domString= '';
    for (let i= 0; i < projectsArray.length; i++){
        if (projectsArray[i].available === true){
            const projectCard= projectsArray[i];
            domString += `
                <div class="card">
                <h2>${projectCard.title}</h2>
                    <img src="{projectCard.screenshot}" alt="Screenshot of ${projectCard.title}"/>
                    <p>${projectCard.description}</p>
                    <p>${projectCard.technologiesUsed}</p>
                    <a href="${projectCard.url}">Project Link</a>
                    <a href="${projectCard.githubUrl}">GitHub Link</a>
                    </div> 
                `;
        }
    }
    printToDom(domString, 'projectsZone');
}


 // CLICK FUNCTION FOR NAVBAR//

 const filterNavLinks= document.getElementById('navLinks').getElementsByTagName('a');
    for (i=0; i < 4; i++){
        
    }

// INIT
const init = () => {
    createProjectCards(projects);
}
init();


