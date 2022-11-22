import React, {useContext, useRef, useEffect} from 'react'
import './Desctop.css'
// import img from '../../img/img'
import { globalContext, themeContext } from '../../App'

export default function Desctop() {
  const {state, dispatch} = useContext(globalContext)
  const desctopRef = useRef(null)
  const {theme} = useContext(themeContext)

  useEffect(() => {
    desctopRef.current.scrollTop = desctopRef.current.scrollHeight - desctopRef.current.clientHeight 
  } );
  return (
    <div ref={desctopRef} className='desctop'>
      <div className="img">
        {/* <img src={img[0]} alt="" /> */}
      </div>
        {state.messages.map(mess => (
          <div className="mes" key={mess.id}
          style={{
            background: (mess.user === 'Me' && theme === 'light') ? 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)' : 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
            marginLeft: mess.user === 'Me' ? '39%' : '0',
            borderBottomLeftRadius: mess.user === 'Me' ? '20px' : '50px',
            borderBottomRightRadius: mess.user === 'Me' ? '50px' : '20px',
            borderTopLeftRadius: mess.user === 'Me' ? '20px' : 'none',
            borderTopRightRadius: mess.user === 'Me' ? 'none' : '20px',
        }}
          >
            <div className="user">
              <div className="us">{mess.user}</div>
              <div className="time">{mess.time}</div>
            </div>
            <div className="del-edit"
            style={{
              left: mess.user === 'Me' ? '10px' : '180px'
            }}
            >
              <button onClick={() => dispatch({type: 'set-edit-id', paylod: {id: mess.id, txt: mess.txt}})}>I</button>
              <button onClick={() => dispatch({type: 'del-mes', paylod: mess.id})}>x</button>
            </div>
            <div className="mesTxt">
              {mess.txt}</div>
          </div>
        ))}
    </div>
  )
}
