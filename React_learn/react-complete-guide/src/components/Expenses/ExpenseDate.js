import './ExpenseDate.css';

function ExpenseDate(props) {
  const month = props.date.toLocaleString("ko", { month: "long" });
  const day = props.date.toLocaleString("ko", { day: "2-digit" });
  const years = props.date.getFullYear();

  return (
    <div className='expense-date'>
      <div className='expense-date__year'>{years}</div>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
}
export default ExpenseDate;