const prompt=require('prompt-sync')();
const couleurs = {
  reset: "\x1b[0m",     // Arrête la couleur, retour à la normale
  rouge: "\x1b[31m",    // Pour les erreurs
  vert: "\x1b[32m",     // Pour les succès
  jaune: "\x1b[33m",    // Pour les avertissements ou les menus
  bleu: "\x1b[34m",     // Pour les informations
  magenta: "\x1b[35m",  // Pour mettre en évidence un résultat
  cyan: "\x1b[36m",     // Pour les titres de section
  gras: "\x1b[1m",      // Rend le texte plus épais (bold)
};
function colorer(texte, code) {
  return code + texte + couleurs.reset;
}
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
    partiPolitique: "Parti de la Reforme",
    age: 43,
    electeurs: ["CD888881"]
  },
  {
    cin: "AB901234",
    nom: "Berrada",
    prenom: "Imane",
    partiPolitique: "Parti du Progres",
    age: 39,
    electeurs: ["CD999991", "CD999992", "CD999993"]
  },
  {
    cin: "AB012345",
    nom: "Naciri",
    prenom: "Karim",
    partiPolitique: "independant",
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
        console.log(colorer('condidat ajouter avec succés', couleurs.vert));
        }else{
        console.log(colorer('age est Inacceptable ',couleurs.rouge))
        }
 }

 function Ajouter_plusieur(){
    let nombre = Number(prompt('Combien de candidats voulez-vous ajouter ? '));

   for(let i = 0; i < nombre; i++){
        console.log(`--- Candidat ${i + 1} ---`);
           Ajouter_seul()
    }
 }


 function Afficher_lists(){
    console.log(`
        1.list simple 
        2.list trier 
        3. list filtrer `)

    let choix = Number(prompt('entrer votre choix : '))
     if(choix===0){
        console.log(colorer('chette choix est indisponible ',couleurs.rouge))
     }else if(choix===1){

             afficherCandidats()

     }else if(choix===2){

             list_trie()

    }else if(choix===3){

        let partie = prompt(`entrer partiPolitique : `)    
        let trouver =false;       
        for(let i=0; i<candidats.length; i++){
            if(candidats[i].partiPolitique===partie){
                console.log(`____________________________________________`)
                console.log(`le candidats avac partie ${partie} est :`)
                console.log(`nom: ${candidats[i].nom}`)
                console.log(`prenom: ${candidats[i].prenom}`)
                 console.log(`cin : ${candidats[i].cin}`)
                             
                          trouver =true   
            }
        }
        if (!trouver){
            console.log(colorer(`le partie politique est introuver dans les candidats`,couleurs.rouge))
        }
    }
  }
      //coix 1 list simple
        function afficherCandidats(){
           for(let i=0; i<candidats.length; i++){
              console.log(`___# Candidat ${i+1}___`);
              console.log(`CIN: ${candidats[i].cin}`);
              console.log(`Nom: ${candidats[i].nom}`);
              console.log(`Prénom: ${candidats[i].prenom}`);
              console.log(`Parti politique: ${candidats[i].partiPolitique}`);
              console.log(`Âge: ${candidats[i].age}`);
              console.log(`Nombre de votes: ${candidats[i].electeurs}`);
              console.log('________________________________________________');
            }       
        }
      //choix 2 list trie
        function list_trie(){
              let tableau_numbers = []
             for(let i=0; i<candidats.length; i++){
                 let n ={
                      nom: candidats[i].nom,
                      prenom:candidats[i].prenom,
                      cin : candidats[i].cin,
                      partiPolitique: candidats[i].partiPolitique, 
                      age: candidats[i].age, 
                      nombre_votes: candidats[i].electeurs.length
                 } 
                    tableau_numbers.push(n)
             }
              function bubbleSort(){
                for(let i=0; i<tableau_numbers.length-1; i++){
                    for(let j=0; j<tableau_numbers.length-i-1; j++){
                        if(tableau_numbers[j].nombre_votes <tableau_numbers[j+1].nombre_votes){
                            let temp=tableau_numbers[j]
                            tableau_numbers[j]=tableau_numbers[j+1]
                            tableau_numbers[j+1]=temp
                        }
                    }
                } 
                }  
                bubbleSort()
                function Afficher_candidats_trie(){
                    for(let i=0; i<tableau_numbers.length;i++){
                        console.log(`# candididat : ${i+1}`)
                        console.log(`CIN: ${tableau_numbers[i].cin}`);
                        console.log(`Nom: ${tableau_numbers[i].nom}`);
                        console.log(`Prénom: ${tableau_numbers[i].prenom}`);
                        console.log(`Parti politique: ${tableau_numbers[i].partiPolitique}`);
                        console.log(`Âge: ${tableau_numbers[i].age}`);
                        console.log(`Nombre de votes: ${tableau_numbers[i].nombre_votes}`);
                        console.log('________________________________________________');
                    }
                }
                Afficher_candidats_trie()
            
        }


 function Voter_candidat(){
    let cinElecteur=prompt('entrer votre cin : ') //verificatin de cinElecteure
    for(let i=0; i<candidats.length; i++){
       if(candidats[i].electeurs.includes(cinElecteur)){
            console.log(colorer(`  Vous avez déjà voté  `,couleurs.magenta))
            
        }
    }
     let cin_candidat=prompt('entrer cin candidat que tu veux voter')
     let candidat_trouver= candidats.find((candidats)=>candidats.cin===cin_candidat) // verification cin candidats
     if(candidat_trouver){
        candidat_trouver.electeurs.push(cinElecteur)
        console.log(colorer('votre votes est succes ',couleurs.vert))
     }else{
        console.log(colorer('candidats introuvable',couleurs.rouge))
     }
      
 }

 function Modifier_condidat(){
        let cin_candidat =prompt('entrer cin candidat qui tu veux modifier ')  
        let trouver_candidat =candidats.find((candidats)=>(candidats.cin===cin_candidat)) //verifier que cincandidats est trouver
         if(!trouver_candidat){
            console.log(colorer(' cin candidat introvable',couleurs.rouge))
            return
         }

               console.log(`
                   1. modifier parti politique
                   2.modifier l'age`)

            let choix=Number(prompt('entrer votre choix modification :  '))
            if(choix=1){           
                nouveau_partipolitique=prompt('entrer nouveau partie politique  : ')
                trouver_candidat.partiPolitique = nouveau_partipolitique
                console.log(colorer(`modification est succes de  ${candidats[i].nom}`,couleurs.vert))
            
            }
            else if(choix=2){
            
                nouveau_age=Number(prompt('entrer nouveau age : '))
                trouver_candidat.age=nouveau_age
                console.log(colorer(`modification est succes de  ${candidat_trouver.nom}`,couleurs.vert))      
            }
    }
  

 function supprimer_candidat(){
        let cin_candidat=prompt('entrer candidat tu veux supprimer : ')
        let candidat_trouver=candidats.find(((candidats)=>(candidats.cin===cin_candidat)))
           if(!candidat_trouver){
             console.log(colorer('candidat introuvable ',couleurs.rouge))
           }
        let index=candidats.findIndex(((candidats)=>(candidats.cin===cin_candidat)))
            if(candidat_trouver){
                let verfication=prompt('vous etes sur que tu veux supprimer cette candidat : ')
               if(verfication==='oui' ){
                 candidats.splice(index,1)
                 console.log(colorer('candidat est supprimer ',couleurs.vert))
                }else{
                    console.log(colorer('tu as annulé la suppression ',couleurs.cyan))
                }
            }
    }
 
