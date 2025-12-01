// Supone que ya tienes la función obtenerSolicitudesDeUsuario(usuarioId)
function renderSolicitudesUsuario(usuarioId) {
  const lista = obtenerSolicitudesDeUsuario(usuarioId);
  const contenedor = document.getElementById("tabla-solicitudes");

  let html = "<table><tr><th>ID</th><th>Descripción</th><th>Estado</th></tr>";
  lista.forEach(s => {
    html += `<tr><td>${s.id}</td><td>${s.descripcion}</td><td>${s.estado}</td></tr>`;
  });
  html += "</table>";

  contenedor.innerHTML = html;
}

// En el HTML podrías tener:
// <div id="tabla-solicitudes"></div>
// Y llamar, por ejemplo: renderSolicitudesUsuario(10);
