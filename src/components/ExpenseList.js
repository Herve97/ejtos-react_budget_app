import React, { useContext, useState } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';
import Dropdown from 'react-bootstrap/Dropdown';

const ExpenseList = () => {
    const { expenses, currency, currencyName, dispatch } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    const [newCurrencyName, setNewCurrencyName] = useState(currencyName);

    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    currency ({newCurrency} {newCurrencyName})
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item eventKey="$" defaultValue="$" onClick={(e) => {
                        e.preventDefault();
                        setNewCurrency("$");
                        setNewCurrencyName("Dollar");
                        dispatch({
                            type: 'CHG_CURRENCY',
                            payload: {
                                currency: newCurrency,
                                currencyName: newCurrencyName
                            },
                        });
                    } }>$ Dollar</Dropdown.Item>
                    <Dropdown.Item eventKey="£" defaultValue="£" onClick={(e) => {
                        e.preventDefault();
                        setNewCurrency("£");
                        setNewCurrencyName("Pound")
                        dispatch({
                            type: 'CHG_CURRENCY',
                            payload: {
                                currency: newCurrency,
                                currencyName: newCurrencyName
                            },
                        });
                    } }>£ Pound</Dropdown.Item>
                    <Dropdown.Item eventKey="€" defaultValue="€" onClick={(e) => {
                        e.preventDefault();
                        setNewCurrency("€");
                        setNewCurrencyName("Euro")
                        dispatch({
                            type: 'CHG_CURRENCY',
                            payload: {
                                currency: newCurrency,
                                currencyName: newCurrencyName
                            },
                        });
                    } }>€ Euro</Dropdown.Item>
                    <Dropdown.Item eventKey="₹" defaultValue="₹" onClick={(e) => {
                        e.preventDefault();
                        setNewCurrency("₹");
                        setNewCurrencyName("Ruppee")
                        dispatch({
                            type: 'CHG_CURRENCY',
                            payload: {
                                currency: newCurrency,
                                currencyName: newCurrencyName
                            },
                        });
                    } }>₹ Ruppee</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <table className='table'>
                <thead className="thead-light">
                    <tr>
                        <th scope="col">Department</th>
                        <th scope="col">Allocated Budget</th>
                        <th scope="col">Increase by 10</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense) => (
                        <ExpenseItem id={expense.id} key={expense.id} name={expense.name} cost={expense.cost} />
                    ))}
                </tbody>
            </table>
        </div>

    );
};

export default ExpenseList;
