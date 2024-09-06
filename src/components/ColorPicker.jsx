import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'
import state from '../store'

function ColorPicker() {
  
  const snap = useSnapshot(state)
  
  return (
    <div
    className='absolute left-full ml-3'
    >
      <SketchPicker
      color={snap.color}
      disableAlpha
      presetColors={['#306f97', '#f8c8bf', '#d4c46b', '#dec033', '#817af8', '#7c585f', '#362690', '#727189', '#03595b', '#71ec4c']}

      onChange={(color)=>state.color= color.hex}
      />
    </div>
  )
}

export default ColorPicker