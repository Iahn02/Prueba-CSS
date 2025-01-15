function getCharacters(done){
    fetch('https://rickandmortyapi.com/api/character')
        .then(res => res.json())
        .then(data => done(data))
        .catch(err => console.log(err))
}

getCharacters(data => {
    data.results.forEach(character => {
        const article = document.createRange().createContextualFragment(`
        <article>
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
            <span class="status ${character.status}">${character.status}</span>
        </article>
        `)

        const main = document.querySelector('main')
        main.appendChild(article)
    })
})
