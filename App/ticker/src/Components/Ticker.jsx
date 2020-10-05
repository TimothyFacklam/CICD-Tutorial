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

        

        this.rangeMax = 10
        this.rangeMin = -10

        this.controller = new TickerController()
        this.handleRangedToggle = this.handleRangedToggle.bind(this)
        this.handleDecrement = this.handleDecrement.bind(this)
        this.handleIncrement = this.handleIncrement.bind(this)
    }
    
    handleDecrement(){
        this.setState({
            tickerValue: this.controller.decrement(this.state.tickerValue)
        })
        console.log(`Decrementing ${this.state.tickerValue}`)
    }
    handleIncrement(){
        this.setState({
            tickerValue: this.controller.increment(this.state.tickerValue)
        })

        console.log(`Incrementing ${this.state.tickerValue}`)
    }

    handleRangedToggle(state){
        if(state){
            this.controller.setRange(this.rangeMin, this.rangeMax)
            if (this.state.tickerValue > this.rangeMax){
                this.setState({
                    tickerValue: this.rangeMax
                })
            }
            else if (this.state.tickerValue < this.rangeMin){
                this.setState({
                    tickerValue: this.rangeMin
                })
            }
            else
            {
                this.setState({...this.state})
            }
        }
        else{
            this.controller.removeRange()
            this.setState({...this.state})
        }
        
            
    }

    render(){

        let addButton = <TickerChangeButton onChange={this.handleIncrement} label="+" />
        let subtractButton = <TickerChangeButton onChange={this.handleDecrement} label="-" />
        let valueDisplay = <TickerValueDisplay value={this.state.tickerValue} />

        return (
        <div className="Column">
                <h1>CICD Tutorial: Ticker</h1>
                <form >
                    <label for="rangedMode">Ranged Mode:</label>
                    <input id="rangedMode" type="checkbox" onChange ={(event) =>{this.handleRangedToggle(event.target.checked)}}></input>
                </form>
                
                {this.controller.ranged ? <h4>Limited from {this.rangeMin} to {this.rangeMax}</h4> : <div/>}
                {valueDisplay}
                
                <div className="Row">
                    {subtractButton}
                    {addButton}
                </div>
        </div>)

    
    }
}