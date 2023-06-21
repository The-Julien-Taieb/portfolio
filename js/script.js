const boutonsDuJeu = document.querySelectorAll(".boutonDuJeu");
let monScore = 0;
let scoreAdverse = 0;
const score = document.querySelector("#score")



for(let i = 0; i < boutonsDuJeu.length; i++) {
    boutonsDuJeu[i].addEventListener('click', function(){
        const joueur = boutonsDuJeu[i].innerHTML;
        const ordi = boutonsDuJeu[Math.floor(Math.random() * boutonsDuJeu.length)].innerHTML;
        let resultat = "";
        if ((joueur === "Pierre" && ordi === "Ciseaux") || (joueur === "Ciseaux" && ordi === "Feuille") || (joueur === "Feuille" && ordi === "Pierre")) {
            resultat = "Bien joué ! Un point de plus";
            monScore++;
        } else if (joueur === ordi) {
            resultat = "Egalité, recommencez !"
        } else {
            resultat = "C'est perdu, un point pour l'ordi !"
            scoreAdverse++;
        };
        document.querySelector("#resultat1").innerHTML = `
        Joueur : ${joueur} <br/>
        Ordinateur : ${ordi} <br/>
        <br/>
        ${resultat}
        `;
        document.querySelector("#score").innerHTML = `
        ${monScore} - ${scoreAdverse} 
        `;
    })
}

const calculIMC = document.querySelector("#calculIMC");
calculIMC.addEventListener('click', function(){
    let resultat2 = "";
    let poids = document.querySelector("#poids").value;
    let taille = document.querySelector("#taille").value;
    let IMC = Math.floor(poids/((taille/100)*(taille/100)));
    if(IMC < 18.5){
        resultat2 = "Votre IMC démontre une insuffisance pondérale."
    } else if(IMC >= 18.5 && IMC < 25){
        resultat2 = "Votre corpulence est normale."
    } else if(IMC >= 25 && IMC < 30){
        resultat2 = "Vous êtes en surpoids."
    } else if(IMC >= 30 && IMC < 35){
        resultat2 = "Vous souffrez d'obésité modérée."
    } else if(IMC >= 35 && IMC < 40){
        resultat2 = "Vous souffrez d'obésité sévère."
    } else if(IMC >= 40){
        resultat2 = "Vous souffrez d'obésité massive."
    };

    document.querySelector("#resultat2").innerHTML = `${resultat2}`
    document.querySelector("#imc").innerHTML = `${IMC}`
})