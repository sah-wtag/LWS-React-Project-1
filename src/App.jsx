// import Form from "./components/Form";
import Calculator from "./components/Calculator";
import ClickCounter from "./components/ClickCounter";
import Counter from "./components/Counter";
import HoverCounter from "./components/HoverCounter";
import Section from "./components/Section";
import React, { useState } from "react";
import ThemeContext from "./contexts/themeContext";
import Todo from "./components/Todo";
import MyComponent from "./components/MyComponent";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="app">
      <div>{show && <MyComponent />}</div>
      <p>
        <button type="button" onClick={() => setShow((prevShow) => !prevShow)}>
          {show ? "Hide post" : "Show post"}
        </button>
      </p>
    </div>
  );
}

// class App extends React.Component {
//   state = {
//     theme: "light",
//     switchTheme: () => {
//       this.setState(({ theme }) => {
//         if (theme === "dark") {
//           return {
//             theme: "light",
//           };
//         }
//         return {
//           theme: "dark",
//         };
//       });
//     },
//   };
//   render() {
//     const { theme } = this.state;
//     return (
//       <div>
//         {/* <Form/> */}
//         {/* <Calculator /> */}
            // <Todo />
//         <Counter>
//           {(counter, incrementCount) => (
//             <ClickCounter count={counter} incrementCount={incrementCount} />
//           )}
//         </Counter>
//         <ThemeContext.Provider value={this.state}>
//           <Section />
//         </ThemeContext.Provider>
//       </div>
//     );
//   }
// }

export default App;
