import React from 'react';
import './Input.css';

export default function Input(props) {
    return (
        <input type="text" placeholder={props.placeholder} onChange={props.onChange} />
    )
}
