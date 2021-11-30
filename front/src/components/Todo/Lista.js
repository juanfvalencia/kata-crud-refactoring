import React, { useContext, useEffect } from 'react';
import Store from '../Store';
import HOST_API from '../Connection';

const Lista = (TareaListaId) => {
	const { dispatch, state: { todo } } = useContext(Store);
	const currentLista = todo.todoLista.filter(todo => {
		return todo.idLista === TareaListaId.TareaListaId;
	});

	useEffect(() => {
		fetch(HOST_API + "/todolist")
			.then(response => response.json())
			.then((todoLista) => {
				dispatch({ type: "update-list", todoLista })
			})
	}, [dispatch]);

	const onDelete = (id) => {
		fetch(HOST_API + "/" + id + "/todo", {
			method: "DELETE"
		})
			.then((todoLista) => {
				dispatch({ type: "delete-item", id })
			})
	};

	const onEdit = (todo) => {
		dispatch({ type: "edit-item", item: todo })
	};

	const onEditComplete = (event, item) => {
		const request = {
			name: item.name,
			id: item.id,
			idLista: item.idLista,
			completed: event.target.checked
		};

		fetch(HOST_API + "/todo", {
			method: "PUT",
			body: JSON.stringify(request),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(response => response.json())
			.then((todo) => {
				dispatch({ type: "update-item", item: todo });
			});
	}

	return <div>
		<table className="table text-center">
			<thead>
				<tr>
					<td>ID</td>
					<td>Nombre</td>
					<td>¿Completado?</td>
					<td colSpan="2">Opciones</td>
				</tr>
			</thead>
			<tbody>
				{currentLista.map((item) => {
					return <tr key={item.id}>
						<td>{item.id}</td>
						<td>{item.name}</td>
						<td>
						<input type="checkbox"  defaultChecked={item.completed} onChange={(event) => onEditComplete(event, item)} className="CheckComplete"/>
						</td>
						<td><button className="btn btn-info" onClick={() => onEdit(item)}>Editar</button></td>
						<td><button className="btn btn-danger" onClick={() => onDelete(item.id)}>Eliminar</button></td>
					</tr>
				})}
			</tbody>
		</table>
	</div>
}

export default Lista;