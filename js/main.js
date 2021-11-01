$.get("../data/destinos.json", function (datos,estado) {
        if (estado == "success") {
                console.dir(datos);
                console.log(estado);
                for (const dato of datos) {
                        destinos.push(new Destino(dato.nombre, dato.region, dato.pais));
                }
        }
        for (const destino of destinos) {
                        $(".list").append(`<option>${destino.nombre}</option>`);
        }
});
$.get("../data/vuelos.json", function (datos,estado) {
        if (estado == "success") {
                console.dir(datos);
                console.log(estado);
                for (const vuelo of datos) {
                        vuelos.push(new Vuelo(vuelo.origen,vuelo.destino,vuelo.fecha,vuelo.hora,vuelo.id,vuelo.nombre,vuelo.precio));
                }
        } else {
                console.log("Los datos no se cargaron correctamente");
        }
});

$(document).ready(function() {
        let storedName= sessionStorage.getItem('name');
        let bienvenida=document.getElementById('welcome');
        bienvenida.innerHTML= `Bienvenido/a ${storedName}`;
        $("#btnResults").on("click",results);
        $("#misVuelos").append(`<button id="btnConfirmar" class ='btn btn-outline-dark mt-1 mb-1' data-toggle='modal' data-target='#confirmacionCompra'>Confirmar compra</button>
                                <button id="btnVaciar" class ='btn btn-outline-dark m-1'>Vaciar</button>`);

        $("#btnConfirmar").on("click", enviarCompra);
        $("#btnVaciar").on("click", vaciarCarrito);
});

 

                           











