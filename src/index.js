function fetchPups() {
    fetch('http://localhost:3000/pups')
    .then(response => response.json())
    .then(data => renderPups(data));
}

function renderPups(json) {
    const div = document.querySelector('#dog-bar');
    json.forEach(pups => {
        const span = document.createElement('span');
        span.textContent = pups.name;
        div.appendChild(span);
        span.id = pups.id
        document.getElementById(pups.id).addEventListener('click', pupsInfo)
    })
}

function pupsInfo() {
const pupsId = this.id
fetch('http://localhost:3000/pups')
.then(response => response.json)
.then(data => renderInfo( pupsId, data))



function renderInfo(pupsId, data) {
    data.forEach(pups => {
        const infoBar = document.querySelector('#dog-info')
        if(pups.id == pupsId) {
        const dogPic = document.createElement('img')
        dogPic.src = dog.image
        infoBar.appendChild(dogPic)
        const dogName = document.createElement('h2')
        dogName.innerHTML = `${dog.name}`
        infoBar.appendChild(dogName)
        const btn = document.createElement('button')
        btn.innerHTML = `${dog.isGoodDog}`
        infoBar.apppendChild(btn)
        btn.addEventListener('click', flipGoodness)
        return btn
    } })

    
        
        
    
}

} 




document.addEventListener('DOMContentLoaded', function() {
    fetchPups()
})
