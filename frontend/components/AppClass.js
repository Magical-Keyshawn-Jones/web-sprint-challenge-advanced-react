import React from 'react'

export default class AppClass extends React.Component {
  
  state={
    playerMovement: 0,
    coordinates: `(2,2)`,
    // '', '','','', 'B','','', '','',
    grid: ['', '','','', 'B','','', '',''],
      // '0', '1','2', 
      // '3','4','5',
      // '6','7','8',

      // '1,1', '2,1','3,1',
      // '1,2','2,2','3,2',
      // '1,3','2,3','3,3',
    message: '',
    squaring: document.getElementsByClassName('square')
  };

  handleLeft = () => {
    const number = this.state.grid.indexOf('B')
    const player = this.state.playerMovement
    const newGrid = this.state.grid
    const square = document.getElementsByClassName('square')

      switch(newGrid[number]){
        case newGrid[0]:
        case newGrid[3]:
        case newGrid[6]:
          this.setState({...this.state, message: `You can't go left`})
          console.log(`too far left`)
          break;
        case newGrid[2]:
          newGrid[2]='';
          square[2].classList.toggle('active')
          newGrid[1]='B';
          square[1].classList.toggle('active')
          this.setState({...this.state, grid: newGrid, playerMovement: player + 1, coordinates: `(2,1)`})
          break;
        case newGrid[1]:
          newGrid[1]='';
          square[1].classList.toggle('active')
          newGrid[0]='B';
          square[0].classList.toggle('active')
          this.setState({...this.state, grid: newGrid, playerMovement: player + 1, coordinates: `(1,1)`})
          break;
        case newGrid[5]:
          newGrid[5]='';
          square[5].classList.toggle('active')
          newGrid[4]='B';
          square[4].classList.toggle('active')
          this.setState({...this.state, grid: newGrid, playerMovement: player + 1, coordinates: `(2,2)`})
          break;
        case newGrid[4]:
          newGrid[4]='';
          square[4].classList.toggle('active')
          newGrid[3]='B';
          square[3].classList.toggle('active')
          this.setState({...this.state, grid: newGrid, playerMovement: player + 1, coordinates: `(1,2)`})
          break;
        case newGrid[8]:
          newGrid[8]='';
          square[8].classList.toggle('active')
          newGrid[7]='B';
          square[7].classList.toggle('active')
          this.setState({...this.state, grid: newGrid, playerMovement: player + 1, coordinates: `(2,3)`})
          break;
        case newGrid[7]:
          newGrid[7]='';
          square[7].classList.toggle('active')
          newGrid[6]='B';
          square[6].classList.toggle('active')
          this.setState({...this.state, grid: newGrid, playerMovement: player + 1, coordinates: `(1,3)`})
          break;
      }

  }

  handleUp(){
    const number = this.state.grid.indexOf('B')
    const newGrid = this.state.grid
    const player = this.state.playerMovement
    const square = document.getElementsByClassName('square')

      switch(newGrid[number]){
        case newGrid[0]:
        case newGrid[1]:
        case newGrid[2]:
          this.setState({...this.state, message: `You can't go up`})
          console.log(`too far up`)
          break;
        case newGrid[6]:
          newGrid[6]='';
          square[6].classList.toggle('active')
          newGrid[3]='B';
          square[3].classList.toggle('active')
          this.setState({...this.state, grid: newGrid, playerMovement: player + 1, coordinates: `(1,2)`})
          break;
        case newGrid[7]:
          newGrid[7]='';
          square[7].classList.toggle('active')
          newGrid[4]='B';
          square[4].classList.toggle('active')
          this.setState({...this.state, grid: newGrid, playerMovement: player + 1, coordinates: `(2,2)`})
          break;
        case newGrid[8]:
          newGrid[8]='';
          square[8].classList.toggle('active')
          newGrid[5]='B';
          square[5].classList.toggle('active')
          this.setState({...this.state, grid: newGrid, playerMovement: player + 1, coordinates: `(3,2)`})
          break;
        case newGrid[3]:
          newGrid[3]='';
          square[3].classList.toggle('active')
          newGrid[0]='B';
          square[0].classList.toggle('active')
          this.setState({...this.state, grid: newGrid, playerMovement: player + 1, coordinates: `(1,1)`})
          break;
        case newGrid[4]:
          newGrid[4]='';
          square[4].classList.toggle('active')
          newGrid[1]='B';
          square[1].classList.toggle('active')
          this.setState({...this.state, grid: newGrid, playerMovement: player + 1, coordinates: `(2,1)`})
          break;
        case newGrid[5]:
          newGrid[5]='';
          square[5].classList.toggle('active')
          newGrid[2]='B';
          square[2].classList.toggle('active')
          this.setState({...this.state, grid: newGrid, playerMovement: player + 1, coordinates: `(3,1)`})
          break;
      }

  }

