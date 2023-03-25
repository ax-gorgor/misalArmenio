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
      
      
       
     };
     

  if(tiempoDeVideo > 87) {
    a1.textContent = ""
    
  
  };


  if(tiempoDeVideo > 88) {
    
     
     
    a1.innerText = "Hair mer vor herguins ies, surp ieghitsi anun Ko. \n\nPadre nuestro que estás en los cielos, santificado sea Tu nombre; " 
  

  };  


 if(tiempoDeVideo > 93) {
    
     
     
    a1.innerText = "Ieguestsé arkaiutiun Ko ieghitsin gamk Ko vorbes herguinës iev hergrí \n\nvenga a nosotros Tu reino; hágase tu voluntad así en la tierra como en el cielo, " 
  

  }; 
 
  if(tiempoDeVideo > 99) {
       
    a1.innerText = "zhats mer hanabazort dur mez aisor iev togh mez ëzbardis mer \n\nel pan nuestro de cada día danos hoy y perdonanos nuestras deudas " 
  
  } ;
 
  if(tiempoDeVideo > 107) {
    
    a1.innerText = "vorbes iev mek toghumk merots bardabanats \n\nasí como nosotros perdonamos a nuestros deudores" 
  
  }; 
 
  if(tiempoDeVideo > 111) {
     
    a1.innerText = "iev mi danir ëzmez i portsutiún il prguiá ëzmez i charé \n\ny no nos dejes caer en la tentación mas libranos del mal" 
  }; 
 
  if(tiempoDeVideo > 116) {
     
    a1.innerText = "zi ko e arkaiutiún iev zorutiún iev parrk havidiánës amén \n\nporque es Tuyo el reino y el poder y la gloria, por todos los siglos. Amén" 
  }; 
 
  if(tiempoDeVideo > 124) {
    a1.textContent = ""
    
  
  };
 

