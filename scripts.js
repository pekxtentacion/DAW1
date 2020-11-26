function cargarCatalogo(show){
    let pizzas = [
        {
            "nombre": "4 Quesos",
            "id": "P1",
            "precio": "7,50€",
            "source": "images/pizza_cuatro_quesos.jpg",
            "html": "4Quesos.html"
        },
        {
            "nombre": "Carbonara",
            "id": "P2",
            "precio": "7,60€",
            "source": "images/carbonara.jpg",
            "html": ""
        },
        {
            "nombre": "Piazza",
            "id": "P3",
            "precio": "7,50€",
            "source": "images/pizza_cuatro_quesos.jpg",
            "html": "4Quesos.html"
        },
        {
            "nombre": "4 Estaciones",
            "id": "P4",
            "precio": "7,60€",
            "source": "images/pizza-4-estaciones.png",
            "html": "4Quesos.html"
        },
        {
            "nombre": "Frutti di Mare",
            "id": "P5",
            "precio": "8,50€",
            "source": "images/pizza-frutti-di-mare.jpg",
            "html": "4Quesos.html"
        },
        {
            "nombre": "Mediterranea",
            "id": "P6",
            "precio": "7,60€",
            "source": "images/mediterranea.png",
            "html": "4Quesos.html"
        }
    ];

    let complementos = [
        {
            "nombre": "Pan de Ajo",
            "id": "C1",
            "precio": "2,50€",
            "source": "images/Pan-de-ajo-y-queso.jpg", 
            "html": ""
        }, 
        {
            "nombre": "Aros Cebolla",
            "id": "C2",
            "precio": "2,50€",
            "source": "images/aros-de-cebolla.jpg", 
            "html": ""
        }
    ];
    
    let bebidas = [
        {
            "nombre": "Cocacola 1L",
            "id": "C3",
            "precio": "2,50€",
            "source": "images/cocacola.jpg",
            "html": ""
        },
        {
            "nombre": "Fanta 1L",
            "id": "C4",
            "precio": "2,50€",
            "source": "images/Fanta-Logo.png",
            "html": ""
        },
        {
            "nombre": "Clipper 1L",
            "id": "C5",
            "precio": "2,50€",
            "source": "images/clipper.jpg",
            "html": ""
        },
        {
            "nombre": "Agua 1L",
            "id": "C6",
            "precio": "1,50€",
            "source": "images/LG-AQUAVIA-cuadrado.jpg",
            "html": ""
        }
    ];

    let postres = [
        {
            "nombre": "Tarta Queso",
            "id": "PO1",
            "precio": "3,50€",
            "source": "images/bux-1538396997-tarta_de_queso_sin_horno.jpg",
            "html": ""
        }, 
        {
            "nombre": "Crepe Nutella",
            "id": "PO2",
            "precio": "3,50€",
            "source": "images/crepes-veganas-chocolate.jpg",
            "html": ""
        },
        {
            "nombre": "Profiterole",
            "id": "PO3",
            "precio": "3,50€",
            "source": "images/chocolateprofiterole_86196_16x9.jpg",
            "html": ""
        },
        {
            "nombre": "Gofre",
            "id": "PO4",
            "precio": "3,50€",
            "source": "images/gofre.jpg",
            "html": ""
        },
        {
            "nombre": "Panacota",
            "id": "PO5",
            "precio": "3,50€",
            "source": "images/panacota.jpg",
            "html": ""
        },
        {
            "nombre": "Brownie",
            "id": "PO6",
            "precio": "3,50€",
            "source": "images/ppal-brownie_0.jpg",
            "html": ""
        }
    ];
    

    if(show == 1){
        cargarJSON(pizzas,show);
    }else if(show == 2){
        cargarJSON(complementos,show);
    }else if(show == 3){
        cargarJSON(bebidas,show);
    }else if(show == 4){
        cargarJSON(postres,show);
    }
}

function cargarJSON(json,show){
    var fila = 0;
    var div = "";
    for(let item of json){
        if(fila == 0){
            div += "<div class='row'>";
        }
        div += `
        <div class="col">
            <div class="main-pizza"  onclick="window.location='${item.html}'">
                <img  src="${item.source}" alt="${item.nombre}" />
                
                <div class="row marginsetup">
                    <div class="col-8">
                        <p class='pizza-text pizza-title'><a href="${item.html}">${item.nombre}</a> </p>
                    </div>
                    <div class="col-4">
                        <p class="pizza-price pizza-text">${item.precio}</p>
                    </div>
                </div>

            </div>
        </div>
        `;
        
        if(fila == 2){
            div += "</div>"
            fila = 0;
            continue;
        }
        fila++;
        
    }
    if(show == 1){
        document.getElementById("elementos").innerHTML = div;
    }else if(show == 2){
        document.getElementById("complementosid").innerHTML = div;
    }else if(show == 3){
        document.getElementById("bebidasid").innerHTML = div;
    }else if(show == 4){
        document.getElementById("postresid").innerHTML = div;
    }
    
}
