import React from 'react'
import './../styles/header.css'
import {CustomInput, Form, FormGroup, Label} from 'reactstrap';


const Header = (props) => {

    const {section, setFilters, filter, input} = props

    return (
        <div className='header flex'>
            <div className='header-menu flex'>
                <h1>Все проекты</h1>
                <div>
                    <ul className='flex header-list'>
                        <li
                            onClick={() => {
                                setFilters('section', null)
                            }}
                            className={filter.section === null ? 'active-list' : ''}
                        >
                            Все
                        </li>
                        {
                            section.map((value, index) => {
                                return <li
                                    className={filter.section === value.id ? 'active-list' : ''}
                                    onClick={(event) => {
                                        setFilters('section', value.id)
                                    }}
                                    key={index}
                                >
                                    {value.name}
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
            <div>
                <Form>
                    <FormGroup style={{cursor: 'pointer'}} className='form-switch flex'>
                        <p>Только доступные к инвестированию </p>
                        <CustomInput
                            type="switch"
                            id="exampleCustomSwitch"
                            name="customSwitch"
                            onClick={() => {
                                setFilters('position', !filter.position)
                            }}
                        />
                    </FormGroup>
                </Form>
            </div>
        </div>
    )


}
export default Header