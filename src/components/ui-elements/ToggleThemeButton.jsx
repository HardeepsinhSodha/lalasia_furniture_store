import React from 'react'
import useToggleMode from '../../hooks/useToggleMode'
import { Moon, Sun } from 'react-feather'

export default function ToggleThemeButton() {
    const [theme, setTheme] = useToggleMode()

    return (
        <button className='btn btn-square btn-link text-black dark:text-white' onClick={()=>setTheme(theme)} shape="round">{theme === 'dark'?  <Moon />:<Sun />}</button>
    )
}
