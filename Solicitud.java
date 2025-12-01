import java.util.ArrayList;
import java.util.List;

class Solicitud {
    int id;
    String descripcion;
    Tecnico tecnicoAsignado;

    Solicitud(int id, String descripcion) {
        this.id = id;
        this.descripcion = descripcion;
    }
}

class Tecnico {
    String nombre;
    List<Solicitud> solicitudes = new ArrayList<>();

    Tecnico(String nombre) {
        this.nombre = nombre;
    }

    int getCargaTrabajo() {
        return solicitudes.size();
    }
}
