import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalTitle, ModalBody, Form, FormGroup, FormLabel, FormControl, FormText, FormCheck } from 'react-bootstrap';



function Price() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

  return (

    
<>

<div class='text-center pt-2 py-5'>
  <button type="button" class="btn btn-outline-light" onClick={ handleShow }>Рассчитай свой вариант</button></div>

<Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
<ModalTitle> Расчет стоимости работ: </ModalTitle> 
 </Modal.Header>
 <ModalBody>
  <Form>
    <FormGroup controlId='fromBasicKvadrat'>
      
    <FormLabel>Поставьте галочки, где необходимо:</FormLabel>
      <FormGroup controlId='fromBasicCheckbox' className='mt-2'>
      <FormCheck type='checkbox' label="Обмерный план – 200 ₽/м2"/>
    </FormGroup>

    <FormGroup controlId='fromBasicCheckbox' className='mt-2'>
      <FormCheck type='checkbox' label="План планировки – 300 ₽/м2 – 2 варианта "/>
    </FormGroup>

    <FormGroup controlId='fromBasicCheckbox' className='mt-2'>
      <FormCheck type='checkbox' label="План с расстановкой мебели и оборудования – 150 ₽/м2"/>
    </FormGroup>

    <FormGroup controlId='fromBasicCheckbox' className='mt-2'>
      <FormCheck type='checkbox' label="План привязки розеток и выключателей –100 ₽/м2"/>
    </FormGroup>

    <FormGroup controlId='fromBasicCheckbox' className='mt-2'>
      <FormCheck type='checkbox' label="План привязки светильников и электрооборудования и щитовых 100 ₽/м2 "/>
    </FormGroup>

    <FormGroup controlId='fromBasicCheckbox' className='mt-2'>
      <FormCheck type='checkbox' label="План расположения кондиционеров 150 ₽/м2 "/>
    </FormGroup>

    <FormGroup controlId='fromBasicCheckbox' className='mt-2'>
      <FormCheck type='checkbox' label="План теплых электрических полов 150 ₽/м2 "/>
    </FormGroup>

    <FormGroup controlId='fromBasicCheckbox' className='mt-2'>
      <FormCheck type='checkbox' label="План теплых водяных полов 200 ₽/м2  "/>
    </FormGroup>

    <FormGroup controlId='fromBasicCheckbox' className='mt-2'>
      <FormCheck type='checkbox' label="План привязки водоснабжения - 150 ₽/м2  "/>
    </FormGroup>


    <FormGroup controlId='fromBasicCheckbox' className='mt-2'>
      <FormCheck type='checkbox' label="План привязки расстановки сантехнического оборудования- 100 ₽/м2 "/>
    </FormGroup>

    <FormGroup controlId='fromBasicCheckbox' className='mt-2'>
      <FormCheck type='checkbox' label="План расстановки радиаторов и бойлеров – 100 ₽/м2 "/>
    </FormGroup>

    <FormGroup controlId='fromBasicCheckbox' className='mt-2'>
      <FormCheck type='checkbox' label="План привязки оборудования системы умный дом – 500 ₽/м2 "/>
    </FormGroup>

    <FormGroup controlId='fromBasicCheckbox' className='mt-2'>
      <FormCheck type='checkbox' label="Планы (индивидуальных предметов мебели)- 300 ₽/м2 "/>
    </FormGroup>

    <FormGroup controlId='fromBasicCheckbox' className='mt-2'>
      <FormCheck type='checkbox' label="Планы узлов и соединений – 350 ₽/м2 "/>
    </FormGroup>

    <FormGroup controlId='fromBasicCheckbox' className='mt-2'>
      <FormCheck type='checkbox' label="Развертки стен – 1000 ₽/м2 "/>
    </FormGroup>

    <FormGroup controlId='fromBasicCheckbox' className='mt-2'>
      <FormCheck type='checkbox' label="3D виды помещений интерьеры - 4 ракурса – 1500 ₽/м2 "/>
    </FormGroup>

    <FormGroup controlId='fromBasicCheckbox' className='mt-2'>
      <FormCheck type='checkbox' label="3D виды фасадов – экстерьеры   - 4 ракурса – 1300 ₽/м2 "/>
    </FormGroup>
 
    <FormGroup controlId='fromBasicCheckbox' className='mt-2'>
      <FormCheck type='checkbox' label="Спецификация отделочных материалов – 800 ₽/м2 "/>
    </FormGroup>
 
    <FormGroup controlId='fromBasicCheckbox' className='mt-2'>
      <FormCheck type='checkbox' label="Спецификация строительных материалов – 700р ₽/м2 "/>
    </FormGroup>

    {/* Ниже не умножаются на кв метры, а просто прибаляются: */}

    <FormGroup controlId='fromBasicCheckbox' className='mt-2'>
      <FormCheck type='checkbox' label="Выезд специалиста одноразовый – 5 000 ₽ "/>
    </FormGroup>

    <FormGroup controlId='fromBasicCheckbox' className='mt-2'>
      <FormCheck type='checkbox' label="Первичная консультация на объекте – 5000 ₽ "/>
    </FormGroup>

    <FormGroup controlId='fromBasicCheckbox' className='mt-2'>
      <FormCheck type='checkbox' label="Смета на все виды работ – 3% от общей стоимости"/>
    </FormGroup>

    <FormGroup controlId='fromBasicCheckbox' className='mt-2'>
      <FormCheck type='checkbox' label="Контроль ежедневный за ходом всех видов работ – 5% от общей стоимости "/>
    </FormGroup>

    <FormLabel>Сколько квадратных метров ваш объект?</FormLabel>
<FormControl type='text' placeholder='введите цифру или цифру с запятой: 28 или 28,9'/>
<FormText className='text-muted' ></FormText>
</FormGroup>

<div>
    <button type="button" class="btn btn-outline-dark m-2" >Рассчитать</button>
    <button type="button" class="btn btn-outline-dark m-2 ">Очистить</button>
    </div>


    <FormGroup>
    <FormLabel>Результат расчета:</FormLabel>
<FormControl type='text' placeholder=''/>
<FormText className='text-muted' ></FormText>
    </FormGroup>

    
  </Form>
 </ModalBody>
</Modal>



</>
  );
}

export default Price;