function rechercher_candidat(){
    let nom_candidat_rechercher=prompt('entrer nom candidat que tu veux rechercher : ')
    let trouver = false
    for(let i=0; i<candidats.length; i++){
        if(candidats[i].nom === nom_candidat_rechercher ){
           console.log(colorer(`___# Candidat trouvé ___`, couleurs.vert))
           console.log(`CIN: ${candidats[i].cin}`)
           console.log(`Nom: ${candidats[i].nom}`)
           console.log(`Prénom: ${candidats[i].prenom}`)
           console.log(`Parti politique: ${candidats[i].partiPolitique}`)
           console.log(`Âge: ${candidats[i].age}`)
           console.log(`Nombre de votes: ${candidats[i].electeurs.length}`)           
             trouver= true
        }
    }
        if(!trouver){
           console.log(colorer('ce nom est pas trouver ',couleurs.rouge))
        }
}

function statistiques_election(){
    console.log(`
               1.afficer le nombre Tolal de candidat.
               2.Afficher le nombre total de votes exprimés dans toute l'élection. 
               3.Afficher le Top 3 des candidats ayant le plus de votes. 
               4.Afficher le nombre de candidats par parti politique. `)
    let choix= Number(prompt('entrer votre choix : '))
    switch(choix){
        case(1):
            nombre_Total()
            break
        case(2):
            nombre_Totale_voter()
            break
        case(3):
             Top_3_candidat()
             break
        case(4):
            nombre_candidat_politique()
            break
    }
        

}
//1 er choix Nombre Totale de candidat
    function nombre_Total(){
             let compteur=0
          for(let i=0; i<candidats.length; i++){
               compteur++
            }
              console.log(`le nombre total de candidat est  ${compteur}`)
    }
//2 eme choix Nombre Totale de candidat
    function nombre_Totale_voter(){
              tableau_numbers=[]
             for(let i=0; i<candidats.length; i++){
                 let element = candidats[i].electeurs.length
                 tableau_numbers.push(element)
             }
              let somme =0
            for(let i=0; i<tableau_numbers.length; i++){
                 somme += tableau_numbers[i]
            }
            console.log(` le nombre total de votes exprimés dans toute l'élection. ${somme} `)

    }
//3 éme choix  Top 3 des candidats ayant le plus de votes. 

    function trierParVotes(){
        for(let i=0; i<candidats.length-1;  i++){
            for(let j=0; j<candidats.length-1-i; i++){
                if(candidats[j].electeurs.length<candidats[j+1].electeurs.length){
                    let temp = candidats[j];
                    candidats[j]=candidats[j+1];
                    candidats[j+1]=temp;
                
                }
            }
        }
        
        return candidats
    }
    function Top_3_candidat(){
    let candidatsTries = trierParVotes();
    for(let i = 0; i < 3 && i < candidatsTries.length; i++){
        console.log(`Top ${i+1}: ${candidatsTries[i].nom} - ${candidatsTries[i].electeurs.length} votes`);
    }
    }
//4 éme choix nombre de candidats par parti politique. 
    function nombre_candidat_politique(){
            compteur={}
            for(let i=0; i<candidats.length; i++){
                let parti=candidats[i].partiPolitique
                if(compteur[parti]){
                    compteur[parti]=compteur[parti]+1
                }else{
                    compteur[parti]=1
                }
            }
            console.log(compteur)
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




