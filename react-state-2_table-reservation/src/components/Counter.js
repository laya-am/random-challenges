
export default function Counter({count, onAdd, onSubtract}) {
  return (
    <>
      <h2>How many people would you like to visit us with?</h2>
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment people count"
          onClick={onAdd}
        >
          +
        </button>
        {count}
        <button
          type="button"
          className="counter__button"
          aria-label="decrement people count"
          onClick={onSubtract}
        >
          -
        </button>
      </div>
    </>
  );
}
