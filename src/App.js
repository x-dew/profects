import './App.css';
import Header from "./components/header";
import Cards from "./components/Card";

function App() {
    return (
        <div className="App">
            <div className='container'>
                <Header/>
                <Cards/>
            </div>
        </div>
    );
}

export default App;
