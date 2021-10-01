// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Greeting({initialName}) {
  const [name,setName] = React.useState(initialName);

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} 
        id="name" 
        placeholder={initialName}
        />
      </form>
      {name ? <strong>Hey {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initialName="Buddy" />
}

export default App
