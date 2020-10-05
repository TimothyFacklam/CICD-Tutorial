import React from 'react';
import TickerChangeButton from './TickerChangeButton'
import TickerValueDisplay from './TickerValueDisplay'
import '../Styling/divStyling.css'
import TickerController from '../Controllers/TickerController';

export default class Ticker extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            tickerValue: 1
        }

        this.controller = new TickerController()
        this.handleDecrement = this.handleDecrement.bind(this)
        this.handleIncrement = this.handleIncrement.bind(this)
    }
    
    handleDecrement(){
        this.setState({
            tickerValue: this.controller.decrement(this.state.tickerValue)
        })
        console.log("Decrementing")
    }
    handleIncrement(){
        this.setState({
            tickerValue: this.controller.increment(this.state.tickerValue)
        })

        console.log("Incrementing")
    }

    render(){

        let addButton = <TickerChangeButton onChange={this.handleIncrement} label="+" />
        let subtractButton = <TickerChangeButton onChange={this.handleDecrement} label="-" />
        let valueDisplay = <TickerValueDisplay value={this.state.tickerValue} />

        return (
        <div className="Column">

                {valueDisplay}
                
                <div className="Row">
                    {subtractButton}
                    {addButton}
                </div>
        </div>)

    
    }
}