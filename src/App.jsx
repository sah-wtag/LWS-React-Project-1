// import Form from "./components/Form";
import Calculator from "./components/Calculator";
import ClickCounter from "./components/ClickCounter";
import Counter from "./components/Counter";
import HoverCounter from "./components/HoverCounter";
import Section from "./components/Section";
import React, { useCallback, useMemo, useState } from "react";
import ThemeContext from "./contexts/themeContext";
import Todo from "./components/Todo";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title";
import Button from "./components/Button";
import ShowCount from "./components/ShowCount";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementByOne = useCallback(() => {
    setCount1((prevCount) => prevCount + 1);
  }, []);

  const incrementByFive = useCallback(() => {
    setCount2((prevCount) => prevCount + 5);
  }, []);

  const isEvenOrOdd = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i += 1; // costly operation
    return count1 % 2 === 0;
  }, [count1]);

  return (
    <div className="app">
      <Title />
      <ShowCount count={count1} title="Counter 1" />
      <span>{isEvenOrOdd ? "Even" : "Odd"}</span>
      <Button handleClick={incrementByOne}>Increment by one</Button>
      <hr />
      <ShowCount count={count2} title="Counter 2" />
      <Button handleClick={incrementByFive}>Increment by five</Button>
    </div>
  );
}

// function App() {
//   const [show, setShow] = useState(true);

//   return (
//     <div className="app">
//       <div>{show && <MyComponent />}</div>
//       <p>
//         <button type="button" onClick={() => setShow((prevShow) => !prevShow)}>
//           {show ? "Hide post" : "Show post"}
//         </button>
//       </p>
//     </div>
//   );
// }

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
