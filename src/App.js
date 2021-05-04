import './App.css';
import {useState} from 'react'
import Header from "./components/header";
import Card from "./components/Card";

function App(props) {

    const [sections, setSections] = useState([
        {id: 595996, name: 'Займы'},
        {id: 259854, name: 'Доли'},
        {id: 665, name: 'Акции'}
    ])

    const [filter, setFilter] = useState({
        section: null
    })

    const [projects, setProjects] = useState([
        {
            id: 595996,
            section_id: 595996,
            termAge: 5,
            summa: 100000,
            company: 'ООО “Компания”',
            title: 'Заголовок проекта пять шесть десять слов',
            security: false,
            profitability: 17,
            targetAmount: 200000000,
            investors: 53
        },
        {
            id: 259854,
            section_id: 259854,
            termAge: 10,
            summa: 50000,
            company: 'ООО “Компания”',
            title: 'Заголовок проекта пять шесть десять слов',
            security: true,
            profitability: 25,
            targetAmount: 5000000,
            investors: 35
        },
        {
            id: 625,
            section_id: 665,
            termAge: 10,
            summa: 200000,
            company: 'ООО “Компания”',
            title: 'Заголовок проекта пять шесть десять слов',
            security: true,
            profitability: 25,
            targetAmount: 100000000,
            investors: 45
        },
        {
            id: 259854,
            section_id: 259854,
            termAge: 10,
            summa: 50000,
            company: 'ООО “Компания”',
            title: 'Заголовок проекта пять шесть десять слов',
            security: true,
            profitability: 25,
            targetAmount: 5000000,
            investors: 35
        },
    ])

    const setSection = (id) => {
        setFilter(() => ({
            ...filter,
            section: id
        }))
    }

    const filterProject = (project) => {
            if (filter.section === null) {
                return true
            }
            return filter.section === project.section_id
    }

    return (
        <div className="App">
            <div className='container'>
                <Header section={sections}
                        setSection={setSection}
                        filter={filter}
                        setFilter={setFilter}
                />
                <div className='cards'>
                    {
                        projects.filter(filterProject).map((project, index) => <Card key={index} project={project} sections={sections}/>)
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
