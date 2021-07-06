import { FormEvent, useState } from "react";
import Modal from "react-modal";
import { Container, TransactionsTypeContainer, RadioBox } from "./styles";
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import  closeImg  from '../../assets/close.svg'
import { api } from "../../services/api";


interface ModalProps {
    isOpen: boolean ,
    onRequestClose: () => void,
}


export function NewTransactionModal ({isOpen, onRequestClose}:ModalProps) {

    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');




    function handlerCreateNewTransaction (event: FormEvent) {
        event.preventDefault();

        const data = {
            title, 
            value,
            category, 
            type,
        };

        api.post('/transactions', data)
        
    }
    
    return(
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='ract-modal-content'
        >
            <button 
              type='button'
              onClick={onRequestClose} 
              className='react-modal-close'
              >

              <img src={closeImg} alt="Entrada" />
                
            </button>

          <Container onSubmit={handlerCreateNewTransaction}>

            <h2>Cadastrar transação</h2>

            <input 
                placeholder='Título'
                value={title}
                onChange={event => setTitle(event.target.value)}
             />

            <input 
            placeholder="Valor"
            type='number'
            value={value}
            onChange={event => setValue(Number(event.target.value))}
             />

             <TransactionsTypeContainer>
                 <RadioBox 
                 type="button"
                 onClick={() => {setType('deposit')}}
                 isActive= {type == 'deposit'}
                 activeColor="green"
                 >
                     <img src={incomeImg} alt="Entrada" />
                     <span>Entrada</span>

                 </RadioBox>

                 <RadioBox 
                 type="button"
                 onClick={() => {setType('withdraw')}}
                 isActive= {type == 'withdraw'}
                 activeColor="red"
                 
                 >
                     <img src={outcomeImg} alt="Saida" />
                     <span>Saida</span>

                 </RadioBox>
             </TransactionsTypeContainer>

             <input 
             placeholder="Categoria"
             value={category}
             onChange={event => setCategory(event.target.value)}
             />

             <button type="submit">
                 Cadastrar
             </button>

          </Container>
          
          
      </Modal>
    )
}