if(tiempoDeVideo > 128) {
    
    a1.innerText = "Jorhurt jorin anhas anësguizpn \n\nOh misterio profundo, inalcanzable, sin principio," 
  } ;
 
  if(tiempoDeVideo > 135) {
     
    a1.innerText = "vor zartaretser ëzverin bedutiunt\n\nque has adornado tu supremo" 
  }; 

  if(tiempoDeVideo > 142) {
     
    a1.innerText = "y harrakasd anmaduits lusuin kerabandz\n\nreino en la residencia de la luz inaccesible" 
  }; 
  
 if(tiempoDeVideo > 152) {
     
    a1.innerText = "  parrok ëztass hreghinats\n\ny con gloria esplendorosa \nlos coros de los ángeles" 
  };

 
  if(tiempoDeVideo > 160) {
     
    a1.innerText = "Andjarrahrash zoruteamp sdeghdzer \n\nCon indecible y milagrosa fuerza creaste a Adán," 
  }; 
 
 if(tiempoDeVideo > 167) {
    
    a1.innerText = " ztam badguer diragán,\n\nsemejante a tu señorial imagen," 
  }; 
  
  if(tiempoDeVideo > 172) {
    
    a1.innerText = "iev nazeli parrok zkesdavoretzer,\n\ny vestistele con suntuosa gloria" 
  }; 
 
  if(tiempoDeVideo > 181) {
    
    a1.innerText = "ir trajdn Atení deghí pergranatz.\n\nen el jardín de Edén, lugar de encantos." 
  }; 

 
  if(tiempoDeVideo > 192) {
     
    a1.innerText = "Takavor iergnavor zegueghetsí\n\nRey celestial, mantén inamovible  " 
  } ;
 
  if(tiempoDeVideo > 201.5) {
     
    a1.innerText = "Ko ansharyh bahiá\n\ntu iglesia y preserva" 
  }; 
 
  
  if(tiempoDeVideo > 208) {
     
    a1.innerText = "iev zergërbakus anvant kum bahiá\n\na los adoradores de " 
  }; 

 
  if(tiempoDeVideo > 218) {
     
    a1.innerText = "y jaghaghutián\n\ntu santo nombre en paz" 
  }; 
   
 
  if(tiempoDeVideo > 228.5) {
     a1.textContent = ""
  }; 

  
 if(tiempoDeVideo > 229) {
   
    a1.innerText = " iev vasn srpuhvó \n\ny por la intercesión" 
  }; 

   if(tiempoDeVideo > 230.5) {
    
    a1.innerText = "Asdvadzadznín parejosuteánn\n\nde la Santísima Madre de Dios" 
  }; 

   

  if(tiempoDeVideo > 233) {
    
    a1.innerText = "Der ëngal zaghacháns \n\nOh Señor acepta nuestras  " 
  }; 

  if(tiempoDeVideo > 234.5) {
   a1.innerText = " mer iev guetsó ëzmez \n\nsúplicas y presérvanos" 
  }; 
 
  if(tiempoDeVideo > 236.5) {
    a1.innerText = " Surp Zasdvadzadzínn iev zamenain \n\nQue la Santa Madre de Dios  " 
  }; 

  if(tiempoDeVideo > 238.5) {
    a1.innerText = "surps parejós \n\ny todos los santos intercedan" 

  }; 
 
 
  if(tiempoDeVideo > 240) {
    a1.innerText = "arastsuk arr Hair y herguinës \n\nante el Padre en el cielo, para que tenga" 
  }; 


  if(tiempoDeVideo > 242.5) {
       a1.innerText = "zi gametseal voghormestsí \n\nvoluntad de dar su misericordia" 

  }; 
 
  if(tiempoDeVideo > 244) {
     a1.innerText = "iev ktatseal guetsustsé zararadzës Iur  \n\ny preserve con compasión a sus criaturas." 
  }; 

  if(tiempoDeVideo > 247.5) {
     a1.innerText = "Amenagal Der Asdvadz mer \n\nOh Dios Todopoderoso" 

  } ;
 
  if(tiempoDeVideo > 249) {
    a1.innerText = "guetsó iev voghormeá \n\nSeñor nuestro presérvanos y ten misericordia" 
     
  }; 
 
  if(tiempoDeVideo > 251) {
    a1.innerText = " Der voghormeá, Der voghormeá, Der voghormeá, \n\nSeñor ten misericordia, Señor ten misericordia, Señor ten misericordia, " 
  }; 
 
  if(tiempoDeVideo > 255) {
    a1.innerText = "ëngal Der zaghacháns mer \n\nOh Señor acepta nuestras " 

  }; 

  if(tiempoDeVideo > 257) {
      a1.innerText = "parejosuteamp surp \n\nsúplicas por intercesión de la" 

  }; 
 
  if(tiempoDeVideo > 259) {
   a1.innerText = "Asdvadzadznín anarad dznoghí \n\nSanta Madre de Dios," 
  } ;
  

   
  if(tiempoDeVideo > 261.5) {
      a1.innerText = "Miadzní Vortvó ko \n\nMadre inmaculada de tu Unigénito Hijo"
 
  } ;
  

  
  if(tiempoDeVideo > 263.5) {
   a1.innerText = "iev aghachanok amenain srpots kots \n\ny mediante el ruego de todos los Santos" 
  }; 
 

  
  if(tiempoDeVideo > 268) {
   a1.innerText = "Lur mez Der iev voghormeá,\n\nOyenos, ¡Oh Señor! Y ten misericordia." }; 
  

  
  if(tiempoDeVideo > 270.5) {
 a1.innerText = "nereá, kaveá,\n\nPerdona y sé propicio" }; 
  

   
  if(tiempoDeVideo > 271.5) {
 a1.innerText = "iev togh zmeghs mer \n\ny remite nuestros pecados. Haznos" }; 
 

     
  if(tiempoDeVideo > 274) {
   a1.innerText = "Aryanavoreá kohuteamp parravorel \n\ndignos de glorificarte" 
  }; 
   

     
  if(tiempoDeVideo > 276) {
   a1.innerText = "ëzkez ënt Vortvó iev ënt Srpó \n\ncon gratitud con el Hijo y con el Espíritu Santo." 
  }; 
   

       
  if(tiempoDeVideo > 278.5) {
   a1.innerText = "Hokvuit aiyëm iev mishd  \n\nAhora y siempre  " 
  } ;
   

      
  if(tiempoDeVideo > 280) {
   a1.innerText = "iev havideáns havideníts Amén \n\ny por los siglos de los siglos. Amén." 
  } ;
   

     
  if(tiempoDeVideo > 285) {
   a1.innerText = "Meghá Asdudzó\n\nHe pecado ante Dios." 
  }; 
   

         
  if(tiempoDeVideo > 287) {
   a1.innerText = "Josdovanim arrachí Asdudzó\n\nConfieso delante de Dios  " 
  }; 
   

          
  if(tiempoDeVideo > 289) {
   a1.innerText = "  iev Srpuhvó Asdvadzadznín\n\ny de la Santa Madre de Dios" 
  }; 
   



         
  if(tiempoDeVideo > 291) {
   a1.innerText = "iev arrachí amenain srpots \n\ny delante de todos los santos " 
  }; 
   

           
  if(tiempoDeVideo > 293) {
   a1.innerText = "  iev arrachí tser\n\ny delante vuestro," 
  }; 
   

         
  if(tiempoDeVideo > 295) {
   a1.innerText = "hark iev ieghpark zamenain meghs\n\npadres y hermanos, todos mis pecados cometidos." 
  }; 
   

  

        
  if(tiempoDeVideo > 298) {
   a1.innerText = "zors kordzeal em Kanzí meghá jorhrtov\n\nPorque he pecado con el pensamiento," 
  }; 
  


          
  if(tiempoDeVideo > 302) {
   a1.innerText = "paniv iev kordzov iev amenain \n\nla palabra y la acción y" 
  }; 
   

            
  if(tiempoDeVideo > 304) {
   a1.innerText = " meghok zor kordzen martig\n\ncon todos los pecados que cometen los hombres." 
  } ;
  


         
  if(tiempoDeVideo > 305) {
   a1.innerText = "Meghá, meghá. Aghachém ëztsez \n\nHe pecado sí he pecado." 
  }; 
   
         
  if(tiempoDeVideo > 308) {
   a1.innerText = "jntretsék vasn im Hasdudzó ëztoghutiún \n\nLes ruego pidan por mí el perdón de Dios" 
  } ;
  

 
  if(tiempoDeVideo > 312) {
    a1.innerText = " Der voghormeá, Der voghormeá, Der voghormeá, \n\nSeñor ten misericordia, Señor ten misericordia, Señor ten misericordia, " 
  }; 
   
        
  if(tiempoDeVideo > 316) {
   a1.innerText = "Voghormestsí kez Asdvadz hzorn \n\nQue el Dios Todopoderoso tenga misericordia de ti" 
  }; 
  
        
  if(tiempoDeVideo > 319) {
   a1.innerText = "iev toghutiún shnorhestsé   \n\ny conceda perdón" 
  }; 
  
  if(tiempoDeVideo > 321) {
    a1.innerText = "  amenain hantsanats kots, \n\na todas tus transgresiones" 
   }; 
   

          
  if(tiempoDeVideo > 324) {
   a1.innerText = "antseluin iev aiymus \n\ndel pasado y del presente" 
  }; 
  

            
  if(tiempoDeVideo > 326) {
   a1.innerText = "iev harachigaien prguestsé   \n\ny te libre de futuras tentaciones" 
  }; 
  
  if(tiempoDeVideo > 328.5) {
    a1.innerText = "hasdadestsé hamenain kordzës   \n\ny te confirme en todas las" 
   };

       
  if(tiempoDeVideo > 331) {
   a1.innerText = "parís iev hankustsé   \n\nbuenas obras y te dé descanso  " 
  }; 

  if(tiempoDeVideo > 333) {
    a1.innerText = "  ëzkez y hantertseal guian@s Amén \n\n en paz en la vida eterna. Amén" 
   } 
  ;

    
  if(tiempoDeVideo > 335.5) {
   a1.innerText = "Azadestsé iev @ztsez martasern   \n\nQue el Dios misericordioso  " 
  }; 
   

     
  if(tiempoDeVideo > 338) {
   a1.innerText = " Asdvadz iev toghtsé \n\nos libre y perdone de todas vuestras" 
  }; 


  if(tiempoDeVideo > 340) {
    a1.innerText = "Zamenain hantsans tser,   \n\ntransgresiones que os de tiempo" 
   }; 

   if(tiempoDeVideo > 343) {
    a1.innerText = "datsé yamanag abashjareló iev \n\npara el arrepentimiento y para realizar" 
   };

   if(tiempoDeVideo > 345) {
    a1.innerText = "kordzeló ëzparís,    \n\nbuenas obras, que guíe  " 
   }; 

   if(tiempoDeVideo > 347) {
    a1.innerText = " ughestsé iev zarachaga guiáns tser \n\n  vuestra vida futura con la gracia" 
   }; 

   if(tiempoDeVideo > 349) {
    a1.innerText = "shnorhok Surp Hokvuin   \n\ndel Espíritu Santo.  " 
   }; 

   if(tiempoDeVideo > 351) {
    a1.innerText = " hzorën iev voghormadz@n \n\nPoderoso y misericordioso, " 
   }; 

   if(tiempoDeVideo > 354) {
    a1.innerText = "iev Nmá parrk havidians. Amén\n\ny a El, Gloria eterna. Amén." 
   }; 
