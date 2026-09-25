const prompt=require('prompt-sync')();
const candidats = [
  {
    cin: "AB123456",
    nom: "Boushaba",
    prenom: "Soufiane",
    partiPolitique: "Indépendant",
    age: 40,
    electeurs: ["CD111111", "CD111112", "CD111113"]
  },
  {
    cin: "AB234567",
    nom: "El Mansouri",
    prenom: "Omar",
    partiPolitique: "Parti du Progrès",
    age: 45,
    electeurs: ["CD222221"]
  },
  {
    cin: "AB345678",
    nom: "Bennani",
    prenom: "Khadija",
    partiPolitique: "Parti de la Justice",
    age: 38,
    electeurs: ["CD333331", "CD333332", "CD333333", "CD333334", "CD333335"]
  },
  {
    cin: "AB456789",
    nom: "Alaoui",
    prenom: "Youssef",
    partiPolitique: "Indépendant",
    age: 52,
    electeurs: ["CD444441", "CD444442"]
  },
  {
    cin: "AB567890",
    nom: "Amrani",
    prenom: "Nadia",
    partiPolitique: "Parti de l'Avenir",
    age: 41,
    electeurs: ["CD555551", "CD555552", "CD555553", "CD555554"]
  },
  {
    cin: "AB678901",
    nom: "Tazi",
    prenom: "Mehdi",
    partiPolitique: "Parti du Développement",
    age: 48,
    electeurs: []
  },
  {
    cin: "AB789012",
    nom: "Fassi",
    prenom: "Salma",
    partiPolitique: "Indépendant",
    age: 35,
    electeurs: ["CD777771", "CD777772", "CD777773", "CD777774"]
  },
  {
    cin: "AB890123",
    nom: "Idrissi",
    prenom: "Hamza",
    partiPolitique: "Parti de la Réforme",
    age: 43,
    electeurs: ["CD888881"]
  },
  {
    cin: "AB901234",
    nom: "Berrada",
    prenom: "Imane",
    partiPolitique: "Parti du Progrès",
    age: 39,
    electeurs: ["CD999991", "CD999992", "CD999993"]
  },
  {
    cin: "AB012345",
    nom: "Naciri",
    prenom: "Karim",
    partiPolitique: "Indépendant",
    age: 50,
    electeurs: ["CD101010", "CD101011", "CD101012", "CD101013", "CD101014"]
  }
];
 function Ajouter_seul(){
        let cin = prompt('entrer une cin : ')
        let nom = prompt('entrer nom : ')
        let prenom = prompt('entrer prenom : ')
        let partipolitique = prompt('entrer partipolitique: ')
        let age = Number(prompt('entrer une age : '))
    if(age>18 && age <60){
        let objet ={
            cin :cin,
            nom :nom,
            prenom:prenom,
            partipolitique : partipolitique,
            age:age,
            electeurs :[]
        }
        candidats.push(objet)
        console.log('condidat ajouter avec succés')
        }else{
        console.log('age est Inacceptable ')
        }
 }

 function Ajouter_plusieur(){
    let nombre = Number(prompt('Combien de candidats voulez-vous ajouter ? '));

   for(let i = 0; i < nombre; i++){
        console.log(`--- Candidat ${i + 1} ---`);
           let cin = prompt('entrer une cin : ');
           let nom = prompt('entrer nom : ');
           let prenom = prompt('entrer prenom : ');
           let partiPolitique = prompt('entrer partiPolitique: ');
           let age = Number(prompt('entrer une age : '));
      if(age>18 && age <60){
           let objet = {
               cin: cin,
               nom: nom,
               prenom: prenom,
               partiPolitique: partiPolitique,
               age: age,
               electeurs: []
            };
            candidats.push(objet);
            console.log(`${i+1} candidats ajoutés avec succès !`);

        }else{
            console.log(`considats ${i+1} age est Inacceptable `)
            
            
        }
    }
 }


 function Afficher_lists(){
    console.log(`
        1.list simple 
        2.list trier 
        3. list filtrer `)
    let choix = Number(prompt('entrer votre choix : '))
     if(choix===0){
        console.log('chette choix est indisponible ')
     }else if(choix===1){
          console.log(candidats)
     }else if(choix===2){
           let tableau_numbers = []
        for(let i=0; i<candidats.length; i++){
                 let n ={
                      cin : candidats[i].cin,
                      nombre_votes: candidats[i].electeurs.length,
                 } 
                    tableau_numbers.push(n)
        }
        for(let i = 0; i < tableau_numbers.length; i++){
           for(let j = 0; j < tableau_numbers.length - 1 - i; j++){
              if(tableau_numbers[j].nombre_votes < tableau_numbers[j + 1].nombre_votes){
                   let temp = tableau_numbers[j];
                   tableau_numbers[j] = tableau_numbers[j + 1];
                   tableau_numbers[j + 1] = temp;
            }
                }
        }
                  console.log(tableau_numbers);

    }else if(choix===3){
        let partie = prompt(`entrer partiPolitique : `)           
        let candidatsFiltres= candidats.filter(function(candidat){
          return candidat.partiPolitique === partie;
    })
       if(candidatsFiltres.length === 0){
        console.log('Aucun candidat trouvé pour ce parti.');
    }else{
        console.log(candidatsFiltres);
    }
}
 }



 
 

while(true){
console.log(`
    _________________Menu pricipale________________________
    1. Ajouter un nouveau candidat.
    2. Ajouter plusieurs candidats à la fois. 
    3. Afficher la liste des candidats.
    4. Voter pour un candidat.
    5. Modifier les informations d'un candidat.
    6. Supprimer un candidat.
    7. Rechercher des candidats. 
    8. Statistiques de l'élection.
    0.quiter
    `)

    let choix = Number(prompt('entrer un choix : '));
    switch(choix){
        case 0:
            console.log('Au revoir !');
            break;
        case 1:
            Ajouter_seul();
            break;
        case 2:
            Ajouter_plusieur();
            break;
        case 3:
            Afficher_lists();
            break;
        case 4:
            Voter_candidat();
            break;
        case 5:
            Modifier_condidat();
            break;
        case 6:
            supprimer_candidat();
            break;
        case 7:
            rechercher_candidat();
            break;
        case 8:
            statistiques_election();
            break;
        default:
            console.log('Choix invalide, réessayez.');
    }

    if(choix === 0) break;

}





