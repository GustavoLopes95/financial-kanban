import React, { CSSProperties } from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import { DataManager, ODataAdaptor } from '@syncfusion/ej2-data';
import { Ajax } from '@syncfusion/ej2-base';
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
	const [ cards, setCards ] = React.useState<Array<any>>([]);

	const openDialog = () => {
		setShouldOpenModal(true);
	}

	const closeDialog = () => {
		setShouldOpenModal(false);
	}

	const createNewCard = (data) => {
		console.log('data', data);
		fetch('http://localhost:3000/cards', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json'
      }
    }).then(() => getCards())
	}

	const getCards = async () => {
		const result: any = await new DataManager({
			url: 'http://localhost:3000/cards',
			adaptor: new ODataAdaptor,
			crossDomain: true,
		});
		console.log('result', result);
		setCards(result);
	}

	React.useEffect(() => {
		getCards();
	}, [])

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
					<KanbanComponent className='mt-3' id="kanban" keyField="status" dataSource={cards} cardSettings={{contentField: "summary", headerField: "id", showHeader: true}}>
							<ColumnsDirective>
								<ColumnDirective headerText="To Do" keyField="open"/>
								<ColumnDirective headerText="In Progress" keyField="inProgress"/>
								<ColumnDirective headerText="Testing" keyField="testing"/>
								<ColumnDirective headerText="Done" keyField="close"/>
							</ColumnsDirective>
					</KanbanComponent>

				<NewCardFormModal shouldOpen={shouldOpenModal} onClose={closeDialog} createNewCard={createNewCard}/>
			</div>
    );
}
export default App;