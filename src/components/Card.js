import React from "react";
import './../styles/card.css'
import {Progress} from 'reactstrap';
import Img from './../img/Vector.png'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';


const Cards = (props) => {
    return (
        <div className='card'>
            <Card>
                <div className='card-img'>
                    <div className='card-img__text'>
                        <a href="#">Заем</a>
                        <p>Срок займа: <span>5 лет</span></p>
                    </div>
                    <div>
                        <p>Минимальная сумма сделки: <span>100 000 ₽</span></p>
                    </div>
                </div>
                <CardBody>
                    <CardTitle className='card-number'>№55671234</CardTitle>
                    <CardSubtitle className="card-company">ООО “Компания”
                    <div className='card-company__logo'><p>A+</p></div>
                    </CardSubtitle>
                    <CardText className='card-texts'>Заголовок проекта пять шесть десять слов</CardText>
                    <div className='card-security'>
                        <p>Обеспечение:<span>Есть</span></p>
                    </div>
                    <div className='progress-card'>
                        <Progress multi>
                            <Progress bar color="success" value="30"/>
                            <Progress bar color="white" value="0.5"/>
                            <Progress bar color="success" value="20"/>
                        </Progress>
                    </div>
                    <div className='card-table'>
                        <div style={{width:'100%'}}>
                            <h3>17%</h3>
                            <p>доходность</p>
                        </div>
                        <div className='border-card'>
                            <h3>10 000 000 ₽</h3>
                            <p>Целевая сумма</p>
                        </div>
                        <div style={{width:'100%'}}>
                            <h3>53</h3>
                            <p>инвесторы</p>
                        </div>
                    </div>
                    <div className='card-bottom'>
                        <Button className='bottom'>Подробнее <img src={Img} alt=""/></Button>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}
export default Cards