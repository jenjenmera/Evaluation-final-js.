// // Exercice 1 

// // //a

// // var jeunes= 0;
// // var adultes= 0;
// // var vieux=0;
// // var personne; 



// // //b
// // do {
// //     personne=parseInt(window.prompt("entrez votre age"));



// // if

// //     (personne<20){
// //         jeunes++;
// //         console.log(jeunes);
// //     }

// // else if

// //     ((personne>=20) && ( personne<=40)){ 
// //     adultes++;
// //     console.log(adultes);
// //     }

 
// // if
// //     ((personne>=40) && (personne<=99)){ 
// //     vieux++;
// //     console.log(vieux);
// //      }

// // } 
     
// // while (personne <100);



// // window.alert("Il y a " + "" + jeunes + "" + " jeunes\n " + "Il y a " + "" + adultes + "" + " adultes\n " + " Il y a " + "" + vieux + "" +" vieux\n " + " dont "+ " 1 " + "" + " centenaire ");

// /*Exercice 2*/

// var nb = 0;
// nb = parseInt(window.prompt("Veuillez saisir le chiffre à multiplier"));

// function tabledeMultiplication(nb){
     

//  for (let i = 1 ; i < 13;i++){
//     document.write(`${nb}x${i}=${+nb*i}<br>`);
//  }
// }
// tabledeMultiplication(nb);

//Exercice 3 : Recherche d'un prénom//

// var tab =["Audrey", "Auréliens", "Flavien", "Jérémy","Laurent", "Melik", "Nouara","Salem","Samuel","Stéphane"];


//     var saisi = window.prompt("Veuillez choisir un prénom Audrey, Aurelien, Flavien,Jérémy,Laurent,Melik,Nouara,Salem,Samuel,Stéphane.");
//     var rang = tab.indexOf (saisi);


//  if (rang>=0)    

//  {
//       var sup = tab.splice(rang,1);
//       console.log(rang+sup)

//      var nb = tab.push("");

//       console.log(tab);


// } 
//  else {
//         alert("Mauvais prénom")
//  } 

//Exercice 4: Total d'une commande




PU =parseInt(window.prompt("prix unitaire du produit:"));
QTECOM = parseInt(window.prompt("Quantité du produit:"));
var REM=0;
var PORT=0;
var TOT = PU*QTECOM;

if (TOT<100){
    PORT=6;
    PAP = TOT+PORT;
    alert("Les frais de port sont de :"+PORT+ "€\n"+"Le prix total a payé est de :"+PAP+"€\n");

}

else if (TOT>=100 && TOT<=200){
    prixrem = (5*TOT)/100;
    PORT=6;
    PAP=TOT-prixrem+PORT;
    alert("La remise est de "+prixrem+"€\n"+"Les frais de port sont de :"+PORT+ "€\n"+"Le prix total a payé est de :"+PAP+"€\n");

}




else if (TOT>200 && TOT<500){
    REM = (10*TOT)/100;
    prixrem=TOT-REM;
    if(prixrem<300){
        PORT=6;
        PAP=prixrem+PORT;
    }
    else if (prixrem>300 && prixrem<500){
        PORT=prixrem*0.02;
        PAP=prixrem+PORT;

    }
    alert("La remise est de "+prixrem+"€\n"+"Les frais de port sont de :"+PORT+ "€\n"+"Le prix total a payé est de :"+PAP+"€\n");

}



 else if (TOT>500){
    REM = (10*TOT)/100;
    prixrem= TOT-REM;
    console.log(prixrem);
    if(prixrem<500){
    PORT= prixrem*0.02;
    PAP=prixrem+PORT;
    alert("La remise est de "+prixrem+"€\n"+"Les frais de port sont de :"+PORT+ "€\n"+"Le prix total a payé est de :"+PAP+"€\n");

 }

 else if (prixrem>500){

    console.log(prixrem);
    alert("Le prix a payé est de "+prixrem+"€\n");


 }
}





