import React from 'react'
import './../styles/header.css'
import {CustomInput, Form, FormGroup, Label} from 'reactstrap';


const Header = (props) => {

    const {section, setFilter, setSection, filter} = props
    let sections = section.concat()


    return (
        <div className='header flex'>
            <div className='header-menu flex'>
                <h1>Все проекты</h1>
                <div>
                    <ul className='flex header-list'>
                        <li onClick={() => {
                            setSection(null)
                        }} className={filter.section === null ? 'active-list' : ''}>Все
                        </li>
                        {
                            sections.map((value, index) => {
                                return <li className={filter.section === value.id ? 'active-list' : ''}
                                    onClick={(event) => {
                                        setSection(value.id)
                                    }
                                    } key={index}>{value.name}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
            <div>
                <Form>
                    <FormGroup className='form-switch flex'>
                        <p>Только доступные к инвестированию </p>
                        <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch"/>
                    </FormGroup>
                </Form>
            </div>
        </div>
    )


}
export default Header