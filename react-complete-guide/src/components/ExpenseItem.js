import "./ExpenseItem.css";

function ExpenseItem(props) {
  const month = props.date.toLocaleString("ko", { month: "long" });
  const day = props.date.toLocaleString("ko", { day: "2-digit" });
  const years = props.date.getFullYear();
  return (
    <div className="expense-item">
      <div>
        <div>{years}</div>
        <div>{month}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
