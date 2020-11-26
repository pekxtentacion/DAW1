function cargarCatalogo(){
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
    ]

    cargarJSON(pizzas);
}

function cargarJSON(json){
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

    document.getElementById("elementos").innerHTML = div;
}