/**/  


   if(tiempoDeVideo > 357) {
    a1.innerText = "Hishestsír iev ëzmez arrachi  \n\nRecuérdanos también en la  " 
   }; 

   if(tiempoDeVideo > 359) {
    a1.innerText = "  anmah karrinn Asdudzó\n\npresencia del immortal Cordero de Dios" 
   };

   if(tiempoDeVideo > 361) {
    a1.innerText = "Hisheal lichík arrachí  \n\nSerán recordados en la" 
   }; 

   if(tiempoDeVideo > 363) {
    a1.innerText = "  anmah karrinn Asdudzó\n\npresencia del immortal Cordero de Dios" 
   }; 
   
   if(tiempoDeVideo > 366.5) {
    a1.innerText = "Aghaghaguetsék ar  \n\nClamen al Señor,  " 
   }; 

   if(tiempoDeVideo > 367.5) {
    a1.innerText = "  Der amenain ierguir \n\ntodos en la tierra, sirvan al" 
   }; 

   if(tiempoDeVideo > 369) {
    a1.innerText = "dzarraietsék Dearrn urajuteamp\n\nSeñor con alegría"
   }; 

   /* */

   if(tiempoDeVideo > 371) {
    a1.innerText = "Mdék arrachí Norá  \n\nEntren en su presencia"
   }; 

   if(tiempoDeVideo > 373) {
    a1.innerText = " tsëndzuteamp dzaneruk zi Na e\n\ncon regocijo, conozcan, pues"
   }; 

   if(tiempoDeVideo > 376) {
    a1.innerText = "Der Asdvadz mer\n\nEs es nuestro Dios"
   }; 

   if(tiempoDeVideo > 378) {
    a1.innerText = "Na arar ëzmez iev voch mek eak.\n\nEs Él quien nos hizo y no nosotros mismos."
   }; 

   if(tiempoDeVideo > 380) {
    a1.innerText = "mek yoghovurt iev jashën, arodí Norá\n\nSomos su pueblo u ovejas de Su rebaño"
   }; 

   if(tiempoDeVideo > 383) {
    a1.innerText = "M@dék ënt trunës Norá josdovanuteamp\n\nEntren por sus puertas con confesión"
   }; 

   if(tiempoDeVideo > 385.5) {
    a1.innerText = "iev orhnuteamp y hargës Norá\n\ny con bendición a su casa"
   }; 

   if(tiempoDeVideo > 388) {
    a1.innerText = "Josdován iegherúk Dearrën, \n\nConfiesen al Señor, "
   }; 
   if(tiempoDeVideo > 390) {
    a1.innerText = " iev orhnetsék zanún Norá\n\n y bendigan Su nombre"
   };

   if(tiempoDeVideo > 392) {
    a1.innerText = "kaghtsër e Der, havidean e voghormutiún Norá  \n\nEs dulce el Señor, es eterna Su misericordia se extiende"
   }; 
 

   if(tiempoDeVideo > 395) {
    a1.innerText = "hazké minchev hazk e dyshmardutiún Norá\n\nde generación en generación y Su verdad. "
   }; 
  
  if(tiempoDeVideo > 398) {
    a1.innerText = "Parrk Hor iev Vortvó iev Hokvuín srpó\n\nGloria al Padre y al Hijo y al Espíritu Santo "
   }; 

 if(tiempoDeVideo > 401) {
    a1.innerText = "aiyëm iev mishd iev havideanës\n\nAhora y siempre"
   }; 

 if(tiempoDeVideo > 403) {
    a1.innerText = "iev havideníts Amén \n\ny por los siglos de los siglos. Amén"
   }; 

 if(tiempoDeVideo > 405) {
    a1.innerText = "Surp iegueghetsiávs \n\nMediante la Santa Iglesia  "
   }; 

 if(tiempoDeVideo > 407) {
    a1.innerText = "  aghachestsuk ëzDer\n\nsupliquemos al Señor "
   }; 

 if(tiempoDeVideo > 408.5) {
    a1.innerText = "zi sovav përguestsé  \n\nque por intermedio de ésta   "
   }; 

 if(tiempoDeVideo > 410) {
    a1.innerText = "  ëzmez y meghats\n\n  nos salve de nuestros pecados "
   }; 

 if(tiempoDeVideo > 411) {
    a1.innerText = "iev guetsustsé shnorhiv \n\ny nos guarde con la gracia "
   }; 

 if(tiempoDeVideo > 412) {
    a1.innerText = "voghormuteán iuró. \n\nde su misericordia."
   }; 

 if(tiempoDeVideo > 413.5) {
    a1.innerText = "Amenagal Der Asdvadz mer, \n\nTodopoderoso Señor Dios nuestro,  "
   }; 


