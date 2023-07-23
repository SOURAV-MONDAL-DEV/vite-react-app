import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfilePage from './Components/ProfilePage/ProfilePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <ProfilePage></ProfilePage>
      </main>
    </>
  )
}

export default App
