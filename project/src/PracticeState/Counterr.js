import React,{useContext} from 'react'

export default function Counterr() {

    const themecontext   = React.createContext('blue')

    function ThemeButton() {
            const theme = useContext(themecontext);
            return <button style={{backgroundColor:theme}}>themed button</button>
    }
  return (
    <themecontext.Provider value='yellow'>
        <ThemeButton/>
    </themecontext.Provider>
  )
}