if(tiempoDeVideo > 415) {
    a1.innerText = "  guetsó iev voghormeá.\n\n  presérvanos y ten misericordia. "
   }; 
   if(tiempoDeVideo > 418) {
   a1.innerText = " Der voghormeá, Der voghormeá, Der voghormeá, \n\nSeñor ten misericordia, Señor ten misericordia, Señor ten misericordia, " 
  };


 if(tiempoDeVideo > 422) {
    a1.innerText = "i mech Dadyarís \n\nEn este templo y frente "
   }; 

if(tiempoDeVideo > 423.5) {
    a1.innerText = "iev arrachí asdvadzëngal iev \n\na los sagrados y glorificados símbolos"
   }; 
 
  if(tiempoDeVideo > 425) {
    a1.innerText = "baidzarratseal surp nëshanatsës  \n\ny frente a este santo lugar, "
   };

 if(tiempoDeVideo > 427) {
    a1.innerText = " iev surp deghvuis jonarheal\n\nreverenciamos con humilde temor"
   };

 if(tiempoDeVideo > 430) {
    a1.innerText = "Ierguiughiv ierguirbakanemk ëzsurp  \n\nTu santo y maravilloso  "
   };

 if(tiempoDeVideo > 433) {
    a1.innerText = "  ëzhrashalí iev ëzhaghtogh\n\ny vencedor Señorío. Glorificamos y"
   };
 
  /**********************MINUTO 7.15 PAGINA 17************************** */
 
 if(tiempoDeVideo > 435) {
    a1.innerText = "ëzharutiunët Ko orhnemk   \n\nTe ofrecemos bendición   "
   }; 

    if(tiempoDeVideo > 437) {
    a1.innerText = "  iev parravoremk iev Kez madutsanemk \n\n  y gloria a Ti con el Padre "
   }; 

