import React from 'react';
import { DialogComponent, AnimationSettingsModel } from '@syncfusion/ej2-react-popups';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { useFormik } from 'formik';


const NewCardFormModal = (shouldOpen = false, onClose = () => null) => {
  let dialogInstance: DialogComponent | null = null;
  const animationSettings: AnimationSettingsModel = { effect: 'None' };

  const formik = useFormik({
    initialValues: {
      summary: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const updateInputHandler = (e) => {
    console.log('e', e);
    
    formik.handleChange(e.event);
  }
  
  return (
    <div id='targetElement' className='control-section defaultDialog dialog-target'>
      <DialogComponent id="defaultdialog" showCloseIcon={true} animationSettings={animationSettings} visible={shouldOpen} width={'500px'} ref={(dialog: DialogComponent) => dialogInstance = dialog}
        target={'#targetElement'} header='Criar novo cartão' close={onClose}>
       <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col">
          <TextBoxComponent
            id="summary"
            name="summary"
            placeholder="Título"
            floatLabelType="Auto"
            change={(e) => updateInputHandler(e)}
            value={formik.values.summary}
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