

function getCharacter(done){

    const results = fetch('https://apir-ivory.vercel.app/api/movies')


    results
    .then(response => response.json())
    .then( data => {
        done(data)

    }) 

}
getCharacter (data => {

    data.results.forEach(personaje =>{

        const article = document.createRange().createContextualFragment(`
        
        <article>

        <div class="image-container">
            <img src="${personaje.image}" alt="personaje">

        </div>

        <h2>${personaje.name}</h2>
        <span>${personaje.status}</span>

        </article>
        
        `)

        const main = document.querySelector('main')

        main.append(article)



    })

    

})