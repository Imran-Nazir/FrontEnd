import Hero from "./components/Hero"
import Hero1 from "./components/Hero1"
import Hero2 from "./components/Hero2"


function App() {
   //This is for Hero.jsx as object props
  const ItemObj = {
   name: "Imran",
   age: "25",
   designation: "employee"
  }

  //This is for Hero1.jsx as functional props
  const BtnClick = ()=>{
   let hour = new Date().getHours()
   let min = new Date().getMinutes()
   let sec = new Date().getSeconds()
   alert("Time - "+hour+" : "+min+" : "+sec)
  }

  //This is for Hero2.jsx as managing form submit
  return (
     <div>
        <Hero item={ItemObj} title="Learning React props" dis="Hello I am a solo programmer."/>
        <Hero1 childBtnClick = {BtnClick} />
        <Hero2 />
     </div>
  )
}

export default App
