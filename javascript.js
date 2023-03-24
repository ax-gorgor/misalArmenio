var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '100%',
     width: '100%',
     videoId: 'wYZbG-1LFuA',
     
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
      a1.style.fontSize = '24px';
      a1.style.fontWeight = '450';
      a1.innerText = "Orhneal der mer Hisús Krisdós amén\n\n\nBendito sea nuestro Señor Jesucristo. Amén"
      
      
       
     }
     

  if(tiempoDeVideo > 87) {
    a1.textContent = ""
    
  
  }


  if(tiempoDeVideo > 88) {
    
     
    a1.style.color = 'black';
    a1.style.fontFamily = 'Poppins';
    a1.style.fontSize = '24px';
    a1.innerText = "Hair mer vor herguins ies, surp ieghitsi anun Ko. \n\nPadre nuestro que estás en los cielos, santificado sea Tu nombre; " 
  

  }  


 if(tiempoDeVideo > 93) {
    
     
    a1.style.color = 'black';
    a1.style.fontFamily = 'Poppins';
    a1.style.fontSize = '24px';
    a1.innerText = "Ieguestsé arkaiutiun Ko ieghitsin gamk Ko vorbes herguinës iev hergrí \n\nvenga a nosotros Tu reino; hágase tu voluntad así en la tierra como en el cielo, " 
  

  } 
 
  if(tiempoDeVideo > 99) {
      a1.style.color = 'black';
    a1.style.fontFamily = 'Poppins';
    a1.style.fontSize = '24px';
    a1.innerText = "zhats mer hanabazort dur mez aisor iev togh mez ëzbardis mer \n\nel pan nuestro de cada día danos hoy y perdonanos nuestras deudas " 
  
  } 
 
  if(tiempoDeVideo > 107) {
     a1.style.color = 'black';
    a1.style.fontFamily = 'Poppins';
    a1.style.fontSize = '24px';
    a1.innerText = "vorbes iev mek toghumk merots bardabanats \n\nasí como nosotros perdonamos a nuestros deudores" 
  
  } 
 
  if(tiempoDeVideo > 111) {
     a1.style.color = 'black';
    a1.style.fontFamily = 'Poppins';
    a1.style.fontSize = '24px';
    a1.innerText = "iev mi danir ëzmez i portsutiún il prguiá ëzmez i charé \n\ny no nos dejes caer en la tentación mas libranos del mal" 
  } 
 
  if(tiempoDeVideo > 116) {
    a1.style.color = 'black';
    a1.style.fontFamily = 'Poppins';
    a1.style.fontSize = '24px';
    a1.innerText = "zi ko e arkaiutiún iev zorutiún iev parrk havidiánës amén \n\nporque es Tuyo el reino y el poder y la gloria, por todos los siglos. Amén" 
  } 
 
  if(tiempoDeVideo > 124) {
    a1.textContent = ""
    
  
  }
 

