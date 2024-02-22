
//FUNCION DE ENCRIPTADO
let fraseEncriptada = document.getElementById('resultado');
let fraseDesencriptada = document.getElementById('resultado');

let alerta = document.getElementById('alerta');
let mensajeInformativoResultado=document.getElementById('mensaje-resultado');


//FUNCION ENCRIPTAR

function encriptar(){

  let texto = document.getElementById("ingreso-texto").value;
  alerta.style.color= 'black';

 //comprobar mayusculas, acentos y campo vacío
 
 if(texto ==''){
    mensajeInformativo('Ingrese un mensaje');
    return;
 }
  if( /[A-Záéíóúü]/.test(texto)){ 

    alerta.style.color = 'red';
    mensajeInformativo('Corregir mensaje a encriptar');

    return;
  } else { 

      let fraseEn=[];
      
      for(let i=0; i< texto.length; i++){
        
        if(texto[i]=="a"){
          fraseEn[i] = "ai";
          } else if(texto[i]=="e"){
          fraseEn[i] = "enter";
          } else if(texto[i]=="i"){
          fraseEn[i] = "imes";
          } else if(texto[i]=="o"){
          fraseEn[i] = "ober";
          } else if(texto[i]=="u"){
          fraseEn[i] = "ufat";
          } else {
          fraseEn[i]=texto[i];
        };
      };
      scrollResultado();
      mensajeInformativo('El mensaje fue encriptado');
      return fraseEncriptada.value=fraseEn.join("");
    };
};


//FUNCION DESENCRIPTAR

function desencriptar(){

  let texto = document.getElementById("ingreso-texto").value;
  alerta.style.color= 'black';

  if(texto ==''){
    mensajeInformativo('Ingrese un mensaje');
    return;
  }

  if( /[A-Záéíóúü]/.test(texto)){ 

    alerta.style.color = 'red';
    mensajeInformativo('Corregir mensaje a desencriptar');

    return;
  } else { 

    texto=texto.replace(/ai|enter|imes|ober|ufat/g, (expresion)=>{
        
        switch(expresion){
            case 'ai':
                return 'a';
            case 'enter':
                return 'e';
            case 'imes':
                return 'i';
            case 'ober':
                return 'o';
            case 'ufat':
                return 'u'; 
            default:
                return expresion;    
        }
        
    })
    scrollResultado();
    mensajeInformativo( 'El mensaje fue desencriptado');
    return fraseDesencriptada.value = texto;
  };
}

//Funcion copia resultado al portapapeles
function copiar (){

  let textoCopiado= document.getElementById('resultado');

  if(textoCopiado.value != ''){
    navigator.clipboard.writeText(textoCopiado.value);
    document.getElementById('resultado').value="";
    document.getElementById('ingreso-texto').value="";
    mensajeInformativo( 'Mensaje copiado');
  } else {
    mensajeInformativo( 'No se encontro mensaje para copiar')
  }
}
//Funcion muestra mensaje informativo en el cuadro de resultado
function mensajeInformativo(texto){

  mensajeInformativoResultado.innerHTML = texto;
  setTimeout(cambiarTexto, 2000, mensajeInformativoResultado)

  return;
};


// Función para cambiar texto
function cambiarTexto(elemento) {
   elemento.innerHTML = 'Resultado';
}

//Ejecutar vinculo
function scrollResultado() {
  var elementoDestino = document.getElementById('resultado');
  elementoDestino.scrollIntoView();
}
