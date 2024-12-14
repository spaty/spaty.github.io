document.addEventListener('contextmenu', function(e) {
    e.preventDefault();  // Empêche l'ouverture du menu contextuel
    alert('Le clic droit est désactivé sur cette page.');  // Affiche une alerte
});