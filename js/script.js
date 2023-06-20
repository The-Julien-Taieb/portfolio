const buttons = document.querySelectorAll(".boutonDuJeu");
let monScore = 0;
let scoreAdverse = 0;
const score = document.querySelector("#score")



for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(){
        const joueur = buttons[i].innerHTML;
        const ordi = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
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
        document.querySelector("#resultat").innerHTML = `
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