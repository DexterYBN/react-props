import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'

function Goods(props) {
    return (
        <div className="goods-block">
                <img src={props.image} alt={props.title} />
            <h3>{props.title}</h3>
            <p>{props.cost}</p>
            <Button variant='primary'>Купить</Button>
        </div>
    )
}

export default Goods;