document.querySelector('.home').addEventListener('click', toggleHome)
document.querySelector('.view').addEventListener('click', toggleView);
document.querySelector('.edit').addEventListener('click', toggleProjects);
// document.querySelector('').addEventListener('click', toggleView)

let home = document.querySelector('.homeWindow');
let view = document.querySelector('.viewSection');
let projects = document.querySelector('.projects');

function toggleHome() {
    home.classList.toggle('hidden');
    view.classList.add('hidden');
    projects.classList.add('hidden');
    // document.querySelector('.heading').textContent = 'Home.exe';
}

function toggleView() {
    home.classList.add('hidden');
    projects.classList.add('hidden');
    view.classList.toggle('hidden');
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
};
