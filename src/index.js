console.log('%c HI', 'color: firebrick')


fetch("https://dog.ceo/api/breeds/image/random/4") 
    .then((resp) => resp.json())
    .then((json) => console.log(json))
    .then(function (data) {
        renderDogs(data)
    })


function renderDogs (imageArray) {
    const addImages = document.getElementById("dog-image-container")
    
    imageArray.forEach(element => {
        const h1 = document.createElement("h1")
        h1.appendChild("dog-image-container")
        h1.innerHTML = element
        addImages.appendChild(h1)
    });
        
    }
    