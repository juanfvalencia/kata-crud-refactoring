import React, { Fragment } from 'react';
import {StoreProvider} from "../Store";
import Lista from "./Lista";
import Form from "./Form";

const TodoComponent = () => {
	return (
		<Fragment>
			<div>
				<StoreProvider>
					<Form />
					<Lista />
				</StoreProvider>
			</div>
		</Fragment>
	);
}
 
export default TodoComponent;