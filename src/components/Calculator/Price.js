import { useState, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody, Form, FormGroup, FormLabel, FormControl, FormText, FormCheck } from 'react-bootstrap';
import { dataPlus } from './dataPlus';


function Price() {

    const [show, setShow] = useState(false);
       
    const handlClick = () => {
      setShow(show => !show);
    };


    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleChange = event => {
      if (event.target.checked) {
        //как написать что это true?
          console.log('✅ Checkbox is checked');
      } else {
        console.log('⛔️ Checkbox is NOT checked');
      }
      setIsSubscribed(current => !current);
    };



    const initialState = {
      items : 0,
      isTikining: false
      }
      

    function reduser (state, action) {
      switch (action.type) {
         case 'sum': return{ ...state,isTikining: true }; 
       default: return state;
      }
    }, result = isSubscribed.reduce((sum, next) => sum && next.status, true);

    
    

  return (

    const [state, dispatch] = useReducer [reduser, {count: 0}]


<div>
<button type="button" class="btn btn-outline-light text-center mx-auto" onClick={ handlClick }>Рассчитай свой вариант</button>
{show && dataPlus.map ((element => {
      const {id,  service, price } = element;
           return (     
            
            <Modal>           
            <ModalBody>
           <Form>
           <FormGroup controlId='fromBasicKvadrat'>
              <FormGroup controlId='fromBasicCheckbox' className='mt-2'>
               <FormCheck disabled={!isSubscribed} type='checkbox' label= {id.service.price} input
                  value={isSubscribed}
                  onChange={handleChange} />
                            <div key={id}> 
                        <div>
                          <h3>{service}</h3>
                        <h4>{price} ₽/м2</h4>
                        </div>
                    </div>
                    </FormGroup>
                   
        <FormLabel>Сколько квадратных метров ваш объект?</FormLabel>
<FormControl type='text' placeholder='введите цифру или цифру с запятой: 28 или 28,9'/>
<FormText className='text-muted' ></FormText>
</FormGroup>


<div>
<button onClick={() => dispatch ({type: 'sum'})}  type="button" class="btn btn-outline-dark m-2" >Рассчитать</button>
<button type="button" class="btn btn-outline-dark m-2 ">Очистить</button>
 </div>

 <FormGroup>
  <FormLabel>Результат расчета:</FormLabel>
<FormControl type='text' placeholder=''/>
<FormText className='text-muted' >{state.count}</FormText>
   </FormGroup>

        </Form>
        </ModalBody>
          </Modal> 
           )

           }))}
  </div>
)
}

export default Price;



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

