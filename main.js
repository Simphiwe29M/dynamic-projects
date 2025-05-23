document.addEventListener('DOMContentLoaded', function() {
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get all elements that open the modal (the gallery images)
  var imgs = document.querySelectorAll(".gallery-grid img");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");

  // Go through all of the images with our custom class
  imgs.forEach(function(img) {
    // and attach our click listener to it
    img.onclick = function() {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
  });

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // Get the modal image and caption
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  
  // Get all gallery images
  var galleryImages = document.querySelectorAll(".gallery-grid img");

  // Loop through each gallery image and add a click event listener
  galleryImages.forEach(function(img) {
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
  });
});