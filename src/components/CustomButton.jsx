import React from 'react'
import state from '../store'
import { useSnapshot } from 'valtio'

function CustomButton({
    title,
    type,
    customStyles,
    handleClick
}) {

  const snap=useSnapshot(state)

  const generateStyle = (type) =>{

    const mapList ={
        filled:{backgroundColor:snap.color,color:'#fff'}
    }

    return mapList[type]!=undefined ?mapList[type]:{}
  }

  return (
    <button
    className={'px-2 py-1.5 flex-1 rounded-md '+customStyles}
    style={generateStyle(type)}
    onClick={handleClick}
    >
        {title}
    </button>
  )
}

export default CustomButton