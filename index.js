// Sélectionner tous les boutons "more"
const moreButtons = document.querySelectorAll(".more");
const hideButtons = document.querySelectorAll(".hideBtn");

// Pour chaque bouton "more"
moreButtons.forEach(button => {
    // Ajouter un écouteur d'événements sur chaque bouton
    button.addEventListener("click", function() {
        // Trouver le popup correspondant à ce bouton
        const popupId = this.getAttribute("data-popup");
        const popup = document.getElementById(popupId);
        
        // Vérifier si le popup est affiché ou non, puis changer son état d'affichage
        if (popup.style.display === "block") {
            popup.style.display = "none";
        } else {
            popup.style.display = "block";
        }
    });
});

// Pour chaque bouton "Masquer l'épingle"
hideButtons.forEach(button => {
    // Ajouter un écouteur d'événements sur chaque bouton
    button.addEventListener("click", function(event) {
        // Trouver le popup parent correspondant à ce bouton "Masquer l'épingle"
        const popup = this.closest(".popup");

        // Masquer le popup
        popup.style.display = "none";
        
        // Empêcher la propagation de l'événement pour éviter de déclencher le popup parent
        event.stopPropagation();
    });
});
