import { useState, useEffect } from 'react';

const App = () => {

  const [userChoice, setUserChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [result, setResult] = useState(null)
  const choices = ['rock', 'paper', 'scissors']


  const handleClick = (value) => {
    setUserChoice(value)
    randomChoice()
  }

  const randomChoice = () => { 
    const randomNumber = parseInt(Math.random() * choices.length)
    setComputerChoice(choices[randomNumber])
  }

  useEffect(() => {
    const str = userChoice + computerChoice

    switch (str){
      case 'rockrock':
      case 'scissorsscissors':
      case 'paperpaper':
        setResult("its a draw!")
        break
      
      case 'rockscissors':
      case 'paperrock':
      case 'scissorspaper':
        setResult('you won!')
        break
      
      case 'scissorsrock':
      case 'rockpaper':
      case 'paperscissors':
        setResult('you lose!')
        break

      default:
        break
    }
  }, [computerChoice, userChoice])

  return (
    <div className="App">
      <h1>User Choice: {userChoice}</h1>
      <h1>Computer Choice: {computerChoice}</h1>
      { choices.map((choice, index) => 
        <button key={index} onClick={() => handleClick(choice)}>{choice}</button>
      )}
      <h1>{result}</h1>
    </div>
  );
}

export default App;
