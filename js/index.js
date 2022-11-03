document.querySelector('.home').addEventListener('click', toggleHome)
document.querySelector('.view').addEventListener('click', toggleView);
document.querySelector('.edit').addEventListener('click', toggleProjects);

let home = document.querySelector('.homeWindow');
let view = document.querySelector('.view');
let projects = document.querySelector('.projects');

function toggleHome() {
    home.classList.toggle('hidden');
    // view.classList.toggle('hidden');
    projects.classList.add('hidden');
    document.querySelector('.heading').textContent = 'Home.exe';
}

function toggleView() {
    // home.classList.toggle('hidden');
    // projects.classList.toggle('hidden');
    document.querySelector('.heading').textContent = 'View.exe';
}

function toggleProjects() {
    home.classList.add('hidden');
    // view.classList.toggle('hidden');
    projects.classList.toggle('hidden');
};

