import React from 'react'

class Calculator extends React.Component {
  state = {
    display: 0,
    firstNum: 3,
    secondNum: 3,
    result: 6
  }

  handleNumChange = (e, num) => {
    this.setState({ [num]: e.target.value })
    console.log('numchange')
  }

  handleResult = ( e, firstNum, secondNum ) => {
    let newResult = parseInt(this.state.firstNum) + parseInt(this.state.secondNum)
    this.setState({ result: newResult })
  }

  render() {
    return(
      <div className="container">
        <h1>Add with React!</h1>

        <div className="add">
          <input type="number"
          name="firstNum"
          value={this.state.firstNum}
          onChange={ (e) => this.handleNumChange(e, 'firstNum')}
          />
          <span>+</span>
            <input type="number"
            name="secondNum"
            value={this.state.secondNum}
            onChange={ (e) => this.handleNumChange(e, 'secondNum')}
            />
          <button onClick={ (e) => this.handleResult(e, 'firstNum', 'secondNum' ) }>=</button>
          <h3>{this.state.result}</h3>
        </div>
      </div>
    )
  }
}


export default Calculator
