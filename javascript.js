
// const $ = require('jquery');


// // Supprimer un patient lorsqu'on clique sur un bouton
// $(document).ready(function () {
//     $('#delete-patient-btn').click(function () {
//         console.log('Button clicked');
//         const patientId = $(this).data('patient-id');
//         $.ajax({
//             url: `/patient/${patientId}`,
//             type: 'DELETE',
//             success: function (result) {
//                 console.log(result);
//                 // Rafraîchir la page une fois la suppression terminée
//                 location.reload();
//             },
//             error: function (err) {
//                 console.log(err);
//             }
//         });
//     });
// });


// Attacher un gestionnaire d'événement à l'événement "submit" du formulaire
document.querySelector('form').addEventListener('submit', function(e) {
    // Empêcher la soumission normale du formulaire
    e.preventDefault();
  
    // Vider les champs du formulaire
    this.reset();
  });