if(tiempoDeVideo > 442) {
    a1.innerText = "zorhnutiún iev ëzparrës ënt  \n\ny con el Espíritu   "
   }; 

if(tiempoDeVideo > 444) {
    a1.innerText = " Hor iev ënt Hokvuit Srpó, \n\n Santo, ahora y siempre, "
   }; 
 


  if(tiempoDeVideo > 447) {
    a1.innerText = "aiyëm iev mishd   \n\npor los siglos   "
   };

  if(tiempoDeVideo > 449) {
    a1.innerText = "  iev havideanës havideníts Amén  \n\n  de los siglos. Amén "
   };

 if(tiempoDeVideo > 453.5) {
    a1.innerText = "Mëdits arrachí seghanó Asdudzó,  \n\n Entraré al altar de Dios, "
   };

 if(tiempoDeVideo > 456.5) {
    a1.innerText = "  arr Asdvadz vor\n\n  del Dios que"
   };



 if(tiempoDeVideo > 458) {
    a1.innerText = "uraj arrné ëzmangutiún im  \n\nalegra mi juventud  "
   };

 if(tiempoDeVideo > 460) {
    a1.innerText = "Tad ará indz Asdvadz\n\nJúzgame ¡Oh Dios! "
   };

 if(tiempoDeVideo > 462) {
    a1.innerText = "iev iráv ará indz i datastaní imum.\n\ny justifícame en mi causa."
   };

 if(tiempoDeVideo > 464) {
    a1.innerText = "Hazké, vor voch e surp  \n\nLíbrame de la gente impía   "
   };

 if(tiempoDeVideo > 467) {
    a1.innerText = "i martó meghavoré  \n\ny del hombre pecaminoso"
   };

