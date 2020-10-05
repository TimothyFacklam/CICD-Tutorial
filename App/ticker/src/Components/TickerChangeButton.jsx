import React from 'react';
import '../Styling/buttons.css'

export default class TickerChangeButton extends React.Component{
    render(){
        let onChange = this.props.onChange
        let label = this.props.label
        return <button onClick={onChange} className="tickerChanger" >{label}</button>
    }
}