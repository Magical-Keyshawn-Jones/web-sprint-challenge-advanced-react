import React from 'react'

export default class AppClass extends React.Component {
  
  state={
    playerMovement: 0,
    coordinates: 0,
    // '', '','','', 'B','','', '','',
    grid: ['', '','','', 'B','','', '','',
      // '0', '1','2',
      // '3','4','5',
      // '6','7','8',
    ]
  };

  handleLeft(){
    const number = this.state.grid.indexOf('B')
    const player = this.state.playerMovement
    const newGrid = this.state.grid

    function selector (number) {
      switch(newGrid[number]){
        case newGrid[0]:
        case newGrid[3]:
        case newGrid[6]:
          console.log(`too far left`)
          break;
        case newGrid[2]:
          newGrid[2]='';
          newGrid[1]='B';
          break;
        case newGrid[1]:
          newGrid[1]='';
          newGrid[0]='B';
          break;
        case newGrid[5]:
          newGrid[5]='';
          newGrid[4]='B';
          break;
        case newGrid[4]:
          newGrid[4]='';
          newGrid[3]='B';
          break;
        case newGrid[8]:
          newGrid[8]='';
          newGrid[7]='B';
          break;
        case newGrid[7]:
          newGrid[7]='';
          newGrid[6]='B';
          break;
      }
    }
    
    selector(number)

    this.setState({...this.state, grid: newGrid, playerMovement: player + 1})
  }

  handleUp(){
    const number = this.state.grid.indexOf('B')
    const newGrid = this.state.grid
    const player = this.state.playerMovement

    function selector (number) {
      switch(newGrid[number]){
        case newGrid[0]:
        case newGrid[1]:
        case newGrid[2]:
          console.log(`too far up`)
          break;
        case newGrid[6]:
          newGrid[6]='';
          newGrid[3]='B';
          break;
        case newGrid[7]:
          newGrid[7]='';
          newGrid[4]='B';
          break;
        case newGrid[8]:
          newGrid[8]='';
          newGrid[5]='B';
          break;
        case newGrid[3]:
          newGrid[3]='';
          newGrid[0]='B';
          break;
        case newGrid[4]:
          newGrid[4]='';
          newGrid[1]='B';
          break;
        case newGrid[5]:
          newGrid[5]='';
          newGrid[2]='B';
          break;
      }
    }
      selector(number)

    this.setState({...this.state, grid: newGrid, playerMovement: player + 1})
  }

  handleRight = () => {
    const number = this.state.grid.indexOf('B')
    const newGrid = this.state.grid
    const player = this.state.playerMovement
  
    const selector = (number) =>{
      switch(newGrid[number]){
        case newGrid[2]:
        case newGrid[5]:
        case newGrid[8]:
          console.log(`too far right`)
          break;
        case newGrid[0]:
          newGrid[0]='';
          newGrid[1]='B';
          break;
        case newGrid[1]:
          newGrid[1]='';
          newGrid[2]='B';
          break;
        case newGrid[3]:
          newGrid[3]='';
          newGrid[4]='B';
          break;
        case newGrid[4]:
          newGrid[4]='';
          newGrid[5]='B';
          break;
        case newGrid[6]:
          newGrid[6]='';
          newGrid[7]='B';
          break;
        case newGrid[7]:
          newGrid[7]='';
          newGrid[8]='B';
          break;
      }
    }
      selector(number)

    this.setState({...this.state, grid: newGrid, playerMovement: player + 1})
  }

  handleDown(){
    const number = this.state.grid.indexOf('B')
    const player = this.state.playerMovement
    const newGrid = this.state.grid

    function selector (number) {
      switch(newGrid[number]){
        case newGrid[6]:
        case newGrid[7]:
        case newGrid[8]:
          console.log(`too far left`)
          break;
        case newGrid[0]:
          newGrid[0]='';
          newGrid[3]='B';
          break;
        case newGrid[1]:
          newGrid[1]='';
          newGrid[4]='B';
          break;
        case newGrid[2]:
          newGrid[2]='';
          newGrid[5]='B';
          break;
        case newGrid[3]:
          newGrid[3]='';
          newGrid[6]='B';
          break;
        case newGrid[4]:
          newGrid[4]='';
          newGrid[7]='B';
          break;
        case newGrid[5]:
          newGrid[5]='';
          newGrid[8]='B';
          break;
      }
    }
    
    selector(number)

    this.setState({...this.state, grid: newGrid, playerMovement: player + 1})
  }

  handleReset(){
    this.setState({...this.state,
      grid: ['', '','','', 'B','','', '','',],
      playerMovement: 0
    })
  }

  render() {
    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">Coordinates (2, 2)</h3>
          <h3 id="steps">You moved {this.state.playerMovement} times</h3>
        </div>
        <div id="grid">
          {this.state.grid.map((item,index)=> {
            return (<div key={index} className="square">{item}</div>)
          })}
          
          {/* <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div> */}
        </div>
        <div className="info">
          <h3 id="message"></h3>
        </div>
        <div id="keypad">
          <button id="left" onClick={()=>{this.handleLeft()}} >LEFT</button>
          <button id="up" onClick={()=>{this.handleUp()}} >UP</button>
          <button id="right" onClick={()=>{this.handleRight()}} >RIGHT</button>
          <button id="down" onClick={()=>{this.handleDown()}} >DOWN</button>
          <button id="reset" onClick={()=>{this.handleReset()}} >reset</button>
        </div>
        <form>
          <input id="email" type="email" placeholder="type email"></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
