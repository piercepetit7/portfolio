


import { projectData } from "./project-data.js"
// console.log(projectData)

const cardContainer = document.getElementById('card-container')

let projectMarkup = projectData.map(project =>
    `
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${project.image}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${project.title}</h5>
                        <p class="card-text">${project.info}</p>
                        <div>
                            <a href="${project.github}" class="btn btn-primary">Github</a>
                            <a href="${project.deployment}" class="btn btn-secondary">Deployment</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
).join('')

cardContainer.innerHTML = projectMarkup
//console.log(projectMarkup)

// Tile Functions


let contactTile = document.querySelector('#contactTile')
let contactPage = document.querySelector('.contactPage')
//console.log(contactTile,contactPage)


contactTile.addEventListener('click', contactClick)

function contactClick() {
    contactPage.scrollIntoView()
}

let devworkTile = document.querySelector('#devWorkTile')
let devworkPage = document.querySelector('.devWorkPage')



devworkTile.addEventListener('click', devworkClick)

function devworkClick() {
    devworkPage.scrollIntoView()
}

let resumeTile = document.querySelector('#resumeTile')
let resumePage = document.querySelector('#resumePage')



resumeTile.addEventListener('click', resumeClick)

function resumeClick() {
    resumePage.scrollIntoView()
}

let pastworkTile = document.querySelector('#pastWorkTile')
let pastworkPage = document.querySelector('#pastWorkCar')

pastworkTile.addEventListener('click', pastworkClick)

function pastworkClick() {
    pastworkPage.scrollIntoView()
}

let aboutTile = document.querySelector('#aboutMeTile')
let aboutPage = document.querySelector('#aboutMePage')

aboutTile.addEventListener('click', aboutClick)

function aboutClick() {
    aboutPage.scrollIntoView()
}


// link functions

let linkedIn = document.querySelector('linkedIn')