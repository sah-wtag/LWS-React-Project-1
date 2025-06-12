export default function BoilingVerdicts({ celcious = 0 }) {
  if (celcious >= 100) {
    return <p>The water is boiling</p>;
  }
  return (
    <div>
      <p>The water is not boiling</p>
    </div>
  );
}
