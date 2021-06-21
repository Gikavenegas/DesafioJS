//Obtención de la cantidad de boletos y sus valores

var boletosPaseDia = document.getElementById ('pase_dia')
var valorPaseDia = document.getElementsByClassName ('orden')

var boletosPaseCompleto = document.getElementById ('pase_completo')
var valorPaseCompleto = document.getElementsByClassName ('orden')

var boletosPaseDosDias = document.getElementById ('pase_dosdias')
var valorPaseDosDias = document.getElementsByClassName ('orden')

//Valores de los datos extras

var cantidadCamisa = document.getElementById ('camisa_evento')
var costoCamisa = document.getElementsByClassName ('orden')

var cantidadEtiquetas = document.getElementById ('etiquetas')
var costoEtiquetas = document.getElementsByClassName ('orden')

var regalo = document.getElementById ('regalo')

//Se creó una variable para obtener los mismos títulos de cada boleto para agregarlo al resumen
var textosDatos = document.getElementsByClassName('tabla-precio')


//Variable obtenido del botón en el HTML y creación de una escucha

var btnCalcular = document.getElementById ('calcular')
btnCalcular.addEventListener('click', calcular)

function calcular (){

    //Resumen del primer grupo de boletos

    var resumenPaseDia = (boletosPaseDia.value)*valorPaseDia[0].children[2].attributes[1].nodeValue
    var resumenPaseCompleto = (boletosPaseCompleto.value)*valorPaseCompleto[1].children[2].attributes[1].nodeValue
    var resumenPaseDosDias = (boletosPaseDosDias.value)*valorPaseDosDias[2].children[2].attributes[1].nodeValue

    //Resumen de las extras

    //Precio de las camisas sin descuento
    var precioCamisas = (cantidadCamisa.value)*costoCamisa[3].children[2].attributes[1].nodeValue

    //Precio de camisas con la promo
    var promoCamisas = precioCamisas-((precioCamisas*7)/100)


    var resumenEtiquetas = (cantidadEtiquetas.value)*costoEtiquetas[4].children[2].attributes[1].nodeValue
    var opcionRegalo = regalo.options[regalo.selectedIndex].text
    console.log(opcionRegalo)
    

    //Resumen 
    var resumen = document.getElementById ('lista-productos')
    resumen.style.display='block'
    resumen.innerHTML = textosDatos[0].firstElementChild.innerText + '<b>: $' + resumenPaseDia +'</b><br>' + textosDatos[1].firstElementChild.innerText + '<b>: $' + resumenPaseCompleto +'</b><br>' + textosDatos[2].firstElementChild.innerText + '<b>: $' + resumenPaseDosDias +'</b><br>' + 'Costo camisa(s)<b>: $' + promoCamisas +'</b><br>' + 'Costo etiquetas<b>: $' + resumenEtiquetas + '</b><br>' + 'Regalo seleccionado: <b>'+ opcionRegalo + '</b>'
    
    //Total a pagar
    var total = document.getElementById ('suma-total')
    total.style.display='block'
    total.innerHTML = '$' + (resumenPaseDia + resumenPaseCompleto + resumenPaseDosDias + promoCamisas + resumenEtiquetas)

}

