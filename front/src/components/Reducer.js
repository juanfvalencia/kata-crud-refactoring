function Reducer(state, action) {
	switch (action.type) {
		case 'update-listatarea':
			const listaUpdateTarea = state.tarea;
			listaUpdateTarea.listatarea = action.listatarea;
			return { ...state, tarea: listaUpdateTarea }
		case 'add-tarea':
			const newListaTarea = state.tarea.listatarea;
			newListaTarea.push(action.item);
			return { ...state, tarea: { listatarea: newListaTarea, item: {} } }

		case 'delete-tarea':
			const tareaDeleteItem = state.tarea;
			const listaTareaUpdate = tareaDeleteItem.listatarea.filter((item) => {
				return item.id !== action.id;
			});
			tareaDeleteItem.listatarea = listaTareaUpdate;
			return { ...state, tarea: tareaDeleteItem }
		case 'update-item':
			const todoUpdateItem = state.todo;
			const listUpdateEdit = todoUpdateItem.todoList.map((item) => {
				return item.id === action.item.id ? action.item : item; // refactorizo
			});
			todoUpdateItem.todoList = listUpdateEdit;
			todoUpdateItem.item = {};
			return { ...state, todo: todoUpdateItem };
		case 'delete-item':
			const todoDeleteItem = state.todo;
			const listUpdate = todoDeleteItem.todoList.filter((item) => {
				return item.id !== action.id;
			});
			todoDeleteItem.todoList = listUpdate;
			return { ...state, todo: todoDeleteItem }
		case 'update-list':
			const todoUpdateList = state.todo;
			todoUpdateList.todoList = action.todoList;
			return { ...state, todo: todoUpdateList }
		case 'edit-item':
			const todoEditItem = state.todo;
			todoEditItem.item = action.item;
			return { ...state, todo: todoEditItem }
		case 'add-item':
			const newList = state.todo.todoList;
			newList.push(action.item);
			return { ...state, todo: { todoList: newList, item: {} } }
		default:
			return state;
	}
}

export default Reducer;