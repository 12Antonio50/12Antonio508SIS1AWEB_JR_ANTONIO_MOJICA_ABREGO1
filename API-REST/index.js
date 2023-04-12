function getCharacters(done) {
    const results = fetch("https://node-vercel-api-tau.vercel.app/");
    results
        .then(response => response.json())
        .then(data => {
            done(data)
        });
}

getCharacters(data => {
    console.log(data);

    if (data && data.length > 0) {
        data.forEach(personaje => {
            const article = document.createElement("article");
            article.innerHTML =`
            <div class = "image-container" >
                <h1>${personaje.title}</h1>
                <span>Director: ${personaje.director}</span>
                <img src="${personaje.image}" alt="imagen">
                <br>
                <span>Rating: ${personaje.rating}</span>
                <br>
                <span>Año: ${personaje.year}</span>
            </div>
            `;

            const main = document.querySelector("main");
            main.appendChild(article);

        });
    } else {
        console.log("No se encontraron resultados");
    }
});

