console.log('%c HI', 'color: firebrick')

let allBreeds;

fetch("https://dog.ceo/api/breeds/image/random/4") 
    .then((resp) => resp.json())
    .then(function (data) {
        renderDogs(data)
    })


function renderDogs (imageArray) {
    const addImages = document.getElementById("dog-image-container")
    console.log(imageArray)
    imageArray.message.forEach(element => {
        const img = document.createElement("img")
        img.src = element
        addImages.appendChild(img) 
    });
        
    }
    
    fetch("https://dog.ceo/api/breeds/list/all")
        .then((resp) => resp.json())
        .then(function(data) {
            allBreeds = Object.keys(data.message)
            addDogBreeds(allBreeds)
        })
        
function addDogBreeds (breedList) {
    const breeds = document.getElementById("dog-breeds")
    breedList.forEach(breed => {
        const createLi = document.createElement("li")
        createLi.innerText = breed
        createLi.addEventListener("click", changeColor)
        breeds.appendChild(createLi)
    })
}

function changeColor (e) {
    console.log("event", e.target)
    let li = e.target
    li.style.color = "red"
}

const dropDown = document.getElementById("breed-dropdown")

dropDown.addEventListener("change", firstLetterSelector) 


function firstLetterSelector (e) {
    const userChoice = e.target.value
    const firstLetters = allBreeds.filter((breed) => {
        console.log("breed", breed[0], userChoice)
    
        return (userChoice === breed[0])
    
}) 
addDogBreeds(firstLetters)
console.log("First Letter", firstLetters)
    }

