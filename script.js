function copiarTexto(texto) {
  navigator.clipboard.writeText(texto).then(() => {
    mostrarToast(`"${texto}" copiado`);
  }).catch(err => {
    mostrarToast('Error al copiar');
    console.error(err);
  });
}

function mostrarToast(mensaje) {
  const toast = document.getElementById('toast');
  toast.textContent = mensaje;
  toast.classList.add('visible');

  setTimeout(() => {
    toast.classList.remove('visible');
  }, 2500);
}
