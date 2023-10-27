
document.getElementById("formulaire").addEventListener("submit", function (e) {
    e.preventDefault();

    var check = document.getElementById("check");
    var votrequestion = document.getElementById("votrequestion");
    var sujet = document.getElementById("sujet");
    var email = document.getElementById("email");
    var codepostal = document.getElementById("Codepostal");
    var feminin = document.getElementById("feminin");
    var masculin = document.getElementById("masculin");
    var prenom = document.getElementById("prenom");
    var nom = document.getElementById("nom");

    var erreur1 = "";
    var erreur2 = "";
    var erreur3 = "";
    var erreur4 = "";
    var erreur5 = "";
    var erreur6 = "";
    var erreur7 = "";
    var erreur8 = "";

    if (!check.checked) {
        erreur8 = "champ invalide";
    }
    if (!votrequestion.value) {
        erreur7 = "champ invalide";
    }
    if (!sujet.value) {
        erreur6 = "champ invalide";
    }
    if (!email.value) {
        erreur5 = "champ invalide";
    }
    if (!codepostal.value) {
        erreur4 = "champ invalide";
    }
    if (!feminin.checked && !masculin.checked) {
        erreur3 = "champ invalide";
    }
    if (!prenom.value) {
        erreur2 = "champ invalide";
    }
    if (!nom.value) {
        erreur1 = "champ invalide";
    }

    document.getElementById("erreur8").textContent = erreur8;
    document.getElementById("erreur7").textContent = erreur7;
    document.getElementById("erreur6").textContent = erreur6;
    document.getElementById("erreur5").textContent = erreur5;
    document.getElementById("erreur4").textContent = erreur4;
    document.getElementById("erreur3").textContent = erreur3;
    document.getElementById("erreur2").textContent = erreur2;
    document.getElementById("erreur1").textContent = erreur1;

    if (!erreur1 && !erreur2 && !erreur3 && !erreur4 && !erreur5 && !erreur6 && !erreur7 && !erreur8) {
        alert("formulaire envoyé");
    }
});
