import './App.css';
import {useState} from 'react'
import Header from "./components/header";
import Cards from "./components/Card";

function App(props) {
    const [quantity, setQuantity] = useState([
        {
            section:'Заем',
            term: 'Срок займа:',
            termAge:' 5 лет',
            sum:'Минимальная сумма сделки:',
            summa:' 100 000 ₽',
            numberCard: '№55671234',
            company:'ООО “Компания”',
            title:'Заголовок проекта пять шесть десять слов',
            security: 'Есть',
            profitability: '17%',
            targetAmount:'10 000 000 ₽',
            investors:'53'
        }

    ])

    return (
        <div className="App">
            <div className='container'>
                <Header/>
                <div className='cards'>
                   <Cards quantity={quantity[0]}/>
                </div>
            </div>
        </div>
    );
}

export default App;
