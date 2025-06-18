// import Form from "./components/Form";
import Calculator from "./components/Calculator";
import ClickCounter from "./components/ClickCounter";
import Counter from "./components/Counter";
import HoverCounter from "./components/HoverCounter";
import Section from "./components/Section";
import React from "react";
import ThemeContext from "./contexts/themeContext";
import Todo from "./components/Todo";

class App extends React.Component {
  render() {
    return (
      <div>
        <Todo />
      </div>
    );
  }
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
