import React from 'react';
import "./NewExpense.css";
import ExpenseForm from './ExpenseForm';

function NewExpense(props){
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData =  {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        //console.log(expenseData); 여기 역시 프롭스로 보내준 값(함수)를 가지고 표현을 한다
        props.onAddExpense(expenseData);
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
        </div>
    )
}

export default NewExpense;