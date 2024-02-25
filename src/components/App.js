
import React from "react";
import './../styles/App.css';

const App = () => {
  const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
  const [input, setInput]= useState("")
  const [fruitsList, setFruitsList] = useState(fruits)

  function HandleChange(e){
    setInput(e.target.value)
  }

  function setList(){
    if(input!==""){
    setFruitsList(fruitsList.filter(fruit => fruit.toLowerCase().includes(input.toLowerCase().trim())))
    }
    else{
        setFruitsList(fruits)
    }
  }
  useEffect(()=>(
    setList()
  ),[input])

  return (
    <div>
        <h1>Search Item</h1>
        <input placeholder="Search fruits.." value={input} onChange={HandleChange} />
        {
            <ul>
                {
                fruitsList.map((fruit) =>(
                    <li >{fruit}</li>
                ))
                }
            </ul>
        }
    </div>
  )
}


export default App