  handleRight = () => {
    const number = this.state.grid.indexOf('B')
    const newGrid = this.state.grid
    const player = this.state.playerMovement
    const square = document.getElementsByClassName('square')
  
      switch(newGrid[number]){
        case newGrid[2]:
        case newGrid[5]:
        case newGrid[8]:
          this.setState({...this.state, message: `You can't go right`})
          console.log(`too far right`)
          break;
        case newGrid[0]:
          newGrid[0]='';
          square[0].classList.toggle('active')
          newGrid[1]='B';
          square[1].classList.toggle('active')
          this.setState({...this.state, grid: newGrid, playerMovement: player + 1, coordinates: `(2,1)`})
          break;
        case newGrid[1]:
          newGrid[1]='';
          square[1].classList.toggle('active')
          newGrid[2]='B';
          square[2].classList.toggle('active')
          this.setState({...this.state, grid: newGrid, playerMovement: player + 1, coordinates: `(3,1)`})
          break;
        case newGrid[3]:
          newGrid[3]='';
          square[3].classList.toggle('active')
          newGrid[4]='B';
          square[4].classList.toggle('active')
          this.setState({...this.state, grid: newGrid, playerMovement: player + 1, coordinates: `(2,2)`})
          break;
        case newGrid[4]:
          newGrid[4]='';
          square[4].classList.toggle('active')
          newGrid[5]='B';
          square[5].classList.toggle('active')
          this.setState({...this.state, grid: newGrid, playerMovement: player + 1, coordinates: `(3,2)`})
          break;
        case newGrid[6]:
          newGrid[6]='';
          square[6].classList.toggle('active')
          newGrid[7]='B';
          square[7].classList.toggle('active')
          this.setState({...this.state, grid: newGrid, playerMovement: player + 1, coordinates: `(2,3)`})
          break;
        case newGrid[7]:
          newGrid[7]='';
          square[7].classList.toggle('active')
          newGrid[8]='B';
          square[8].classList.toggle('active')
          this.setState({...this.state, grid: newGrid, playerMovement: player + 1, coordinates: `(3,3)`})
          break;
      }

  }

  handleDown(){
    const number = this.state.grid.indexOf('B')
    const player = this.state.playerMovement
    const newGrid = this.state.grid
    const square = document.getElementsByClassName('square')


      switch(newGrid[number]){
        case newGrid[6]:
        case newGrid[7]:
        case newGrid[8]:
          this.setState({...this.state, message: `You can't go down`})
          console.log(`too far left`)
          break;
        case newGrid[0]:
          newGrid[0]='';
          square[0].classList.toggle('active')
          newGrid[3]='B';
          square[3].classList.toggle('active')
          this.setState({...this.state, grid: newGrid, playerMovement: player + 1, coordinates: `(1,2)`})
          break;
        case newGrid[1]:
          newGrid[1]='';
          square[1].classList.toggle('active')
          newGrid[4]='B';
          square[4].classList.toggle('active')
          this.setState({...this.state, grid: newGrid, playerMovement: player + 1, coordinates: `(2,2)`})
          break;
        case newGrid[2]:
          newGrid[2]='';
          square[2].classList.toggle('active')
          newGrid[5]='B';
          square[5].classList.toggle('active')
          this.setState({...this.state, grid: newGrid, playerMovement: player + 1, coordinates: `(3,2)`})
          break;
        case newGrid[3]:
          newGrid[3]='';
          square[3].classList.toggle('active')
          newGrid[6]='B';
          square[6].classList.toggle('active')
          this.setState({...this.state, grid: newGrid, playerMovement: player + 1, coordinates: `(1,3)`})
          break;
        case newGrid[4]:
          newGrid[4]='';
          square[4].classList.toggle('active')
          newGrid[7]='B';
          square[7].classList.toggle('active')
          this.setState({...this.state, grid: newGrid, playerMovement: player + 1, coordinates: `(2,3)`})
          break;
        case newGrid[5]:
          newGrid[5]='';
          square[5].classList.toggle('active')
          newGrid[8]='B';
          this.setState({...this.state, grid: newGrid, playerMovement: player + 1, coordinates: `(3,3)`})
          break;
      }
    
  }

  handleReset(){
    const square = document.getElementsByClassName('square')
    this.setState({...this.state,
      grid: ['', '','','', 'B','','', '','',],
      playerMovement: 0,
      message: '',
      coordinates: `(2,2)`,
    })
    square[0].classList.remove('active')
    square[1].classList.remove('active')
    square[2].classList.remove('active')
    square[3].classList.remove('active')
    square[4].classList.remove('active')
    square[5].classList.remove('active')
    square[6].classList.remove('active')
    square[7].classList.remove('active')
    square[8].classList.remove('active')

    square[4].classList.add('active')
  }

  handleSubmit(e){
    e.preventDefault()
  }

  render() {
    const { className } = this.props
    const square = document.getElementsByClassName('square')
    // square[4].classList.add('active')
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">Coordinates {this.state.coordinates}</h3>
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
          <h3 id="message">{this.state.message}</h3>
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
          <input id="submit" type="submit" onClick={(e)=>{this.handleSubmit(e)}} ></input>
        </form>
      </div>
    )
  }
}
