import { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });
  const { title, description } = todo;
  return (
    <div>
      <p>{title}</p>
      <p>
        <input
          type="text"
          value={title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        />
      </p>
      <p>{description}</p>
      <p>
        <textarea
          name="text"
          value={description}
          onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        ></textarea>
      </p>
    </div>
  );
}
