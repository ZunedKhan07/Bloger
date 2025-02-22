import React from 'react'

const App = () => {
  console.log(import.meta.env.VITE_APPWRITE_URL)
console.log(import.meta.env.VITE_APPWRITE_PROJECT_ID)
  return (
    <div>
      hello
    </div>
  )
}

export default App
