import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormGroup, FormCheck } from 'react-bootstrap';
import { dataPlus } from './dataPlus';


function Price() {

    const [show, setShow] = useState(false);
       
    const handlClick = () => {
      setShow(show => !show);
    };


  const [checked, setChecked] = useState(true);

   
   
  return (
<div class="d-grid gap-2 col-6 mx-auto m-4 ">
<button class="btn btn-outline-light text-center" type="button"  onClick={ handlClick }>Рассчитай свой вариант</button>
{show && dataPlus.map ((element => {
      const {id,service, price } = element;
           
      return (     
      
           <FormGroup key={id} class="mt-2" controlId='fromBasicKvadrat'>
           <FormCheck  type='checkbox' checked={checked} onChange={() => setChecked(!checked)} 
            /> 
            <h4> {service} { price} ₽/м2</h4> 
          </FormGroup>
          

        )
// здесь должен быть инпут, куда пользователь вводит кол-во кв местров. При вставке, 
//получается данный элекмент под каждым чек боксом, так не должно быть. куда вставить элемент ниже? 
    
// <FormGroup>
//   <h4>Сколько квадратных метров ваш объект?</h4>
// <FormControl type='text' placeholder='введите цифру или цифру с запятой: 28 или 28,9'></FormControl>
// <FormText className='text-muted' ></FormText>
// </FormGroup> 

// Тут должна быть кнопка "Узнать стоимость" - эта кнопка складывает выделенные пользователем элементы. 

// но есть нюанс - есть позиции, которые единоразовые или % , я их определила в dataOne.

  }))}
  </div>
)
}

export default Price;


// {/* <FormLabel>Сколько квадратных метров ваш объект?</FormLabel>
// <FormControl type='text' placeholder='введите цифру или цифру с запятой: 28 или 28,9'/>
// <FormText className='text-muted' ></FormText>

// <div>
// <button  type="button" class="btn btn-outline-dark m-2"> Рассчитать</button>
// <button type="button" class="btn btn-outline-dark m-2 "> Очистить</button>
//  </div>

//  <FormGroup>
//   <FormLabel>Результат расчета:</FormLabel>
// <FormControl type='text' placeholder=''/>
// <FormText className='text-muted' ></FormText>
//    </FormGroup> */}


/* <div key={id}> 
                        <div>
                          
                        <h3>{service}</h3>
                        <h4>{price} ₽/м2</h4>
                        </div>
                    </div> */

/* <div  class='text-center pt-2 py-5'>
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
   

    {/* Ниже не умножаются на кв метры, а просто прибаляются: */

    // <FormGroup controlId='fromBasicCheckbox' className='mt-2'>
    //   <FormCheck type='checkbox' label="Выезд специалиста одноразовый – 5 000 ₽ "/>
    // </FormGroup>

    // <FormGroup controlId='fromBasicCheckbox' className='mt-2'>
    //   <FormCheck type='checkbox' label="Первичная консультация на объекте – 5000 ₽ "/>
    // </FormGroup>

    // <FormGroup controlId='fromBasicCheckbox' className='mt-2'>
    //   <FormCheck type='checkbox' label="Смета на все виды работ – 3% от общей стоимости"/>
    // </FormGroup>

    // <FormGroup controlId='fromBasicCheckbox' className='mt-2'>
    //   <FormCheck type='checkbox' label="Контроль ежедневный за ходом всех видов работ – 5% от общей стоимости "/>
    // </FormGroup>

//     <FormLabel>Сколько квадратных метров ваш объект?</FormLabel>
// <FormControl type='text' placeholder='введите цифру или цифру с запятой: 28 или 28,9'/>
// <FormText className='text-muted' ></FormText>
// </FormGroup>

// <div>
//     <button type="button" class="btn btn-outline-dark m-2" >Рассчитать</button>
//     <button type="button" class="btn btn-outline-dark m-2 ">Очистить</button>
//     </div>


//     <FormGroup>
//     <FormLabel>Результат расчета:</FormLabel>
// <FormControl type='text' placeholder=''/>
// <FormText className='text-muted' ></FormText>
//     </FormGroup>

    
//   </Form>
//  </ModalBody>
// </Modal>

// </>
//   );
// } */}