if(tiempoDeVideo > 128) {
    a1.style.color = 'black';
    a1.style.fontFamily = 'Poppins';
    a1.style.fontSize = '24px';
    a1.innerText = "Jorhurt jorin anhas anësguizpn \n\nOh misterio profundo, inalcanzable, sin principio," 
  } 
 
  if(tiempoDeVideo > 135) {
    a1.style.color = 'black';
    a1.style.fontFamily = 'Poppins';
    a1.style.fontSize = '24px';
    a1.innerText = "vor zartaretser ëzverin bedutiunt\n\nque has adornado tu supremo" 
  } 

  if(tiempoDeVideo > 142) {
    a1.style.color = 'black';
    a1.style.fontFamily = 'Poppins';
    a1.style.fontSize = '24px';
    a1.innerText = "y harrakasd anmaduits lusuin kerabandz\n\nreino en la residencia de la luz inaccesible" 
  } 
  
 if(tiempoDeVideo > 152) {
    a1.style.color = 'black';
    a1.style.fontFamily = 'Poppins';
    a1.style.fontSize = '24px';
    a1.innerText = "  parrok ëztass hreghinats\n\ny con gloria esplendorosa \nlos coros de los ángeles" 
  }

 
  if(tiempoDeVideo > 160) {
    a1.style.color = 'black';
    a1.style.fontFamily = 'Poppins';
    a1.style.fontSize = '24px';
    a1.innerText = "Andjarrahrash zoruteamp sdeghdzer \n\nCon indecible y milagrosa fuerza creaste a Adán," 
  } 
 
 if(tiempoDeVideo > 167) {
    a1.style.color = 'black';
    a1.style.fontFamily = 'Poppins';
    a1.style.fontSize = '24px';
    a1.innerText = " ztam badguer diragán,\n\nsemejante a tu señorial imagen," 
  } 
  
  if(tiempoDeVideo > 172) {
    a1.style.color = 'black';
    a1.style.fontFamily = 'Poppins';
    a1.style.fontSize = '24px';
    a1.innerText = "iev nazeli parrok zkesdavoretzer,\n\ny vestistele con suntuosa gloria" 
  } 
 
  if(tiempoDeVideo > 181) {
    a1.style.color = 'black';
    a1.style.fontFamily = 'Poppins';
    a1.style.fontSize = '24px';
    a1.innerText = "ir trajdn Atení deghí pergranatz.\n\nen el jardín de Edén, lugar de encantos." 
  } 

 
  if(tiempoDeVideo > 192) {
    a1.style.color = 'black';
    a1.style.fontFamily = 'Poppins';
    a1.style.fontSize = '24px';
    a1.innerText = "Takavor iergnavor zegueghetsí\n\nRey celestial, mantén inamovible  " 
  } 
 
  if(tiempoDeVideo > 201.5) {
    a1.style.color = 'black';
    a1.style.fontFamily = 'Poppins';
    a1.style.fontSize = '24px';
    a1.innerText = "Ko ansharyh bahiá\n\ntu iglesia y preserva" 
  } 
 
  
  if(tiempoDeVideo > 208) {
    a1.style.color = 'black';
    a1.style.fontFamily = 'Poppins';
    a1.style.fontSize = '24px';
    a1.innerText = "iev zergërbakus anvant kum bahiá\n\na los adoradores de " 
  } 

 
  if(tiempoDeVideo > 218) {
    a1.style.color = 'black';
    a1.style.fontFamily = 'Poppins';
    a1.style.fontSize = '24px';
    a1.innerText = "y jaghaghutián\n\ntu santo nombre en paz" 
  } 
   
 
  if(tiempoDeVideo > 228.5) {
     a1.textContent = ""
  } 

  
 if(tiempoDeVideo > 229) {
   
    a1.innerText = " iev vasn srpuhvó \n\ny por la intercesión" 
  } 

   if(tiempoDeVideo > 230.5) {
    
    a1.innerText = "Asdvadzadznín parejosuteánn\n\nde la Santísima Madre de Dios" 
  } 

   

  if(tiempoDeVideo > 233) {
    
    a1.innerText = "Der ëngal zaghacháns \n\nOh Señor acepta nuestras  " 
  } 

  if(tiempoDeVideo > 234.5) {
   a1.innerText = " mer iev guetsó ëzmez \n\nsúplicas y presérvanos" 
  } 
 
  if(tiempoDeVideo > 236.5) {
    a1.innerText = " Surp Zasdvadzadzínn iev zamenain \n\nQue la Santa Madre de Dios  " 
  } 

  if(tiempoDeVideo > 238.5) {
    a1.innerText = "surps parejós \n\ny todos los santos intercedan" 

  } 
 
 
  if(tiempoDeVideo > 240) {
    a1.innerText = "arastsuk arr Hair y herguinës \n\nante el Padre en el cielo, para que tenga" 
  } 


  if(tiempoDeVideo > 242.5) {
       a1.innerText = "zi gametseal voghormestsí \n\nvoluntad de dar su misericordia" 

  } 
 
  if(tiempoDeVideo > 244) {
     a1.innerText = "iev ktatseal guetsustsé zararadzës Iur  \n\ny preserve con compasión a sus criaturas." 
  } 

  if(tiempoDeVideo > 247.5) {
     a1.innerText = "Amenagal Der Asdvadz mer \n\nOh Dios Todopoderoso" 

  } 
 
  if(tiempoDeVideo > 249) {
    a1.innerText = "guetsó iev voghormeá \n\nSeñor nuestro presérvanos y ten misericordia" 
     
  } 
 
  if(tiempoDeVideo > 251) {
    a1.innerText = " Der voghormeá, Der voghormeá, Der voghormeá, \n\nSeñor ten misericordia, Señor ten misericordia, Señor ten misericordia, " 
  } 
 
  if(tiempoDeVideo > 255) {
    a1.innerText = "ëngal Der zaghacháns mer \n\nOh Señor acepta nuestras " 

  } 

  if(tiempoDeVideo > 257) {
      a1.innerText = "parejosuteamp surp \n\nsúplicas por intercesión de la" 

  } 
 
  if(tiempoDeVideo > 259) {
   a1.innerText = "Asdvadzadznín anarad dznoghí \n\nSanta Madre de Dios," 
  } 
  

   
  if(tiempoDeVideo > 261.5) {
      a1.innerText = "Miadzní Vortvó ko \n\nMadre inmaculada de tu Unigénito Hijo"
 
  } 
  

  
  if(tiempoDeVideo > 263.5) {
   a1.innerText = "iev aghachanok amenain srpots kots \n\ny mediante el ruego de todos los Santos" 
  } 
 

  
  if(tiempoDeVideo > 268) {
   a1.innerText = "Lur mez Der iev voghormeá,\n\nOyenos, ¡Oh Señor! Y ten misericordia." } 
  

  
  if(tiempoDeVideo > 270.5) {
 a1.innerText = "nereá, kaveá,\n\nPerdona y sé propicio" } 
  

   
  if(tiempoDeVideo > 271.5) {
 a1.innerText = "iev togh zmeghs mer \n\ny remite nuestros pecados. Haznos" } 
 

     
  if(tiempoDeVideo > 274) {
   a1.innerText = "Aryanavoreá kohuteamp parravorel \n\ndignos de glorificarte" 
  } 
   

     
  if(tiempoDeVideo > 276) {
   a1.innerText = "ëzkez ënt Vortvó iev ënt Srpó \n\ncon gratitud con el Hijo y con el Espíritu Santo." 
  } 
   

       
  if(tiempoDeVideo > 278.5) {
   a1.innerText = "Hokvuit aiyëm iev mishd  \n\nAhora y siempre  " 
  } 
   

      
  if(tiempoDeVideo > 280) {
   a1.innerText = "iev havideáns havideníts Amén \n\ny por los siglos de los siglos. Amén." 
  } 
   

     
  if(tiempoDeVideo > 285) {
   a1.innerText = "Meghá Asdudzó\n\nHe pecado ante Dios." 
  } 
   

         
  if(tiempoDeVideo > 287) {
   a1.innerText = "Josdovanim arrachí Asdudzó\n\nConfieso delante de Dios  " 
  } 
   

          
  if(tiempoDeVideo > 289) {
   a1.innerText = "  iev Srpuhvó Asdvadzadznín\n\ny de la Santa Madre de Dios" 
  } 
   



         
  if(tiempoDeVideo > 291) {
   a1.innerText = "iev arrachí amenain srpots \n\ny delante de todos los santos " 
  } 
   

           
  if(tiempoDeVideo > 293) {
   a1.innerText = "  iev arrachí tser\n\ny delante vuestro," 
  } 
   

         
  if(tiempoDeVideo > 295) {
   a1.innerText = "hark iev ieghpark zamenain meghs\n\npadres y hermanos, todos mis pecados cometidos." 
  } 
   

  

        
  if(tiempoDeVideo > 298) {
   a1.innerText = "zors kordzeal em Kanzí meghá jorhrtov\n\nPorque he pecado con el pensamiento," 
  } 
  


          
  if(tiempoDeVideo > 302) {
   a1.innerText = "paniv iev kordzov iev amenain \n\nla palabra y la acción y" 
  } 
   

            
  if(tiempoDeVideo > 304) {
   a1.innerText = " meghok zor kordzen martig\n\ncon todos los pecados que cometen los hombres." 
  } 
  


         
  if(tiempoDeVideo > 305) {
   a1.innerText = "Meghá, meghá. Aghachém ëztsez \n\nHe pecado sí he pecado." 
  } 
   
         
  if(tiempoDeVideo > 308) {
   a1.innerText = "jntretsék vasn im Hasdudzó ëztoghutiún \n\nLes ruego pidan por mí el perdón de Dios" 
  } 
  

  /*---------
  -----------
  -----------
  -----------*/
        /*
  if(tiempoDeVideo > 259) {
   a1.innerText = "mer parejosuteamp surp \n\nsúplicas por intercesión de la" 
  } 
  */
        /*
  if(tiempoDeVideo > 259) {
   a1.innerText = "mer parejosuteamp surp \n\nsúplicas por intercesión de la" 
  } 
  */
        /*
  if(tiempoDeVideo > 259) {
   a1.innerText = "mer parejosuteamp surp \n\nsúplicas por intercesión de la" 
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

 
