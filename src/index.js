console.log('%c HI', 'color: firebrick')


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
            addDogBreeds(data)
        })
        
function addDogBreeds (breedList) {
    const breeds = document.getElementById("dog-breeds")
    console.log(breedList)
    breedList.message.forEach(element => {
        const createUL = document.createElement("ul")
        createUL.innerText = element
        breeds.appendChild(createUL)
    })
}