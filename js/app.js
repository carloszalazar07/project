const formulario = document.getElementById('formulario');
const contenido = document.getElementById('contenido');

let ArrayProductos = [];



// Funciones
const CrearProducto = (nombre,precio,cantidad)=>{
    // crear item
    let producto = {
        nombre: nombre,
        precio: precio,
        cantidad: cantidad,
        estado: false
    }

    ArrayProductos.push(producto);
    return producto;
}
const GuardarProducto = ()=>{
    localStorage.setItem('productos',JSON.stringify(ArrayProductos));
    Mostrar();
}

const Mostrar = (e)=>{
    // e.preventDefault();
    contenido.innerHTML = '';
    ArrayProductos = JSON.parse(localStorage.getItem('productos'));
    console.log(ArrayProductos);

    if(ArrayProductos == null){
        ArrayProductos = [];
        contenido.innerHTML = `<h4 class="lead">Todavia no existen DATOS 😟</h4>`;
    }else{

        ArrayProductos.forEach(element => {
            console.log(element);
            contenido.innerHTML += `
            <tr>
                <td>${element.nombre}</td>
                <td class="text-success"><b>$${element.precio}</b></td>
                <td>${element.cantidad}</td>
                <td><i class="material-icons text-danger">delete</i></td>
            </tr>
            `;
        });
    }
}




// Eventos
formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    let nombre = document.getElementById('nombre').value;
    let precio = document.getElementById('precio').value;
    let cantidad = document.getElementById('cantidad').value;

    CrearProducto(nombre,precio,cantidad);
    GuardarProducto();
    formulario.reset();
    
});
document.addEventListener('DOMContentLoaded', Mostrar);

contenido.addEventListener('click',(e)=>{
    e.preventDefault();

    console.log(e);

});


