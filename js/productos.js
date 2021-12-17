class Producto {
        constructor(id, imagen, tipo, categoria, valor, iva, cantidad) {
            this.id = parseInt(id);
            this.imagen = imagen;
            this.tipo = tipo;
            this.categoria = categoria;
            this.valor = parseFloat(valor);
            this.iva = parseFloat(iva);
            this.cantidad = cantidad || 1;
        }
    
        agregarCantidad(valor){
            this.cantidad += valor; 
        }
    
        subtotal(){
            return '$ ' + this.cantidad * this.valor * this.iva;
        }
}
    

