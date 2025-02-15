import React, { useRef, useState } from 'react'

import circle_png from '../Assets/circle_png.png'
import cross_png from '../Assets/cross_png.png'

let data = ["","","","","","","","",""]
const TicTacToe = () => {

  let [count, setCount] = useState(0)
  let [lock, setLock] = useState(false)
  let titleRef = useRef(null)
  let box1 = useRef(null)
  let box2 = useRef(null)
  let box3 = useRef(null)
  let box4 = useRef(null)
  let box5 = useRef(null)
  let box6 = useRef(null)
  let box7 = useRef(null)
  let box8 = useRef(null)
  let box9 = useRef(null)
  let box_array = [box1,box2,box3,box4,box5,box6,box7,box8,box9]
  const toggle = (e, num)=>{
    if(lock){
      return ;
    }
    if(count%2===0){
      e.target.innerHTML = `<img src='${cross_png}'/>`
      data[num] = "x"
      setCount(++count)
    }
    else{
      e.target.innerHTML = `<img src ='${circle_png}'/>`
      data[num] = "o"
      setCount(++count)
    } 
    checkWin()
  }
  const reset = ()=>{
    setLock(false)
    data = ["","","","","","","","",""]
    titleRef.current.innerHTML = "TIC TAC TOE GAME"
    box_array.map((e)=>{
      e.current.innerHTML = ""
    })
  }

  const checkWin= (winner)=>{
    if(data[0]===data[1] && data[1]===data[2] && data[2]!==""){
      won(data[2])
    }
    else if(data[3]===data[4] && data[4]===data[5] && data[5]!==""){
      won(data[5])
    }
    else if(data[6]===data[7] && data[7]===data[8] && data[8]!==""){
      won(data[8])
    }
    else if(data[0]===data[3] && data[3]===data[6] && data[6]!==""){
      won(data[6])
    }
    else if(data[1]===data[4] && data[4]===data[7] && data[7]!==""){
      won(data[7])
    }
    else if(data[2]===data[5] && data[5]===data[8] && data[8]!==""){
      won(data[8])
    }
    else if(data[0]===data[4] && data[4]===data[8] && data[8]!==""){
      won(data[8])
    }
    else if(data[2]===data[4] && data[4]===data[6] && data[6]!==""){
      won(data[6])
    }
  }

  const won = (winner) =>{
    setLock(true)
    if(winner==="x"){
      titleRef.current.innerHTML = `Congratulatios : <img class="image" src = ${cross_png}> You WIN`
    }
    else{
      titleRef.current.innerHTML = `Congratualations : <img class="image" src = ${circle_png}> YOU WIN`
    }
  }


  return (
    <div className='text-center'>
      <h1 className='m-t-50 text-white text-6xl font-medium flex justify-center items-center' ref={titleRef}>TIC TAC TOE GAME</h1>
      <div className='h-90 w-85 flex m-auto pt-20'>
        {/* row-1 */}
        <div>
          <div ref={box1} className='flex items-center justify-center h-30 w-30 bg-gray-700 border-4  border-cyan-600 cursor-pointer rounded-md m-0.5' onClick={(e)=>{toggle(e,0)}}></div>
          <div ref={box2} className='flex items-center justify-center h-30 w-30 bg-gray-700 border-4  border-cyan-600 cursor-pointer rounded-md m-0.5' onClick={(e)=>{toggle(e,1)}}></div>
          <div ref={box3} className='flex items-center justify-center h-30 w-30 bg-gray-700 border-4  border-cyan-600 cursor-pointer rounded-md m-0.5' onClick={(e)=>{toggle(e,2)}}></div>
        </div>
        {/* row-2 */}
        <div>
          <div ref={box4} className='flex items-center justify-center h-30 w-30 bg-gray-700 border-4  border-cyan-600 cursor-pointer rounded-md m-0.5' onClick={(e)=>{toggle(e,3)}}></div>
          <div ref={box5} className='flex items-center justify-center h-30 w-30 bg-gray-700 border-4  border-cyan-600 cursor-pointer rounded-md m-0.5' onClick={(e)=>{toggle(e,4)}}></div>
          <div ref={box6} className='flex items-center justify-center h-30 w-30 bg-gray-700 border-4  border-cyan-600 cursor-pointer rounded-md m-0.5' onClick={(e)=>{toggle(e,5)}}></div>
        </div>
        {/* row-3 */}
        <div>
          <div ref={box7} className='flex items-center justify-center h-30 w-30 bg-gray-700 border-4  border-cyan-600 cursor-pointer rounded-md m-0.5' onClick={(e)=>{toggle(e,6)}}></div>
          <div ref={box8} className='flex items-center justify-center h-30 w-30 bg-gray-700 border-4  border-cyan-600 cursor-pointer rounded-md m-0.5' onClick={(e)=>{toggle(e,7)}}></div>
          <div ref={box9} className='flex items-center justify-center h-30 w-30 bg-gray-700 border-4  border-cyan-600 cursor-pointer rounded-md m-0.5' onClick={(e)=>{toggle(e,8)}}></div>
        </div>
      </div>
      <button className='w-30 h-10 border-none outline-none bg-cyan-950 rounded-3xl text-md text-cyan-400 cursor-pointer mt-30 mb-6 block mx-auto hover:bg-cyan-900' onClick={()=>{reset()}}>Reset</button>
      
    </div>
  )
}

export default TicTacToe
