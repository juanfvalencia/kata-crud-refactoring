package co.com.sofka.crud.repositories;

import co.com.sofka.crud.models.Tarea;
import org.springframework.data.repository.CrudRepository;

public interface TareaRepository extends CrudRepository<Tarea, Long> {
}
