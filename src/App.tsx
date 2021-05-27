import { Header } from './components/Header/index';
import { Dashboard } from './components/Dashboard';
import { GlobalStyled } from './styles/global';

 export function App() { 
  return (
    <>
      <Header />
      <Dashboard />
      
      <GlobalStyled />
    </>
  );
}


