var registrar = ()=>{
    let eNombre = document.getElementById("nombre");
    let eApellido = document.getElementById("apellido");
    let nombre = eNombre.value;
    let apellido = eApellido.value;
    console.log(nombre);
    console.log(apellido);
    let persona = {"nombre":nombre,"apellido":apellido}
    let listadoPersonas = localStorage.getItem("personas");
    let listadoAntiguo = JSON.parse(listadoPersonas);
    if(listadoAntiguo==null){
        listadoNuevo = [persona]
    }else{
        //listadoAntiguo.push(persona)
        listadoNuevo = [...listadoAntiguo,persona]
    }
    console.log(persona)
    console.log(listadoAntiguo)
    console.log(listadoNuevo);
    localStorage.setItem("personas",JSON.stringify(listadoNuevo));
   }

document.getElementById("btn").addEventListener("click",registrar);
