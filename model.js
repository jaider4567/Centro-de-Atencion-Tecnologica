// Simulación del modelo de tabla USUARIOS
const UsuarioModel = {
  tabla: "USUARIOS",
  campos: [
    { nombre: "id_usuario", tipo: "INT", pk: true },
    { nombre: "nombre", tipo: "VARCHAR(100)", requerido: true },
    { nombre: "correo", tipo: "VARCHAR(150)", unico: true },
    { nombre: "rol", tipo: "VARCHAR(20)", valores: ["estudiante", "docente", "administrativo", "tecnico", "admin"] },
    { nombre: "activo", tipo: "BOOLEAN", defecto: true }
  ]
};

console.log("Modelo de usuarios definido:", UsuarioModel);
