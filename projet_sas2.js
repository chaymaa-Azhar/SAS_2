const prompt=require('prompt-sync')();
const candidats = [
  {
    cin: "AB123456",
    nom: "Boushaba",
    prenom: "Soufiane",
    partipolitique: "Indépendant",
    age: 40,
    electeurs: []
  },
  {
    cin: "CD789012",
    nom: "Alaoui",
    prenom: "Salma",
    partipolitique: "PJD",
    age: 35,
    electeurs: []
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





