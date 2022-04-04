import "./ExpenseForm.css";
import React, { useState } from "react";
function ExpenseForm() {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  
  
  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: ''
  })

  const titleChangeHandler = (event) => {
    // 방법 0. 개별 입력
    setEnteredTitle(event.target.value);
    
    // 방법 1. 수동 입력 
    // setUserInput({
    //   title: event.target.value,
    //   amount: '',
    //   date: ''
    // })

    // 방법 2. 스프레드 연산자
    // setUserInput({
    //   ...userInput,
    //   title: event.target.value
    // })

    // 방법 1, 2의 문제점 : 이전 상태에 의존해야하며 매번 모든 값을 이전 상태를 복사해서 초기화한다 -> 별로
    // ++ ) 많은 화면 업데이트가 일어나야 할 때, 더 예전 정보를 가져아ㅗ서 잘못 될 수 있다. 

    //방법 3. prevState의 값이 react에 의해서 항상 가장 최신의 이전값임이 보장된다.
    // setUserInput((prevState) => {
      
    //   return {...prevState, title: event.target.value};
    // })
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    
    // setUserInput({
    //   ...userInput,
    //   amount: event.target.value
    // })

    // setUserInput((prevState) => {
      
    //   return {...prevState, amount: event.target.value};
    // })
  };
  
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    
    // setUserInput({
    //   ...userInput,
    //   date: event.target.value
    // })

    // setUserInput((prevState) => {
      
    //   return {...prevState, amount: event.target.value};
    // })
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseDate = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };

  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expenses</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
