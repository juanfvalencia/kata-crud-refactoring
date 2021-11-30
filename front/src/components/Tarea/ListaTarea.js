import React, { useContext, useEffect } from 'react';
import Store from '../Store';
import Form from "../Todo/Form";
import HOST_API from '../Connection';
import Lista from "../Todo/Lista";

const ListaTarea = () => {
	const { dispatch, state: { tarea, todo } } = useContext(Store);
	const currentLista = tarea.listaTarea;
	const currentTodo = todo.todoList;

	useEffect(() => {
		fetch(HOST_API + "/tarealista")
			.then(response => response.json())
			.then((listatarea) => {
				dispatch({ type: "update-tarealista", listatarea })
			})
	}, [dispatch]);

	const onDeleteTarea = (id) => {
		currentTodo.forEach(el => {
			if(el.idList === id) {
				fetch(HOST_API + "/" + el.id + "/todo", {
					method: "DELETE"
				}).then((todoList) => {
					dispatch({ type: "delete-item", id })
				})
			}
		});
		fetch(HOST_API + "/" + id + "/tarea", {
			method: "DELETE"
		}).then((tareaLista) => {
			dispatch({ type: "delete-tarea", id })
		})
	};

	return <div class="row text-center d-flex justify-content-center">
		{currentLista.map((item) => {
			return <div className="col col-sm-12  col-md-8  col-sm-12 padre" id="card" key={item.id}>
				<div>
					<h2>{item.name}</h2>
					<button className="btn btn-danger hijo" onClick={() => onDeleteTarea(item.id)}>Eliminar</button>
					<Form ListaTareaId={item.id} />
					<Lista ListaTareaId={item.id} />
				</div>

			</div>
		})}
	</div>;
}

export default ListaTarea;

