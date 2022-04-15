import React, { useState, useEffect } from 'react'

export default function AppFunctional(props) {

  const junk = {
    playerMovement: 0,
    coordinates: `2,2`,
    grid: ['', '','','', 'B','','', '',''],
    message: '',
    email: '',
    naming: ''
  }
  const [ stuff, setStuff ] = useState(junk)

  useEffect(()=>{
    const square = document.getElementsByClassName('square')
    square[4].classList.add('active')
  },[])

  function handleLeft () {
    const number = stuff.grid.indexOf('B')
    const player = stuff.playerMovement
    const newGrid = stuff.grid
    const square = document.getElementsByClassName('square')

    switch(newGrid[number]){
      case newGrid[0]:
      case newGrid[3]:
      case newGrid[6]:
        setStuff({...stuff, message: `You can't go left`})
        console.log(`too far left`)
        break;
      case newGrid[2]:
        newGrid[2]='';
        square[2].classList.toggle('active')
        newGrid[1]='B';
        square[1].classList.toggle('active')
        setStuff({...stuff, grid: newGrid, playerMovement: player + 1, coordinates: `(2,1)`, message: ''})
        break;
      case newGrid[1]:
        newGrid[1]='';
        square[1].classList.toggle('active')
        newGrid[0]='B';
        square[0].classList.toggle('active')
        setStuff({...stuff, grid: newGrid, playerMovement: player + 1, coordinates: `(1,1)`, message: ''})
        break;
      case newGrid[5]:
        newGrid[5]='';
        square[5].classList.toggle('active')
        newGrid[4]='B';
        square[4].classList.toggle('active')
        setStuff({...stuff, grid: newGrid, playerMovement: player + 1, coordinates: `(2,2)`, message: ''})
        break;
      case newGrid[4]:
        newGrid[4]='';
        square[4].classList.toggle('active')
        newGrid[3]='B';
        square[3].classList.toggle('active')
        setStuff({...stuff, grid: newGrid, playerMovement: player + 1, coordinates: `(1,2)`, message: ''})
        break;
      case newGrid[8]:
        newGrid[8]='';
        square[8].classList.toggle('active')
        newGrid[7]='B';
        square[7].classList.toggle('active')
        setStuff({...stuff, grid: newGrid, playerMovement: player + 1, coordinates: `(2,3)`, message: ''})
        break;
      case newGrid[7]:
        newGrid[7]='';
        square[7].classList.toggle('active')
        newGrid[6]='B';
        square[6].classList.toggle('active')
        setStuff({...stuff, grid: newGrid, playerMovement: player + 1, coordinates: `(1,3)`, message: ''})
        break;
    }
  }

  function handUp () {
    const number = stuff.grid.indexOf('B')
    const player = stuff.playerMovement
    const newGrid = stuff.grid
    const square = document.getElementsByClassName('square')

    switch(newGrid[number]){
      case newGrid[0]:
      case newGrid[1]:
      case newGrid[2]:
        setStuff({...stuff, message: `You can't go up`})
        console.log(`too far up`)
        break;
      case newGrid[6]:
        newGrid[6]='';
        square[6].classList.toggle('active')
        newGrid[3]='B';
        square[3].classList.toggle('active')
        setStuff({...stuff, grid: newGrid, playerMovement: player + 1, coordinates: `(1,2)`, message: ''})
        break;
      case newGrid[7]:
        newGrid[7]='';
        square[7].classList.toggle('active')
        newGrid[4]='B';
        square[4].classList.toggle('active')
        setStuff({...stuff, grid: newGrid, playerMovement: player + 1, coordinates: `(2,2)`, message: ''})
        break;
      case newGrid[8]:
        newGrid[8]='';
        square[8].classList.toggle('active')
        newGrid[5]='B';
        square[5].classList.toggle('active')
        setStuff({...stuff, grid: newGrid, playerMovement: player + 1, coordinates: `(3,2)`, message: ''})
        break;
      case newGrid[3]:
        newGrid[3]='';
        square[3].classList.toggle('active')
        newGrid[0]='B';
        square[0].classList.toggle('active')
        setStuff({...stuff, grid: newGrid, playerMovement: player + 1, coordinates: `(1,1)`, message: ''})
        break;
      case newGrid[4]:
        newGrid[4]='';
        square[4].classList.toggle('active')
        newGrid[1]='B';
        square[1].classList.toggle('active')
        setStuff({...stuff, grid: newGrid, playerMovement: player + 1, coordinates: `(2,1)`, message: ''})
        break;
      case newGrid[5]:
        newGrid[5]='';
        square[5].classList.toggle('active')
        newGrid[2]='B';
        square[2].classList.toggle('active')
        setStuff({...stuff, grid: newGrid, playerMovement: player + 1, coordinates: `(3,1)`, message: ''})
        break;
    }
  }

  function handleRight () {
    const number = stuff.grid.indexOf('B')
    const player = stuff.playerMovement
    const newGrid = stuff.grid
    const square = document.getElementsByClassName('square')

    switch(newGrid[number]){
      case newGrid[2]:
      case newGrid[5]:
      case newGrid[8]:
        setStuff({...stuff, message: `You can't go right`})
        console.log(`too far right`)
        break;
      case newGrid[0]:
        newGrid[0]='';
        square[0].classList.toggle('active')
        newGrid[1]='B';
        square[1].classList.toggle('active')
        setStuff({...stuff, grid: newGrid, playerMovement: player + 1, coordinates: `(2,1)`, message: ''})
        break;
      case newGrid[1]:
        newGrid[1]='';
        square[1].classList.toggle('active')
        newGrid[2]='B';
        square[2].classList.toggle('active')
        setStuff({...stuff, grid: newGrid, playerMovement: player + 1, coordinates: `(3,1)`, message: ''})
        break;
      case newGrid[3]:
        newGrid[3]='';
        square[3].classList.toggle('active')
        newGrid[4]='B';
        square[4].classList.toggle('active')
        setStuff({...stuff, grid: newGrid, playerMovement: player + 1, coordinates: `(2,2)`, message: ''})
        break;
      case newGrid[4]:
        newGrid[4]='';
        square[4].classList.toggle('active')
        newGrid[5]='B';
        square[5].classList.toggle('active')
        setStuff({...stuff, grid: newGrid, playerMovement: player + 1, coordinates: `(3,2)`, message: ''})
        break;
      case newGrid[6]:
        newGrid[6]='';
        square[6].classList.toggle('active')
        newGrid[7]='B';
        square[7].classList.toggle('active')
        setStuff({...stuff, grid: newGrid, playerMovement: player + 1, coordinates: `(2,3)`, message: ''})
        break;
      case newGrid[7]:
        newGrid[7]='';
        square[7].classList.toggle('active')
        newGrid[8]='B';
        square[8].classList.toggle('active')
        setStuff({...stuff, grid: newGrid, playerMovement: player + 1, coordinates: `(3,3)`, message: ''})
        break;
    }
  }

  function handleDown () {
    const number = stuff.grid.indexOf('B')
    const player = stuff.playerMovement
    const newGrid = stuff.grid
    const square = document.getElementsByClassName('square')

    switch(newGrid[number]){
      case newGrid[6]:
      case newGrid[7]:
      case newGrid[8]:
        setStuff({...stuff, message: `You can't go down`})
        console.log(`too far left`)
        break;
      case newGrid[0]:
        newGrid[0]='';
        square[0].classList.toggle('active')
        newGrid[3]='B';
        square[3].classList.toggle('active')
        setStuff({...stuff, grid: newGrid, playerMovement: player + 1, coordinates: `(1,2)`, message: ''})
        break;
      case newGrid[1]:
        newGrid[1]='';
        square[1].classList.toggle('active')
        newGrid[4]='B';
        square[4].classList.toggle('active')
        setStuff({...stuff, grid: newGrid, playerMovement: player + 1, coordinates: `(2,2)`, message: ''})
        break;
      case newGrid[2]:
        newGrid[2]='';
        square[2].classList.toggle('active')
        newGrid[5]='B';
        square[5].classList.toggle('active')
        setStuff({...stuff, grid: newGrid, playerMovement: player + 1, coordinates: `(3,2)`, message: ''})
        break;
      case newGrid[3]:
        newGrid[3]='';
        square[3].classList.toggle('active')
        newGrid[6]='B';
        square[6].classList.toggle('active')
        setStuff({...stuff, grid: newGrid, playerMovement: player + 1, coordinates: `(1,3)`, message: ''})
        break;
      case newGrid[4]:
        newGrid[4]='';
        square[4].classList.toggle('active')
        newGrid[7]='B';
        square[7].classList.toggle('active')
        setStuff({...stuff, grid: newGrid, playerMovement: player + 1, coordinates: `(2,3)`, message: ''})
        break;
      case newGrid[5]:
        newGrid[5]='';
        square[5].classList.toggle('active')
        newGrid[8]='B';
        setStuff({...stuff, grid: newGrid, playerMovement: player + 1, coordinates: `(3,3)`, message: ''})
        break;
    }
  }

  function handleReset (){
    const square = document.getElementsByClassName('square')
    setStuff({...stuff,
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

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">Coordinates (2, 2)</h3>
        <h3 id="steps">You moved 0 times</h3>
      </div>
      <div id="grid">
        {stuff.grid.map((item,index)=> {
            return (<div key={index} className="square">{item}</div>)
          })}
        {/* <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square active">B</div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div> */}
      </div>
      <div className="info">
        <h3 id="message"></h3>
      </div>
      <div id="keypad">
        <button id="left">LEFT</button>
        <button id="up">UP</button>
        <button id="right">RIGHT</button>
        <button id="down">DOWN</button>
        <button id="reset">reset</button>
      </div>
      <form>
        <input id="email" type="email" placeholder="type email"></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  )
}