if(tiempoDeVideo > 468) {
    a1.innerText = "  nenkavoré prgueá zis.\n\n  y engañoso."
   };

/**********************MINUTO 7.50 PAGINA 18************************** */

 
 if(tiempoDeVideo > 470) {
    a1.innerText = "Tú, Asdvadz hëzorich im es, ëntér morratsár zis, \n\nTu eres el Dios de mi fortaleza, ¿por qué me has olvidado?"
   };



 if(tiempoDeVideo > 475) {
    a1.innerText = "ëntér? dërdum knam ies i neghuel tshnamvó imó \n\n¿Por qué yo aún ando triste y oprimido, mientras mis enemigos me oprimen  "
   };

 if(tiempoDeVideo > 478.5) {
    a1.innerText = "Arrakeá, Der ëzluis Ko iev ëzdyshmardutiún Ko, \n\nEnvía ¡Oh Señor! Tu luz y tu verdad "
   };

 if(tiempoDeVideo > 480.5) {
    a1.innerText = "zi arrachnortestsén indz,\n\npara que me guíen "
   };

 if(tiempoDeVideo > 484) {
    a1.innerText = "iev hantsén zis I learrën surp iev I hargës Ko. \n\ny me conduzcan al monte santo y a tu morada.  "
   };

 if(tiempoDeVideo > 488.5) {
    a1.innerText = " Mdits arrachí seghanó Asdudzó,  \n\ny Entraré al altar de Dios, "
   };

if(tiempoDeVideo > 491.5) {
    a1.innerText = "arr Asdvadz vor uraj arrné ëzmangutiún im.\n\ndel Dios que alegra mi juventud."
   };
 
 if(tiempoDeVideo > 496.5) {
    a1.innerText = "Josdován ieghuéts Kez orhnuteamp, Asdvadz, Asdvadz im\n\nMe confieso a Tí, con bendición, ¡Oh Dios, mi Dios!"
   };

