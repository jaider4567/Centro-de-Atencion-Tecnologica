public public class ValidadorSolicitud {

    public static void validar(String categoria, String prioridad, String descripcion) {
        if (categoria == null || categoria.isBlank()) {
            throw new IllegalArgumentException("La categoría es obligatoria");
        }
        if (prioridad == null || prioridad.isBlank()) {
            throw new IllegalArgumentException("La prioridad es obligatoria");
        }
        if (descripcion == null || descripcion.trim().length() < 10) {
            throw new IllegalArgumentException("La descripción debe tener al menos 10 caracteres");
        }
    }

    // Ejemplo de uso en un controlador:
    public static void main(String[] args) {
        try {
            validar("Red", "Alta", "No tengo conexión en el laboratorio.");
            System.out.println("Solicitud válida, se puede guardar en BD.");
        } catch (IllegalArgumentException ex) {
            System.out.println("Error de validación: " + ex.getMessage());
        }
    }
}
 {
    
}
