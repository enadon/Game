import './App.css';
import { useState, useEffect } from 'react';
import Card from './components/card';
import primeArray from './primeArray';

const App = () => {
  const [selectedCards, setSelectedCards] = useState();

  const makeCardVisible = e => {
    if (selectedCards?.length !== 2) {
      if (selectedCards) {
        setSelectedCards([...selectedCards, +e.target.dataset.num])
      } else {
        setSelectedCards([+e.target.dataset.num])
      }
    }
  }

  useEffect(() => {
    let t = setTimeout(() => {
      if (selectedCards?.length === 2) {
        setSelectedCards(undefined)
      }
    }, 2500);

    return () => { clearTimeout(t) }

  }, [selectedCards])

  return <div className="App">
    <div className='card-container' onClick={makeCardVisible}>
      {
        primeArray?.map((num, i) => <Card
          number={num}
          key={'' + num + i}
          selectedCards={selectedCards}
        />)
      }
    </div>
  </div>
}

export default App;
