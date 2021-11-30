package co.com.sofka.crud.services;

import co.com.sofka.crud.models.ListaTarea;
import co.com.sofka.crud.repositories.ListaTareaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ListaTareaService {

    @Autowired
    private ListaTareaRepository repository;

    public Iterable<ListaTarea> list() {
        return repository.findAll();
    }

    public ListaTarea get(Long id){
        return repository.findById(id).orElseThrow();
    }

    public ListaTarea save(ListaTarea listaTarea){
        return repository.save(listaTarea);
    }

    public void delete(Long id){
        repository.delete(get(id));
    }
}
