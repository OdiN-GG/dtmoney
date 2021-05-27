import { useEffect } from "react";
import { Container } from "./styles";


export function TransactionsTable(){

    useEffect(() => {
        fetch('http://localhost:3000/api/transactions')
            .then(response => response.json())
            .then(data => console.log('teste', data))

    }, []);

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th> 
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de Sites</td>
                        <td className='entrada'>R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>02/02/2022</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className='saida'>R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>02/02/2022</td>
                    </tr>
                     
                </tbody>
            </table>
        </Container>
    );
};