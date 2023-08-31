import React from 'react';
import Button from '@mui/material/Button';
import './style.css';

const CustomButton = (props) => {

    return <Button variant="contained">{props.text}</Button>

}

export default CustomButton;