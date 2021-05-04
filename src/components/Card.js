import React from "react";
import './../styles/card.css'
import {Progress} from 'reactstrap';
import Img from './../img/Vector.png'
import {
    Card as Cards, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

export const Card = (props) => {

    const {project, sections} = props
    return (
        <Cards className='card mb-5 w-444'>
            <div className='card-img'>
                <div className='card-img__text'>
                    <a href="#">{
                        sections.find(value => value.id === project.section_id).name
                    }</a>
                    <p>Срок займа:<span>{project.termAge}лет</span></p>
                </div>
                <div>
                    <p>Минимальная сумма сделки: <span>{project.summa.toLocaleString('ru')} ₽</span></p>
                </div>
            </div>
            <CardBody>
                <CardTitle className='card-number'>№{project.id}</CardTitle>
                <CardSubtitle className="card-company">{project.company}
                    <div className='card-company__logo'><p>A+</p></div>
                </CardSubtitle>
                <CardText className='card-texts'>{project.title}</CardText>
                <div className='card-security'>
                    <p>Обеспечение:<span style={project.security === false ? {color: 'red'} : {color: 'green'}}>{
                        project.security === true ? 'Есть' : 'Нет'
                    }</span></p>
                </div>
                <div className='progress-card'>
                    <Progress multi>
                        <Progress bar color="success" value="40"/>
                    </Progress>
                </div>
                <div className='card-table'>
                    <div style={{width: '100%'}}>
                        <h3>{project.profitability}%</h3>
                        <p>доходность</p>
                    </div>
                    <div className='border-card'>
                        <h3>{project.targetAmount}</h3>
                        <p>Целевая сумма</p>
                    </div>
                    <div style={{width: '100%'}}>
                        <h3>{project.investors}</h3>
                        <p>инвесторы</p>
                    </div>
                </div>
                <div className='card-bottom'>
                    <Button className='bottom'>Подробнее <img src={Img} alt=""/></Button>
                </div>
            </CardBody>
        </Cards>

    )
}
export default Card
