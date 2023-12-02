import Day from "./Components/Day"
import Greetings from "./Components/Greetings"
import Person from "./Components/Person"
import Temperature from "./Components/Temperature"


function App() {
  return (
    <div>
      <Person name={"Md. Imran Nazir"}/>
      <Greetings />
      <Temperature />
      <Day dayOfWeek={new Date().getDay()} />
    </div>
  )
}

export default App
