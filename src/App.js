import { createContext, useContext, useReducer, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header'
import FormSend from './Components/FormSend/FormSend'
import Desctop from './Components/Desctop/Desctop'
import Sun from './Components/Sun/Sun';
import widthTheme from './hoc/widthTheme';

const reducer = (state, action) => {
  function clockTime(){
    let time = new Date()
    let h = time.getHours().toString()
    let m = time.getMinutes().toString()  
    if(h.length < 2){h = '0' + h}        
    if(m.length < 2){m = '0' + m}               
           return h + ':' + m
    }
  switch(action.type) {
    case 'toggle-txt':
      return{
        ...state,
        txt: action.paylod
      }
    case 'reset-txt':
      return {
        ...state,
        txt: ''
        }    
    case 'add-new-mes':
      return{
        ...state,
        messages: [
          ...state.messages,
          {
            id: new Date().getTime().toString(),
            txt: state.txt,
            user: state.user,
            time: clockTime()
          }
        ],
        user: state.user === 'Me' ? 'You' : 'Me'
      }
    case 'del-mes':
      return{
        ...state,
        messages: [
          ...state.messages.filter(el => el.id !== action.paylod)
        ]
      }
    case 'set-edit-id':
      return {
        ...state,
        editId: action.paylod.id,
        txt: action.paylod.txt
      }
    case 'edit-mes':
      return {
        ...state,
        messages: [
          ...state.messages.map(mess => {
            if (mess.id === state.editId) {
              return {
                ...mess,
                txt: state.txt
              }
            }
            return mess
          })
        ]
      }        
    default :
      return state
  }
}

const initialState = {
  txt: '',
  messages: [],
  editId: '',
  user: 'Me'
}

export const globalContext = createContext()
export const themeContext = createContext()

function App({theme, toggleTheme}) {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App"> 
      <div 
      style={{
        background: theme === 'light' ? 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)' : ''
      }}
      className='Corpus'>
        <globalContext.Provider value={{state, dispatch}}>
          <themeContext.Provider value={{theme, toggleTheme}}>
              <Header />
              <Desctop />
              <FormSend />
              <Sun />
          </themeContext.Provider> 
        </globalContext.Provider>
    </div>
    </div>
  )
}

export default widthTheme(App)
