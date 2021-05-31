import './App.css'
// import FirstComponent from './FirstComponent'
// import FirstClassComponent from './FirstClassComponent'
import Counter from './Counter'

// A REACT COMPONENT can be a JS function returning some JSX
const App = () => {
  return (
    // this is called JSX
    // JSX vs HTML?
    // JSX can be writter directly in JS
    // JSX must NOT have "class", but "className"
    // JSX can directly use variables inside the syntax, just wrap it in curly brackets
    <div className="App">
      <header className="App-header">
        {/* PROPS */}
        {/* props are additional pieces of info a parent can pass down to a child */}
        {/* <FirstClassComponent myClass="text-red" titleText="first heading" /> */}
        {/* <FirstClassComponent myClass="text-green" titleText="second heading" /> */}
        <Counter />
        <Counter />
      </header>
    </div>
  )
}

export default App
// just one can be the default export
