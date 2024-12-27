$.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151", function (response) {
    const urlPokemons = response.results;
    urlPokemons.forEach(element => {
        let urlPokemon = element.url;
        $.get(urlPokemon, function (dataPoke) {
            console.log(dataPoke)
            let namePoke = (dataPoke.name).toUpperCase();
            let spritsPoke = dataPoke.sprites;
            let idPoke = dataPoke.id;
            $('#content').append(`
            <div class="card" data-name="${namePoke}" data-id="${idPoke}">
                <h1>${namePoke}</h1>
                <img src="${spritsPoke.front_default}" alt="">
            </div>
                `)
        })
    });
});

$('#searchInput').on('input', function() {
    let textoInput = $(this).val().toLowerCase();

    $('#content .card').each(function() {
        let cardName = $(this).data('name').toLowerCase();
        let cardId = $(this).data('id').toString();
        if (cardName.includes(textoInput) || cardId.includes(textoInput)) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
});