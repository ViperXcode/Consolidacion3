/// Este segmento es el mensaje de Tonka

var fecha=new Date()
var fechaHora=(fecha.getHours()); 
var fechaMinuto=(fecha.getMinutes());

if(fechaMinuto>=0 || fechaMinuto<10){
    fechaMinuto="0" + fechaMinuto
}



let form =document.getElementById("formulario")
  
    function enviarMensajeTonka(){

        let MsgTonka=document.getElementById('MTonka').value;

            console.log(MsgTonka)
            
                let MsgValido=true;
                
                
                if(MsgTonka=="") {

                    MsgValido=false; 
                           
                }

            return MsgValido;
                           
    }

form.addEventListener('submit', function(event){
    
        event.preventDefault();

        //console.log(enviarMensajeTonka());

        if(enviarMensajeTonka()){
            
            let MsgTonka=document.getElementById('MTonka').value; //definicion de mensaje Tonka arrojado arriba

            
            // document.querySelector('#EsperandoMensaje').innerHTML=MTonka.value;

//+= acumula datos

            document.getElementById("Padre").innerHTML+= ` 
            
                        <div class="Mensaje2">

                            <div class="TonkaM">

                                <img class="imagensize rounded-circle" src="assets/img/Tonka.png"  alt="">
                                <p class="Nombre">Yo, la Tonka</p>

                            </div>

                            <div class="PreMensajeT">

                                <p class="MensajeT">${MsgTonka}</p>

                            </div>

                            <div class="hora">

                                <i class="check fa-solid fa-check-double"></i>

                                <p>${fechaHora}:${fechaMinuto}</p>
                                
                            </div>

                        </div>
         
            `
            formulario.reset();

            sinjQuery()

        setTimeout(() => {

//+= acumula datos

            document.getElementById("Padre").innerHTML += `
    
                <div class="Mensaje1">

                    <div class="ParivedM">

                        <img class="imagensize rounded-circle" src="assets/img/Parived.png"  alt="">
                        <p class="Nombre">Parived</p>

                    </div>

                        <div class="PreMensajeP">

                            <p class="MensajeP">${autorespuesta[randomIntFromInterval(0,4)]}</p> 

                        </div>

                        <div class="hora">

                            <p>${fechaHora}:${fechaMinuto}</p>
                            <i class="check fa-solid fa-check-double"></i>

                        </div>

                </div>
        
            `
            sinjQuery() //scroll antes de la espera para que baje

        }, 1000*randomIntFromInterval(1,4)); //1000 milisegundos * numero de random del 1 a 4 el tiempo cambia 
       
   
            //document.querySelector('.EsperandoInserto').style.display='block';
        }

        
        else{

            alert('no hay na');
        }
    }

)

function randomIntFromInterval(min, max) { 
        
    return Math.floor(Math.random() * (max - min + 1) + min)
    
}

console.log(form)



// Este segmento es para detener la animación de la caja de aviso



function Pararlo() {
                            
    document.getElementById("Alertka").classList.remove('Active'); // remover la clase

    }

// Este segmento son las respuestas de Parived


var autorespuesta=["Va The police a la casa!!","LA PDI!!!! ", "Guarda el pollo que está en el horno ", "Por favor, guarda los calzoncillos que deje secando", "Dale comida a mis hamsters"];

    console.log(autorespuesta);
    console.log(autorespuesta[0]);
    console.log(autorespuesta[1]);
    console.log(autorespuesta[2]);
    console.log(autorespuesta[3]);
    console.log(autorespuesta[4]);


    var valorrandom =Math.floor(Math.random()*(autorespuesta.length));
    console.log(valorrandom);
   
    var chatBox;

    chatBox = document.querySelector('#Padre > .container'); 
    
    // cuando exista un nuevo mensaje


    //form.addEventListener('submit', function(event){

    function sinjQuery()
{
    //Obtengo el div
    var e = document.querySelector('#Padre');

        //Le añado otro mensaje
        e.innerHTML += '<div class="chatMessage"></div>';

        //Llevo el scroll al fondo
    var objDiv = document.getElementById("Padre");

    objDiv.scrollTop = objDiv.scrollHeight;
}

    //}

//)
//array random


