package co.com.sofka.crud.services;

import co.com.sofka.crud.models.Tarea;
import co.com.sofka.crud.repositories.TareaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TareaService {

    @Autowired
    private TareaRepository repository;

    public Iterable<Tarea> list() {
        return repository.findAll();
    }

    public Tarea get(Long id){
        return repository.findById(id).orElseThrow();
    }

    public Tarea save(Tarea tarea){
        return repository.save(tarea);
    }

    public void delete(Long id){
        repository.delete(get(id));
    }
}