if(tiempoDeVideo > 502) {
    a1.innerText = "Art ënter drdum es, antsën im, gam ënter jërrovés zis?\n\n¿Aún estás triste ¡Oh alma mía! o ¿aún me perturbas?"
   };
 /**********************MINUTO 8.26 PAGINA 19************************** */
 

 if(tiempoDeVideo > 507.5) {
    a1.innerText = "husá ar Asdvadz, josdovaneá Nmá, \n\nconfía en Dios, confiésate a Él,"
   };



 if(tiempoDeVideo > 510) {
    a1.innerText = "përguich ieresats imots Asdvadz e. \n\nÉl es el salvador delante de mí y mi Dios." 
   };

 if(tiempoDeVideo > 514) {
    a1.innerText = "Parrk Hor iev Vortvó iev Hokvuin Srpó.\n\nGloria al Padre y al Hijo y al Espíritu Santo."
   };

 if(tiempoDeVideo > 524) {
    a1.innerText = "Aiyëm iev mishd iev havideanës havidenits Amén.\n\nAhora y siempre por los siglos de los siglos. Amén."
   };

 if(tiempoDeVideo > 528) {
    a1.innerText = "iev ievës jaghaghuteán ëzDer aghachestsuk\n\ny otra vez en paz imploremos"
   };

 if(tiempoDeVideo > 532) {
    a1.innerText = "Orhnestsúk zamenagalën Asdvadz, \n\nal Señor. Bendígamos,"
   };

if(tiempoDeVideo > 535.5) {
    a1.innerText = "ëzHair Deárrën meró Hisusí Krisdosí, \n\nal Padre de nuestro Señor Jesucristo,"
   };
 
 if(tiempoDeVideo > 540) {
    a1.innerText = "vor aryaní arar ëzmez gal I deghvochës parrapanuteán \n\nque nos ha hecho dignos de estar en este lugar de glorificación  "
   };


if(tiempoDeVideo > 544.5) {
    a1.innerText = "iev ierkel zerkës hokevorës.\n\ny de cantar himnos espirituales."
   };

   /**********************MINUTO 9.07 PAGINA 20************************** */
 
 if(tiempoDeVideo > 547) {
    a1.innerText = "Amenagál Der Asdvadz mer guetsó iev voghormeá\n\nTodopoderoso Señor, Dios nuestro, presérvanos y ten misericordia"
   };



 if(tiempoDeVideo > 553.5) {
    a1.innerText = "I harguí sërputeán, iev I deghvochës parrapanuteán\n\n En este tabernáculo de santidad y lugar de alabanzas" 
   };

 if(tiempoDeVideo > 561) {
    a1.innerText = "hëreshdagats pënagaranís iev martgan kavaranís,\n\nmorada de los ángeles y purgatorio de los hombres,"
   };

 if(tiempoDeVideo > 568) {
    a1.innerText = "arrachí asdvadzëngal iev baidzarratseal surp nëshanatsës\n\ndelante de estos símbolos divinos y gloriosos"
   };

 if(tiempoDeVideo > 572) {
    a1.innerText = "iev surp seghanuís,\n\ny de Tu santo altar,"
   };

 if(tiempoDeVideo > 574.5) {
    a1.innerText = "jonarheal ierguiughiv ierguirbakanemk,\n\nte adoramos con humildad y temor, "
   };

if(tiempoDeVideo > 583.5) {
    a1.innerText = "ëzsurp ëzhrashalí iev ëzhaghtogh ëzharutiunët Ko\n\nTu santa y maravillosa y triunfante resurrección, "
   };
 
 if(tiempoDeVideo > 588) {
    a1.innerText = "orhnemk iev parravoremk\n\nbendecimos y glorificamos a Ti en compañía"
   };


if(tiempoDeVideo > 590) {
    a1.innerText = "iev Kez ënt iergnaín zorsën madutsanemk\n\nde las huestes celestiales ofrecemos la bendición y la gloria con"
   };



 
 
   /**********************MINUTO 9.54 PAGINA 21************************** */



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

 
