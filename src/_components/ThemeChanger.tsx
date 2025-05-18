'use client'
import { useTheme } from 'next-themes'

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      The current theme is: {theme}
      <button
      className='bg-blue-500 p-2 mx-2'
      onClick={() => setTheme('light')}>Light Mode</button>
      <button
      className='bg-blue-500 p-2 mx-2'
      onClick={() => setTheme('dark')}>Dark Mode</button>
    </div>
  )
}
export default ThemeChanger; 