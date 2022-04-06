import React from "react";
import './Button.css'

export default (props) => {
    return (
        <button onClick={_ => props.callBack(props.text)} className={
            `button
                ${props.operation ? 'operation' : ''}
                ${props.double ? 'double' : ''}
                ${props.triple ? 'triple' : ''}
             `}>
            {props.text}
        </button>
    )
}