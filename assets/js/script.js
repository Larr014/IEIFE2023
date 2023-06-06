var modificar = (listadoNuevo)=>{
    let eNombre = document.getElementById("nombre");
    let eApellido = document.getElementById("apellido");
    let eBtnEditarUp = document.getElementById('btnEditar');
            
    let nombre = eNombre.value;
    let apellido = eApellido.value;
    let indice = eBtnEditarUp.value;
    listadoNuevo[indice].nombre = nombre;
    listadoNuevo[indice].apellido = apellido;
    localStorage.setItem('personas',JSON.stringify(listadoNuevo));
    //Cargar la tabla de nuevo
    cargarTabla(listadoNuevo)
}
var eliminar = (listadoNuevo)=>{
    let eBtnEliminarUp = document.getElementById('btnEliminar');
    let indice = eBtnEliminarUp.value;
    console.log(listadoNuevo)
    lista = listadoNuevo.filter((p)=>p.id!=indice)
    console.log(lista)
    localStorage.setItem('personas',JSON.stringify(lista));
    cargarTabla(lista)
}
var cargarTabla = (listadoNuevo)=>{
    let eContenedorTabla = document.getElementById("contenedorTabla");
    let eNombre = document.getElementById("nombre");
    let eApellido = document.getElementById("apellido");
    
    render = "<table>"
    render+="<tr><th>Nombre</th><th>Apellido</th><th>Accion</th></tr>"
    for (let i = 0; i <listadoNuevo.length; i++) {
        const element = listadoNuevo[i];
        render+="<tr>"
        render+="<td>"+element.nombre+"</td>"
        render+="<td>"+element.apellido+"</td>"
        render+="<td>"
        render+="<button id='btnEditar"+i+"'>Editar</button>"
        render+="<button id='btnEliminar"+i+"'>Eliminar</button>"
        render+="</td>"
        render+="</tr>"
        
    }
    render += "</table>";
    eContenedorTabla.innerHTML = render;
    for (let i = 0; i < listadoNuevo.length; i++) {
        var eBtn = document.getElementById("btnEditar"+i); 
        var eBtn2 = document.getElementById("btnEliminar"+i);
        let element = listadoNuevo[i]
        eBtn.addEventListener("click",()=>{
            eNombre.value = element.nombre;
            eApellido.value = element.apellido;
            let sEditar = "<button type='button' id='btnEditar' value='"+i+"'>Editar</button>";
             
            let contenedorBoton = document.getElementById('contenedorBtnExtra');
            contenedorBoton.innerHTML = sEditar;
            let eBtnEditarUp = document.getElementById('btnEditar');
            eBtnEditarUp.addEventListener('click',()=>modificar(listadoNuevo))
        })
        eBtn2.addEventListener("click",()=>{
            eNombre.value = element.nombre;
            eApellido.value = element.apellido;
            let sEliminar = "<button type='button' id='btnEliminar' value='"+i+"'>Eliminar</button>";
            let contenedorBoton = document.getElementById('contenedorBtnExtra');
            contenedorBoton.innerHTML = sEliminar;
            let eBtnEliminarUp = document.getElementById('btnEliminar');
            eBtnEliminarUp.addEventListener('click',()=>eliminar(listadoNuevo))
       
            
        })
    }
}

var registrar = ()=>{
    let eNombre = document.getElementById("nombre");
    let eApellido = document.getElementById("apellido");
    let nombre = eNombre.value;
    let apellido = eApellido.value;
    console.log(nombre);
    console.log(apellido);
    let listadoPersonas = localStorage.getItem("personas");
    let listadoAntiguo = JSON.parse(listadoPersonas);
    if(listadoAntiguo==null){
        let persona = {"id": 0,"nombre":nombre,"apellido":apellido}
        listadoNuevo = [persona]
    }else{
        //listadoAntiguo.push(persona)
        let persona = {"id": listadoAntiguo.length,"nombre":nombre,"apellido":apellido}
        listadoNuevo = [...listadoAntiguo,persona]
    }
    //console.log(persona)
    console.log(listadoAntiguo)
    console.log(listadoNuevo);
    localStorage.setItem("personas",JSON.stringify(listadoNuevo));
    //eContenedorTabla.innerHTML = ""+listadoNuevo.length;
    //tabla
    cargarTabla(listadoNuevo)
    //
    
   }

document.getElementById("btn").addEventListener("click",registrar);
