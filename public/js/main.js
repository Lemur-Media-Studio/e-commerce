//FUNCION READY
$(document).ready(function () {
    if("Carrito" in localStorage){
        const arrayLiterales = JSON.parse(localStorage.getItem("Carrito"));
        for (const literal of arrayLiterales) {
            carrito.push(new Producto(literal.id, literal.imagen, literal.tipo, literal.categoria, literal.valor, literal.iva, literal.cantidad));
        }
        console.log(carrito);
        carritoUI(carrito);
    }

    $(".dropdown-menu").click(function (e) { 
        e.stopPropagation();
    });
});

//FUNCION LOAD
window.addEventListener('load',()=>{
    $('#loading').delay(400).fadeOut('slow', ()=>{console.log('ELIMINAR SPINNER')});
    //FADE IN PARA MOSTRAR EL CUERPO DE LA PAGINA
    $('#cuerpo').delay(800).fadeIn("slow",()=>{ console.log('BODY CARGADO')});
    //FADE IN MÁS LENTO PARA MOSTRAR EL NOMBRE DEL CLUB
    $('.tituloAparece').delay(3000).fadeIn(1500,()=>{console.log('TITULO APARECE')});
})

//INSTANCIO LOS PRODUCTOS
productos.push(new Producto(1, "https://www.goalinn.com/f/13726/137261539/umbro-baikal-training.jpg", "Camiseta titular", categoria[0], 8500, 1.21));
productos.push(new Producto(2, "https://www.goalinn.com/f/13726/137261543/umbro-baikal-training.jpg", "Camiseta alternativa", categoria[1], 8500, 1.21));
productos.push(new Producto(3, "https://www.goalinn.com/f/13726/137261541/umbro-baikal-training.jpg","Camiseta portero", categoria[2], 8500, 1.21));
productos.push(new Producto(4, "https://www.goalinn.com/f/13726/137261545/umbro-baikal-training.jpg","Camiseta entrenamiento", categoria[3], 6500, 1.21));
productos.push(new Producto(5, "https://www.goalinn.com/f/13620/136204435/umbro-king-short-pants.jpg","Short titular", categoria[0], 5000, 1.21));
productos.push(new Producto(6, "https://www.goalinn.com/f/13620/136204431/umbro-king-short-pants.jpg","Short alternativo", categoria[1], 5000, 1.21));
productos.push(new Producto(7, "https://www.goalinn.com/f/13620/136204430/umbro-king-short-pants.jpg","Short portero", categoria[2], 5000, 1.21));
productos.push(new Producto(8, "https://www.goalinn.com/f/13620/136204373/umbro-joy.jpg","Medias titulares", categoria[0], 2500, 1.21));
productos.push(new Producto(9, "https://www.goalinn.com/f/13620/136204369/umbro-joy.jpg","Medias alternativas", categoria[1], 2500, 1.21));
productos.push(new Producto(10, "https://www.goalinn.com/f/13620/136204368/umbro-joy.jpg","Medias portero", categoria[2], 2500, 1.21));

//MUESTRO LOS PRODUCTOS POR CONSOLA PARA VERIFICAR FUNCIONAMIENTO DEL ARRAY
for (let producto of productos){
    console.log(producto)
}

//INTEFAZ JQUERY PRODUCTOS
productosUIjQuery(productos, "#productosCards");

//SELECT RENDERIZAR
selectUI(categoria,"#filtroCategorias");

//EVENTOS SELECT
$('#filtroCategorias').change(function (e) { 
    const value = this.value;
    //ANIMACION
    $('#productosCards').fadeOut(600,function(){
        if(value == 'TODOS'){
            productosUIjQuery(productos, '#productosCards');
        }else{
            const filtrados = productos.filter(producto => producto.categoria == value);
            productosUIjQuery(filtrados, '#productosCards');
        }
        //SELECT RENDERIZAR PRODUCTOS
        $('#productosCards').fadeIn();
    });
});


