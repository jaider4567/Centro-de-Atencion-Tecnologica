// A partir del modelo anterior, generamos un SQL de ejemplo
function generarScriptCreacion(modelo) {
  const columnas = modelo.campos.map(c => {
    let linea = `${c.nombre} ${c.tipo}`;
    if (c.pk) linea += " PRIMARY KEY";
    if (c.unico) linea += " UNIQUE";
    if (c.requerido) linea += " NOT NULL";
    return linea;
  }).join(",\n  ");
  return `CREATE TABLE ${modelo.tabla} (\n  ${columnas}\n);`;
}

// Usar el modelo definido en modeloUsuario.js
console.log(generarScriptCreacion(UsuarioModel));
