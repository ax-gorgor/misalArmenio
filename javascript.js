var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '100%',
     width: '50%',
     videoId: 'I_sBYnCJW9s',
     
     events: {
       'onStateChange': onPlayerStateChange
     }
   });
 }

  


 // De aca para arriba, todo el codigo esta igual, no cambie nada.

 // Creamos una variable tiempoDeVideo (que empieza con valor 0) en la que vamos
 // a ir grabando el tiempo (segundos) en el que esta el video. Cuando pase 1 segundo,
 // tiempoDeVideo va a valer 1, cuando pasen 6.5 segundo de video, tiempoDeVideo va a valer
 // 6.5 y asi.
 var tiempoDeVideo = 0;

 var a1 = document.getElementById('a1');
 var a2 = document.getElementById('a2');
 var a3 = document.getElementById('a3');
 var a4 = document.getElementById('a4');
 var a5 = document.getElementById('a5');
 var a6 = document.getElementById('a6');
 var a7 = document.getElementById('a7');
 var a8 = document.getElementById('a8');
 var a9 = document.getElementById('a9');
 var a10 = document.getElementById('a10');
 var a11 = document.getElementById('a11');
 var a12 = document.getElementById('a12');
 var a13 = document.getElementById('a13');
 var a14 = document.getElementById('a14');
 var a15 = document.getElementById('a15');
 var a16 = document.getElementById('a16');


  

 // Creamos una funcion que se va a fijar cuanto tiempo transcurrio (mirando el valor de
 // tiempoDeVideo) y si pasaron mas de 5 segundos, va a pintar "intro" de rojo. Si pasaron
 // mas de 8 segundos, va a pintar "introd" (la segunda linea) de rojo y pintar "intro"
 // (la primera linea) de negro otra vez. Y si pasaron mas de 9 segundos, va a pintar la
 // tercera linea de rojo y la segunda de negro otra vez.
 function colorText() {


  var tiempoDeVideo = player.getCurrentTime();

 

    if(tiempoDeVideo > 83) {
      
      a1.style.color = 'black';
      a1.style.fontFamily = 'Poppins';
      a1.style.fontSize = '20px';
      a1.innerText = "Orhneal der mer Hisús Krisdós amén\n\nBendito sea nuestro Señor Jesucristo. Amén"
      
      
       
     }
     

  if(tiempoDeVideo > 87) {
    a1.textContent = ""
    
  
  }


  if(tiempoDeVideo > 88) {
    
     
    a1.style.color = 'black';
    a1.style.fontFamily = 'Poppins';
    a1.style.fontSize = '20px';
    a1.innerText = "Hair mer vor herguins ies, \nsurp ieghitsi anun Ko.\n\nPadre nuestro que estás en \nlos cielos, santificado sea Tu nombre; " 
  

  }  


 if(tiempoDeVideo > 93) {
    
     
    a1.style.color = 'black';
    a1.style.fontFamily = 'Poppins';
    a1.style.fontSize = '20px';
    a1.innerText = "Ieguestsé arkaiutiun Ko ieghitsin \ngamk Ko vorbes herguinës iev hergrí\n\nvenga a nosotros Tu reino; hágase tu voluntad \nasí en la tierra como en el cielo, " 
  

  } 
 
  if(tiempoDeVideo > 99) {
      a1.style.color = 'black';
    a1.style.fontFamily = 'Poppins';
    a1.style.fontSize = '20px';
    a1.innerText = "zhats mer hanabazort dur mez aisor \niev togh mez ëzbardis mer\n\nel pan nuestro de cada día danos \nhoy y perdonanos nuestras deudas " 
  
  } 
 
  if(tiempoDeVideo > 107) {
     a1.style.color = 'black';
    a1.style.fontFamily = 'Poppins';
    a1.style.fontSize = '20px';
    a1.innerText = "vorbes iev mek toghumk \nmerots bardabanats\n\nasí como nosotros perdonamos \na nuestros deudores" 
  
  } 
 
  if(tiempoDeVideo > 111) {
     a1.style.color = 'black';
    a1.style.fontFamily = 'Poppins';
    a1.style.fontSize = '20px';
    a1.innerText = "iev mi danir ëzmez i portsutiún \nail prguiá ëzmez i charé\n\ny no nos dejes caer \nen la tentación mas libranos del mal" 
  } 
 
  if(tiempoDeVideo > 116) {
    a1.style.color = 'black';
    a1.style.fontFamily = 'Poppins';
    a1.style.fontSize = '20px';
    a1.innerText = "zi ko e arkaiutiún iev \nzorutiún iev parrk havidiánës amén\n\nporque es Tuyo el reino y el poder \ny la gloria, por todos los siglos. Amén" 
  } 
 
  if(tiempoDeVideo > 124) {
    a1.textContent = ""
    
  
  }
 

if(tiempoDeVideo > 128) {
    a1.style.color = 'black';
    a1.style.fontFamily = 'Poppins';
    a1.style.fontSize = '20px';
    a1.innerText = "Jorhurt jorin anhas anësguizpn\n\nOh misterio profundo, inalcanzable, sin principio," 
  } 
 
  if(tiempoDeVideo > 135) {
    a1.style.color = 'black';
    a1.style.fontFamily = 'Poppins';
    a1.style.fontSize = '20px';
    a1.innerText = "vor zartaretser ëzverin bedutiunt\n\nque has adornado tu supremo" 
  } 

  if(tiempoDeVideo > 142) {
    a1.style.color = 'black';
    a1.style.fontFamily = 'Poppins';
    a1.style.fontSize = '20px';
    a1.innerText = "y harrakasd anmaduits lusuin kerabandz \nparrok ëztass hreghinats\n\nreino en la residencia de la luz \ninaccesible y con gloria esplendorosa \nlos coros de los ángeles" 
  } 
 
  if(tiempoDeVideo > 160) {
   a1.textContent = ""
  } 
 
 
  if(tiempoDeVideo > 192) {
    a1.style.color = 'black';
    a1.style.fontFamily = 'Poppins';
    a1.style.fontSize = '20px';
    a1.innerText = "Takavor iergnavor zegueghetsí \nKo ansharyh bahiá\n\nRey celestial, mantén inamovible tu iglesia \ny preserva" 
  } 

  
  if(tiempoDeVideo > 208) {
    a1.style.color = 'black';
    a1.style.fontFamily = 'Poppins';
    a1.style.fontSize = '20px';
    a1.innerText = "iev zergërbakus anvant kum bahiá \ny jaghaghutián\n\na los adoradores de tu \nsanto nombre en paz" 
  } 
 
  if(tiempoDeVideo > 228.5) {
     a1.textContent = ""
  } 

 /*  

  if(tiempoDeVideo > 96) {
    a7.style.color = 'black';
    a8.style.color = '#005caa';
  } 

  //

  if(tiempoDeVideo > 102) {
    a8.style.color = 'black';
    a9.style.color = '#f37736';
  } 

  if(tiempoDeVideo > 107) {
    a9.style.color = 'black';
    a10.style.color = '#c51130';
  } 

  if(tiempoDeVideo > 112) {
    a10.style.color = 'black';
    a9.style.color = '#005caa';
  } 

  if(tiempoDeVideo > 117) {
    a9.style.color = 'black';
    a10.style.color = '#f37736';
  } 

 
  if(tiempoDeVideo > 122) {
    a10.style.color = 'black';
    a11.style.color = '#005caa'; //azul
  } 
  if(tiempoDeVideo > 127) {
    a11.style.color = 'black';
    a12.style.color = '#f37736'; //naranja
  } 

  if(tiempoDeVideo > 132) {
    a12.style.color = 'black';
    a11.style.color = '#c51130';
  } 

  if(tiempoDeVideo > 137) {
    a11.style.color = 'black';
    a12.style.color = '#c51130';
  } 

  if(tiempoDeVideo > 146) {
    a12.style.color = 'black';
     
  } 

  if(tiempoDeVideo > 21) {
    a13.style.color = 'black';
    a14.style.color = 'grey';
    a15.style.color = 'grey';
  } 

  if(tiempoDeVideo > 61) {
    a13.style.color = 'grey';
    a14.style.color = 'black';
    a15.style.color = 'grey';
  } 

  if(tiempoDeVideo > 101) {
    a13.style.color = 'grey';
    a14.style.color = 'grey';
    a15.style.color = 'black';
  } 

  if(tiempoDeVideo > 142) {
    a13.style.color = 'black';
    a14.style.color = 'black';
    a15.style.color = 'black';
  } 
  */

 }

 // Esta funcion se ejecuta cada vez que el video "cambia de estado", es decir, cada
 // vez que el usuario hace play o pause.
 function onPlayerStateChange(event) {

   if (event.data == YT.PlayerState.PLAYING) {
     // Entramos a este "if", cuando el usuario hace play.

    // Cuando el usuario hacie click en "play", queremos decirle a nuestro codigo
    // que se fije cada una cierta cantidad de tiempo muy chiquita (en este caso
    // 100 milisegundos) cual es el valor de tiempo transcurrido del video, y que se
    // lo asigne a la variable "tiempoDeVideo". 
    // Para eso, usamos la funcion de JavaScript "setInterval", que te permite decirle
    // a Javascript: "corré todo esto que te digo, cada una cantidad X de milisegundos"
    //Es decir, que cada 100 milisegundos,
    // el codigo "tiempoDeVideo = player.getCurrentTime();" se va a correr automaticamente
    // y asi nosotros vamos a poder tener la variable tiempoDeVideo actualizada.
    // 
    setInterval(() => {
      tiempoDeVideo = player.getCurrentTime();
    }, 100);
   }
 }

// Importante: con solo escribir la funcion colorText, como en la linea 41, no quiere decir
// que esa funcion se va a ejecutar sola. De la misma manera que hicimos con el video,
// hay que decirle a Javascript que ejecute esa funcion cada un tiempo muy pequeño (100 milisegundos
// tambien alcanzan aca), asi a medida que "tiempoDeVideo" se va actualizando, el codigo tambien se fija
// (gracias a la funcion colorText) cuanto tiempo paso, y si tiene que pintar de rojo algunas de las frases
// (y volver a pintarlas de negro mas tarde).
setInterval(() => {
  colorText()
}, 100);

 
