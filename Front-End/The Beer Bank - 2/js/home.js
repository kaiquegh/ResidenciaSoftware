
//Chamando API - Função AJAX
$(() => {

    function loadData() {
        if (this.readyState == 4 && this.status == 200) {
            var resposta = JSON.parse(this.responseText);
            resposta.forEach((element, index) => {
                let imagem = element.image_url;
                if (imagem == null) {
                    imagem = "../img/modelo.jpg"
                }
                var child =
                    "<div class='col-12 col-sm-6 col-md-4 mb-5'>" +
                    "<div class='card h-100'>" +
                    "<div class='card-header text-right'>" +
                    "<i class='fa fa-star active-star' aria-hidden='true'></i>" +
                    "<img class='img-fluid' src='' alt=''>" +
                    "</div>" +
                    `<a href='#' class='link-modal' data-toggle='modal' onclick="openModal('${imagem}','${element.name}','${element.tagline}','${"IBU: " + element.ibu}','${"ABV: " + element.abv}','${element.food_pairing}','${element.description}')" data-target='#product'>`+
                    "<img class='card-img-top' src='" + imagem + "' alt=''>" +
                    "<div class='card-body text-center'>" +
                    "<h3 class='card-title text-warning'>" + element.name + "</h5>" +
                    "<p class='card-text text-muted'>" + element.tagline + "</p>" +
                    "</div>" +
                    "</div>" +
                    "</div>";
                $('#card').append(child);
            });
        }
    }

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = loadData;

    xhttp.open("GET", "https://api.punkapi.com/v2/beers?page=1&per_page=78", true);
    xhttp.send();

    //Função para busca por nome, página Home
    $("#find").keyup(() => {
        let link;
        if ($("#find").val() == "") {
            link = "https://api.punkapi.com/v2/beers?page=1&per_page=78";
        }
        else {
            link = "https://api.punkapi.com/v2/beers?per_page=78&beer_name=" + $("#find").val();
        }

        $('#card').empty();
        xhttp.open("GET", link, true);
        xhttp.send();
    })

    //Função para efeito da paginação
    $('.page-link').click((event) => {
        let page = event.target.id;
        $('#card').empty();
        xhttp.open("GET", "https://api.punkapi.com/v2/beers?page=" + page + "&per_page=78", true);
        xhttp.send();
    })

    $("#home").click(() => {
        document.location.reload(true);
    })


    //Função para busca avançada
    $("#busca").click(() => {

        let link = "https://api.punkapi.com/v2/beers?per_page=78";

        if ($("#minIBU").val() !== "") {
            link += "&ibu_gt=" + $("#minIBU").val();
        }
        if ($("#maxIBU").val() !== "") {
            link += "&ibu_lt=" + $("#maxIBU").val();
        }
        if ($("#minABV").val() !== "") {
            link += "&abv_gt=" + $("#minABV").val();
        }
        if ($("#maxABV").val() !== "") {
            link += "&abv_lt=" + $("#maxABV").val();
        } if ($("#minEBC").val() !== "") {
            link += "&ebc_gt=" + $("#minEBC").val();
        }
        if ($("#maxEBC").val() !== "") {
            link += "&ebc_lt=" + $("#maxEBC").val();
        }
        if ($("#brewedBefore").val() !== "") {
            link += "&brewed_before=" + $("#brewedBefore").val();
        }
        if ($("#brewedAfter").val() !== "") {
            link += "&brewed_after=" + $("#brewedAfter").val();
        }

        console.log(link);
        $('#card').empty();
        xhttp.open("GET", link, true);
        xhttp.send();
    })
})

function openModal(img, name, tagline, ibu, abv, served, features){
    
    $("#modal-name").text(name);
    $("#modal-imagem").attr("src", img);
    $("#modal-tagline").text(tagline);
    $("#modal-ibu").text(ibu);
    $("#modal-abv").text(abv);
    $("#modal-served").empty();
    $("#modal-features").text(features);

    var semelhantes = served.split(',');

    semelhantes.forEach((element) => {
        $("#modal-served").append($("<li>").append(element));
    })
}

//Função favorita estrelinha
$(".beer").on("click", ".fa-star", function () {
    $(this).toggleClass("active-star") 
    localStorage.setItem("favs","id")
    
});

/*
$("#favoritas").click(() => {
    $('#card').empty();
        xhttp.open("GET", favorite, true);
        xhttp.send();
})*/

$('.card-header img').click((event) =>{
    let idCard = $(event.target).parent('.card-header').parent('.card').attr('id');
    if(isFavorite(idCard)){
        $(event.target.class).attr('.fa-star');
        rmFavorite(idCard)
    }
    else {
        $(event.target.class).attr('.active-star');
        addFavorite(idCard) 
    }
});

//Função Add Itens Favoritos
function addFavorite(id){
    favorite.id.push(id);
    localStorage.setItem("favorite", JSON.stringify(favorite));
};

//Função Rem Itens Favoritos
function rmFavorite(id){
    favorite.id.splice(favorite.id.indexOf(id),1);
    localStorage.setItem("favorite", JSON.stringify(favorite));
};

//Função de verificação favoritos
function isFavorite(id){
    return favorite.id.find(
        (element) => id == element
    )
}

var favorite = localStorage.getItem("favorite");
    if (favorite == undefined) {
        favorite = {
        id: []
        }
    }
    else{
        favorite = JSON.parse(favorite);
}
