function validarFormulario() {
  const categoria = document.getElementById("categoria").value.trim();
  const prioridad = document.getElementById("prioridad").value.trim();
  const descripcion = document.getElementById("descripcion").value.trim();

  if (!categoria) {
    alert("Debe seleccionar una categoría.");
    return false;
  }
  if (!prioridad) {
    alert("Debe seleccionar una prioridad.");
    return false;
  }
  if (descripcion.length < 10) {
    alert("La descripción debe tener al menos 10 caracteres.");
    return false;
  }
  return true; // permitir el envío
}

// En el HTML del formulario:
// <form onsubmit="return validarFormulario()">
