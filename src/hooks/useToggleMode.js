import { useEffect, useState } from 'react'

export default function useToggleMode() {
    const [theme, setTheme] = useState(localStorage.theme ?? "light")
    const colorTheme = theme === "dark" ? "light" : "dark"

    useEffect(() => {
        const root = window.document.documentElement
        if (theme === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
            localStorage.setItem('theme', 'dark')
            root.classList.add('dark')
        } else {
            localStorage.setItem('theme', 'light')
            root.classList.remove('dark')
        }
    }, [theme])

    return [colorTheme, setTheme]
}
