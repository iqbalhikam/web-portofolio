  function openCertificateModal(title, imageSrc, description) {
    // Dapatkan elemen modal
    var modal = document.getElementById("certificateModal");
    var titleElement = document.getElementById("certificateTitle");
    var imageElement = document.getElementById("certificateImage");
    var descriptionElement = document.getElementById("certificateDescription");

    // Perbarui konten modal
    titleElement.innerHTML = title;
    imageElement.src = imageSrc;
    descriptionElement.innerHTML = description;

    // Tampilkan modal
    modal.style.display = "block";
  }

  function closeModal() {
    // Dapatkan elemen modal
    var modal = document.getElementById("certificateModal");

    // Tutup modal
    modal.style.display = "none";
  }

  // Tutup modal jika pengguna mengklik di luar modal
  window.onclick = function (event) {
    var modal = document.getElementById("certificateModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
