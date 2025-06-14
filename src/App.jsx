// import Form from "./components/Form";
import Calculator from "./components/Calculator";
import ClickCounter from "./components/ClickCounter";
import Counter from "./components/Counter";
import HoverCounter from "./components/HoverCounter";

function App() {
  return (
    <div>
      {/* <Form/> */}
      {/* <Calculator /> */}
      <Counter>
        {(counter, incrementCount) => (
          <ClickCounter count={counter} incrementCount={incrementCount} />
        )}
      </Counter>
      <Counter>
        {(counter, incrementCount) => (
          <HoverCounter count={counter} incrementCount={incrementCount} />
        )}
      </Counter>
    </div>
  );
}

export default App;
