


import { projectData } from "./project-data.js"
console.log(projectData)

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
console.log(projectMarkup)