function toggleCertificateModal(modalId, action) {
  const modalElement = document.getElementById(modalId);

  if (action === 'open') {
    modalElement.style.display = 'flex';
    console.log('Modal dibuka:', modalId);
  } else if (action === 'close') {
    modalElement.style.display = 'none';
    console.log('Modal ditutup:', modalId);
  }
}

// Untuk membuka dan menutup modal sertifikat 1
function openCertificateModal1() {
  toggleCertificateModal('detailSertifikat1', 'open');
}

function closeCertificateDetail1() {
  toggleCertificateModal('detailSertifikat1', 'close');
}

// Untuk membuka dan menutup modal sertifikat 2
function openCertificateModal2() {
  toggleCertificateModal('detailSertifikat2', 'open');
}

function closeCertificateDetail2() {
  toggleCertificateModal('detailSertifikat2', 'close');
}
// Untuk membuka dan menutup modal sertifikat 3
function openCertificateModal3() {
  toggleCertificateModal('detailSertifikat3', 'open');
}

function closeCertificateDetail3() {
  toggleCertificateModal('detailSertifikat3', 'close');
}
// Untuk membuka dan menutup modal sertifikat 4
function openCertificateModal4() {
  toggleCertificateModal('detailSertifikat4', 'open');
}

function closeCertificateDetail4() {
  toggleCertificateModal('detailSertifikat4', 'close');
}
// Untuk membuka dan menutup modal sertifikat 5
function openCertificateModal5() {
  toggleCertificateModal('detailSertifikat5', 'open');
}

function closeCertificateDetail5() {
  toggleCertificateModal('detailSertifikat5', 'close');
}
// Untuk membuka dan menutup modal sertifikat 6
function openCertificateModal6() {
  toggleCertificateModal('detailSertifikat6', 'open');
}

function closeCertificateDetail6() {
  toggleCertificateModal('detailSertifikat6', 'close');
}
// Untuk membuka dan menutup modal sertifikat 7
function openCertificateModal7() {
  toggleCertificateModal('detailSertifikat7', 'open');
}

function closeCertificateDetail7() {
  toggleCertificateModal('detailSertifikat7', 'close');
}
