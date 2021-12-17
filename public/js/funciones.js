//NTERFAZ DE PRODUCTOS CON JQUERY
function productosUIjQuery(productos, id){
    $(id).empty()
    for(const producto of productos){
        $(id).append(`<div class="card mx-2" style="width: 18rem;">
                        <img src="${producto.imagen}" class="card-img-top mt-2" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${(producto.tipo)}</h5>
                          <p class="card-text">${('$ ' + producto.valor*producto.iva)}</p>
                          <a href="#" id='${producto.id}' class="btn btn-primary btn-compra">Comprar</a>
                        </div>
                      </div>`)
    }
    //BOTÓN COMPRAR
$('.btn-compra').on("click", comprar);
}

//INTERFAZ DE CHECKBOX CON JQUERY
function checkboxUIjQuery(categoria, id){
  $(id).empty()
  for(const categorias of categoria){
      $(id).append(`<ul class="list-group">
      <li class="list-group-item">
        <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
        ${(categoria[0])}
      </li>
    </ul>`)
  }
}

//COMPRA
function comprar(e){
  e.preventDefault();
  const idProducto   = e.target.id;
  const seleccionado = carrito.find(p => p.id == idProducto);
  if(seleccionado == undefined){
    carrito.push(productos.find(p => p.id == idProducto));
  }else{
    seleccionado.agregarCantidad(1);
  }
 
  //STORAGE
  localStorage.setItem("CARRITO",JSON.stringify(carrito));
  carritoUI(carrito);
}

//INTERFAZ DEL CARRITO
function carritoUI(productos){
  //CAMBIAR INTERIOR DEL INDICADOR DE CANTIDAD DE PRODUCTOS;
  $('#carritoCantidad').html(productos.length);
  //VACIAR EL INTERIOR DEL CUERPO DEL CARRITO;
  $('#carritoProductos').empty();
  for (const producto of productos) {
    $('#carritoProductos').append(registroCarrito(producto));
  }

  //EVENTOS CLICK BOTONES DEL CARRITO
$('.btn-delete').on('click', eliminar);
$('.btn-add').click(addCantidad);
$('.btn-sub').click(subCantidad);
}



//FUNCION PARA GENERAR LA ESTRUCTURA DEL REGISTO HTML
function registroCarrito(producto){
  return `<p> ${producto.tipo} 
  <span class="badge bg-light text-dark">$ ${producto.valor}</span>
  <span class="badge bg-light text-dark">${producto.cantidad}</span>
  <span class="badge bg-subtotal">${producto.subtotal()}</span>
  <a id="${producto.id}" class="btn btn-manejadores btn-add">+</a>
  <a id="${producto.id}" class="btn btn-sub">-</a>
  <a id="${producto.id}" class="btn btn-manejadores btn-delete">x</a>
  </p>`
}



function eliminar(e){
  console.log(e.target.id);
  let posicion = carrito.findIndex(p => p.id == e.target.id);
  carrito.splice(posicion, 1);
  console.log(carrito);
  carritoUI(carrito);
  localStorage.setItem("Carrito",JSON.stringify(carrito));
}

//AGREGAR CANTIDAD DE PRODUCTO
function addCantidad(){
  let producto = carrito.find(p => p.id == this.id);
  producto.agregarCantidad(1);
  $(this).parent().children()[1].innerHTML = producto.cantidad;
  $(this).parent().children()[2].innerHTML = producto.subtotal();
  //GUARDAR EN STORAGE
  localStorage.setItem("Carrito",JSON.stringify(carrito));
}

//RESTAR CANTIDAD DE PRODUCTO
function subCantidad(){
  let producto = carrito.find(p => p.id == this.id);
  if(producto.cantidad > 1){
    producto.agregarCantidad(-1);
    let registroUI = $(this).parent().children();
    registroUI[1].innerHTML = producto.cantidad;
    registroUI[2].innerHTML = producto.subtotal();
    localStorage.setItem("Carrito",JSON.stringify(carrito));
  }
}

//FUNCION SELECT
function selectUI(lista, selector){
  $(selector).empty();
  lista.forEach(element => {
      $(selector).append(`<option value='${element}'>${element}</option>`);
  });
  $(selector).prepend(`<option value='TODOS' selected>TODOS</option>`);
}