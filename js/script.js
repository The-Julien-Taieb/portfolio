const buttons = document.querySelectorAll("button");

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(){
        const joueur = buttons[i].innerHTML;
        const ordi = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
        let resultat = "";
        if ((joueur === "Pierre" && ordi === "Ciseaux") || (joueur === "Ciseaux" && ordi === "Feuille") || (joueur === "Feuille" && ordi === "Pierre")) {
            resultat = "Bien joué ! Un point de plus"
        } else if (joueur === ordi) {
            resultat = "Egalité, recommencez !"
        } else {
            resultat = "C'est perdu, dommage !"
        }
        document.querySelector("#resultat").innerHTML = `
        Joueur : ${joueur} <br/>
        Ordinateur : ${ordi} <br/>
        Résultat : ${resultat}
        `;
    })
}