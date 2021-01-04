import React, { CSSProperties } from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import data from './datasourcer.json';
import './app.scss';
import NewCardFormModal from './views/kaban/fragments/new-card-form-modal';

const styles = {
    mainDiv: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1 0 100%',
        padding: '10px',
    }
}

const App = () => {
	const [ shouldOpenModal, setShouldOpenModal ] = React.useState(false);

	const openDialog = () => {
		setShouldOpenModal(true);
	}

	const closeDialog = () => {
		setShouldOpenModal(false);
	}

	return (
			<div style={styles.mainDiv as CSSProperties}>
					<div className="flex justify-between ">
							<div className="text-lg">Quadro Jan</div>
							<div className="flex flex-col">
									<button 
											onClick={openDialog}
											className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none">
											Novo Cartão +
									</button>
							</div>
					</div>
					<KanbanComponent className='mt-3' id="kanban" keyField="Status" dataSource={data} cardSettings={{contentField: "Summary", headerField: "Id", showHeader: true}}>
							<ColumnsDirective>
								<ColumnDirective headerText="To Do" keyField="Open"/>
								<ColumnDirective headerText="In Progress" keyField="InProgress"/>
								<ColumnDirective headerText="Testing" keyField="Testing"/>
								<ColumnDirective headerText="Done" keyField="Close"/>
							</ColumnsDirective>
					</KanbanComponent>

				<NewCardFormModal open={shouldOpenModal} onClose={closeDialog}/>
			</div>
    );
}
export default App;