import React from 'react'
import './../style/header.css'
import {CustomInput, Form, FormGroup, Label} from 'reactstrap';


const Header = (props) => {
    return (
        <div className='header flex'>
            <div className='header-menu flex'>
                <h1>Все проекты</h1>
                <div>
                    <ul className='flex header-list'>
                        <li className='active-list'>Все</li>
                        <li>Займы</li>
                        <li>Доли</li>
                        <li>Акции</li>
                    </ul>
                </div>
            </div>
            <div>
                <Form>
                    <FormGroup className='form-switch flex'>
                        <p>Только доступные к инвестированию </p>
                            <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch"  />
                    </FormGroup>
                </Form>
            </div>
        </div>
    )


}
export default Header