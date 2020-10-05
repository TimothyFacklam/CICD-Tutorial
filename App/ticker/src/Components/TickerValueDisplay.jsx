import React from 'react';
import '../Styling/buttons.css'

export default class TickerValueDisplay extends React.Component{
    render(){
        let label = this.props.value
        return <h1 className="tickerDisplay" >{label}</h1>
    }
}