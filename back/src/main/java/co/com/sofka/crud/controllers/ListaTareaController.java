package co.com.sofka.crud.controllers;

import co.com.sofka.crud.models.ListaTarea;
import co.com.sofka.crud.services.ListaTareaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ListaTareaController {

    @Autowired
    private ListaTareaService service;

    @GetMapping(value = "api/listatarea")
    public Iterable<ListaTarea> list(){
        return service.list();
    }

    @PostMapping(value = "api/tarea")
    public ListaTarea save(@RequestBody ListaTarea listaTarea){
        return service.save(listaTarea);
    }

    @PutMapping(value = "api/tarea")
    public ListaTarea update(@RequestBody ListaTarea listaTarea) {
        if(listaTarea.getId() != null){
            return service.save(listaTarea);
        }
        throw new RuntimeException("No existe el id para actualizar");
    }

    @DeleteMapping(value = "api/{id}/tarea")
    public void delete(@PathVariable("id") Long id){
        service.delete(id);
    }

    @GetMapping(value = "api/{id}/tarea")
    public ListaTarea get(@PathVariable("id") Long id){
        return service.get(id);
    }
}
