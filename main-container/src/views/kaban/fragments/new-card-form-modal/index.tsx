import React, { ChangeEvent, useState } from 'react';
import { DialogComponent, AnimationSettingsModel } from '@syncfusion/ej2-react-popups';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';

const inputsInitialValue = {
  summary: ''
}

interface TextBoxChangeEvent {
  event: ChangeEvent
}

const NewCardFormModal = ({ shouldOpen = false, onClose = () => null, createNewCard }) => {
  let dialogInstance: DialogComponent | null = null;
  const animationSettings: AnimationSettingsModel = { effect: 'None' };
  const [ inputsState, setInputsState ] = useState(inputsInitialValue)

  const updateInputHandler = (e: TextBoxChangeEvent) => {
    if(!e.event) return;
    console.log('e', e);
    const name: string = (e.event.target as HTMLInputElement).name;
    //@ts-ignore
    setInputsState({ [name]: e.value });
  }
 
  const onCreateNewCard = (e) => {
    e.preventDefault();
    console.log(createNewCard, e)
    createNewCard({ summary: inputsState.summary, status: 'open' });
  }
  
  return (
    <div id='targetElement' className='control-section defaultDialog dialog-target'>
      <DialogComponent id="defaultdialog" showCloseIcon={true} animationSettings={animationSettings} visible={shouldOpen} width={'500px'} ref={(dialog: DialogComponent) => dialogInstance = dialog}
        target={'#targetElement'} header='Criar novo cartão' close={onClose}>
       <form onSubmit={onCreateNewCard}>
        <div className="flex flex-col">
          <TextBoxComponent
            id="summary"
            name="summary"
            placeholder="Título"
            floatLabelType="Auto"
            change={(e) => updateInputHandler(e as unknown as TextBoxChangeEvent)}
            value={inputsState.summary}
          />
        </div>
        <div className="flex fle-col content-end justify-end mt-3">
          <ButtonComponent type="submit" cssClass='e-primary'>Criar</ButtonComponent>
        </div>
      </form>
      </DialogComponent>
    </div>
  )
}
export default NewCardFormModal;