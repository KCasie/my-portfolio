document.querySelector('.home').addEventListener('click', toggleHome);
document.querySelector('.view').addEventListener('click', toggleView);
document.querySelector('.edit').addEventListener('click', toggleProjects);
document.querySelector('.help').addEventListener('click', toggleHelp);
document.querySelector('.meow').addEventListener('click', toggleHelp);
document.querySelector('.main').addEventListener('click', toggleXHome);
document.querySelector('.viewX').addEventListener('click', toggleXView);
document.querySelector('.projectX').addEventListener('click', toggleXProject);
document.querySelector('.contactX').addEventListener('click', toggleXContact);

let home = document.querySelector('.homeWindow');
let view = document.querySelector('.viewSection');
let projects = document.querySelector('.projects');
let help = document.querySelector('.contact');

function toggleHome() {
    home.classList.toggle('hidden');
    view.classList.add('hidden');
    projects.classList.add('hidden');
    help.classList.add('hidden');
    // document.querySelector('.heading').textContent = 'Home.exe';
}

function toggleView() {
    home.classList.add('hidden');
    projects.classList.add('hidden');
    view.classList.toggle('hidden');
    help.classList.add('hidden');
    // document.querySelector('.heading').textContent = 'View.exe';
    // add selfie img
    // document.querySelector('.homeWrapper').style.background = 'url("https://64.media.tumblr.com/c4304470bdf5eb222434fb4c4fd50e8e/27b62ba9d1aa22f6-80/s500x750/7fc5d167281b2cc79c70f6644ebe207dd3d7c781.png")';
    // replace p text with story blurb
    // document.querySelector('.description').textContent = 'test';
}

function toggleProjects() {
    home.classList.add('hidden');
    view.classList.add('hidden');
    projects.classList.toggle('hidden');
    help.classList.add('hidden');
};

function toggleHelp() {
    home.classList.add('hidden');
    view.classList.add('hidden');
    projects.classList.add('hidden');
    help.classList.toggle('hidden');
}

// program to display the date
// get local machine date time
const date = new Date();

// get the date as a string
const n = date.toDateString();

// get the time as a string
const time = date.toLocaleTimeString();

// display date
document.querySelector('.date').textContent = `${n}`;

// console.log('Date: ' + n);

// display time
document.querySelector('.time').textContent = `${time}`;

// console.log('Time: ' + time)


function toggleXHome() {
    // close window
    home.classList.toggle('hidden');
}

function toggleXView() {
    view.classList.toggle('hidden');
}

function toggleXProject() {
    projects.classList.toggle('hidden');
}

function toggleXContact() {
    help.classList.toggle('hidden');
}


// NAV MEDIA QUERY

// hide current navbar --- done 

// replace crescent with mobile {windows} icon --- done

// have navbar be column --- done 

// smurf on windows icon for toggle hidden

document.querySelector('.fa-window-restore').addEventListener('click', toggleNav); 

let nav = document.querySelector('.navigation');

function toggleNav() {

    // grab values from nav lis
    let homeLi = document.querySelector('.home');
    let viewLi = document.querySelector('.view');
    let editLi = document.querySelector('.edit');
    let helpLi = document.querySelector('.help');
    let navbar = document.querySelector('nav');
    // change text of lis 

    homeLi.textContent = 'Home';
    viewLi.textContent = 'View';
    editLi.textContent = 'Edit';
    helpLi.textContent = 'Help';
    nav.style.display = 'flex';
    navbar.style.display = 'flex';
    let icon = document.querySelector('.fa-window-restore');

    icon.classList.toggle('hidden');
    navbar.classList.toggle('hidden');
}