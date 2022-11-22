import React, {memo, useContext}  from 'react'
import './FormSend.css'
import Paper from '../../Svg/Paper'
import { globalContext } from '../../App'

function FormSend() {
  const {state, dispatch} = useContext(globalContext)
  const handleSubit = (e) => {
    e.preventDefault()
    if (!state.editId) {
      dispatch({
        type: 'add-new-mes'
      })
      dispatch({
        type: 'reset-txt'
      })  
    }
    else{
      dispatch({
        type: 'edit-mes'
      })
      dispatch({
        type: 'reset-txt'
      })
    }
    
  }
  return (
    <div className='formSend'>
      <form 
      onSubmit={handleSubit}
      >
        <input 
        type="text" 
        value={state.txt}
        onChange={(e) => dispatch({type: 'toggle-txt', paylod: e.target.value})}
        placeholder="Enter message"
        />
        <button>< Paper /></button>
      </form>
    </div>
  )
}

export default memo(FormSend)