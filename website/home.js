const body = document.querySelector('body');
//console.log(body);

const header = document.querySelector('h1'); //homepage header
// console.log(header);

const home_para = document.querySelector('p1');
// console.log(home_para);

const learn_more_button = document.querySelector('button[id="learn_more_button"]');
// const see_projects_button = document.querySelector('button[id="see_projects_button"]');


const path = window.location.href;
const myArray = path.split("/");
lastHtml = myArray[myArray.length-1];
pathBegin = path.split(lastHtml)[0];

const home_tab = document.querySelector("p[id='home_tab'");
home_tab.addEventListener('click', (event) => {
    location.href = pathBegin+"home.html";
});

const about_tab = document.querySelector("p[id='about_tab'");
about_tab.addEventListener('click', (event) => {
    location.href = pathBegin+ "about.html";
});

const projects_tab = document.querySelector("p[id='projects_tab'");
projects_tab.addEventListener('click', (event) => {
    location.href = pathBegin+"projects.html";
});

const contact_tab = document.querySelector("p[id='contact_tab'");
contact_tab.addEventListener('click', (event) => {
    location.href = pathBegin+"contact.html";
});

const intro_circle = document.querySelector('.circle[id="intro_circle"]');
intro_circle.addEventListener('click', (event) => {
    header.innerHTML = "Hello! I am <b>Rupal</b>";
    home_para.innerHTML = "I am a Product Manager currently working @Google in San Francisco";
    body.style.backgroundColor = "#E5F9FC";
    intro_circle.classList.add("addButtonSelection");
    create_circle.classList.remove("addButtonSelection");
    connect_circle.classList.remove("addButtonSelection");
    learn_more_button.id= "learn_more_button";    
});

const create_circle = document.querySelector('.circle[id="create_circle"]');
create_circle.addEventListener('click', (event) => {
    // console.log("click logged create")
    header.innerHTML = "I love <b>creating</b>"
    home_para.innerHTML = "helpful products, technical side projects, and art";
    body.style.backgroundColor = "#FCE8E1";
    create_circle.classList.add("addButtonSelection");
    intro_circle.classList.remove("addButtonSelection");
    connect_circle.classList.remove("addButtonSelection");
    learn_more_button.id= "see_projects_button";    
});

const connect_circle = document.querySelector('.circle[id="connect_circle"]');
connect_circle.addEventListener('click', (event) => {
    // console.log("click logged connect")
    header.innerHTML = "I enjoy human <b>connection</b>"
    home_para.innerHTML = "Connect with me to chat and ideas to collaborate on projects. <3";
    body.style.backgroundColor = "#D8F4E6";
    connect_circle.classList.add("addButtonSelection");
    intro_circle.classList.remove("addButtonSelection");
    create_circle.classList.remove("addButtonSelection");
    learn_more_button.id= "contact_me_button";
});

learn_more_button.addEventListener('click', (event) => {
    // console.log("click learn more button")
    if (learn_more_button.id== "learn_more_button")
        location.href = pathBegin+ "about.html";
    else if (learn_more_button.id== "see_projects_button")
        location.href = pathBegin+ "projects.html";
    else    
    location.href = pathBegin+ "contact.html";
});

// see_projects_button.addEventListener('click', (event) => {
//     // console.log("click learn more button")
//     location.href = pathBegin+"projects.html";
// });

// contact_me_button.addEventListener('click', (event) => {
//     // console.log("click learn more button")
//     location.href = pathBegin+"contact.html";
// });

