// Lista simulada de solicitudes en el backend
const solicitudes = [
  { id: 1, usuarioId: 10, descripcion: "Problema de red", estado: "En proceso" },
  { id: 2, usuarioId: 11, descripcion: "Error de software", estado: "Recibida" },
  { id: 3, usuarioId: 10, descripcion: "No entra a la cuenta", estado: "Resuelta" }
];

// Función que el "backend" usaría para obtener solicitudes de un usuario
function obtenerSolicitudesDeUsuario(usuarioId) {
  return solicitudes.filter(s => s.usuarioId === usuarioId); // [web:232][web:240]
}

// Ejemplo de uso
console.log("Solicitudes del usuario 10:", obtenerSolicitudesDeUsuario(10));
