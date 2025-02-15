function showDetails(detailsId) {
    var details = document.querySelectorAll('.details'); 
    details.forEach(function (detail) {

      if (detail.id !== detailsId && detail.classList.contains('active')) {
        detail.classList.remove('active');
      }
    });
  
    var currentDetails = document.getElementById(detailsId);
    currentDetails.classList.toggle('active');
  }