// function open hiden detail sertifikat
function toggleCertificateModal(modalId, action) {
  const modalElement = document.getElementById(modalId);

  if (action === 'open') {
    modalElement.style.display = 'flex';
  } else if (action === 'close') {
    modalElement.style.display = 'none';
  }
}

// function detail sertifikat
function openCertificateModal1() {
  toggleCertificateModal('detailSertifikat1', 'open');
}

function closeCertificateDetail1() {
  toggleCertificateModal('detailSertifikat1', 'close');
}


function openCertificateModal2() {
  toggleCertificateModal('detailSertifikat2', 'open');
}

function closeCertificateDetail2() {
  toggleCertificateModal('detailSertifikat2', 'close');
}

function openCertificateModal3() {
  toggleCertificateModal('detailSertifikat3', 'open');
}

function closeCertificateDetail3() {
  toggleCertificateModal('detailSertifikat3', 'close');
}

function openCertificateModal4() {
  toggleCertificateModal('detailSertifikat4', 'open');
}

function closeCertificateDetail4() {
  toggleCertificateModal('detailSertifikat4', 'close');
}

function openCertificateModal5() {
  toggleCertificateModal('detailSertifikat5', 'open');
}

function closeCertificateDetail5() {
  toggleCertificateModal('detailSertifikat5', 'close');
}

function openCertificateModal6() {
  toggleCertificateModal('detailSertifikat6', 'open');
}

function closeCertificateDetail6() {
  toggleCertificateModal('detailSertifikat6', 'close');
}

function openCertificateModal7() {
  toggleCertificateModal('detailSertifikat7', 'open');
}

function closeCertificateDetail7() {
  toggleCertificateModal('detailSertifikat7', 'close');
}

// duplikat pendidikan
const pendidikan = document.querySelector('.pendidikan').cloneNode(true);
document.querySelector('.pendidikan-container').appendChild(pendidikan);

function twiter(){
  alert("tidak punya twiter")
}