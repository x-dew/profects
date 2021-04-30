import React from "react";
import './../styles/card.css'
import {Progress} from 'reactstrap';
import Img from './../img/Vector.png'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Cards = (props) => {

    const {quantity} = props
    return (

            <Card className='card mb-5 w-444'>
                <div className='card-img'>
                    <div className='card-img__text'>
                        <a href="#">{quantity.section}</a>
                        <p>{quantity.term}<span>{quantity.termAge}</span></p>
                    </div>
                    <div>
                        <p>{quantity.sum}<span>{quantity.summa}</span></p>
                    </div>
                </div>
                <CardBody>
                    <CardTitle className='card-number'>{quantity.numberCard}</CardTitle>
                    <CardSubtitle className="card-company">{quantity.company}
                    <div className='card-company__logo'><p>A+</p></div>
                    </CardSubtitle>
                    <CardText className='card-texts'>{quantity.title}</CardText>
                    <div className='card-security'>
                        <p>Обеспечение:<span>{quantity.security}</span></p>
                    </div>
                    <div className='progress-card'>
                        <Progress multi>
                            <Progress bar color="success" value="40"/>
                        </Progress>
                    </div>
                    <div className='card-table'>
                        <div style={{width:'100%'}}>
                            <h3>{quantity.profitability}</h3>
                            <p>доходность</p>
                        </div>
                        <div className='border-card'>
                            <h3>{quantity.targetAmount}</h3>
                            <p>Целевая сумма</p>
                        </div>
                        <div style={{width:'100%'}}>
                            <h3>{quantity.investors}</h3>
                            <p>инвесторы</p>
                        </div>
                    </div>
                    <div className='card-bottom'>
                        <Button className='bottom'>Подробнее <img src={Img} alt=""/></Button>
                    </div>
                </CardBody>
            </Card>

    )
}
export default Cards