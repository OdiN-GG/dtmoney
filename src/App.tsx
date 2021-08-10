import { useState } from 'react';
import Modal from 'react-modal';

import { Header } from './components/Header/index';
import { Dashboard } from './components/Dashboard';
import { GlobalStyled } from './styles/global';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './TransactionContext';

Modal.setAppElement('#root');

 export function App() { 

  const [isNewTransactionModalOpen, setNewTransaxctionModalOpen] = useState(false)

    function handlerOpenNewTransactionModal (){
        setNewTransaxctionModalOpen(true)
    }

    function handlerColseNewTransactiomodal () {
        setNewTransaxctionModalOpen(false)
    }
    
  return (
    <TransactionsProvider>

      <Header onOpenNewTransactionModal={handlerOpenNewTransactionModal}/>

      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handlerColseNewTransactiomodal}
      />

      <GlobalStyled />
      
    </TransactionsProvider>
  );
}


