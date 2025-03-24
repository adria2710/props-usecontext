import { createContext, useState } from "react";

export const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
    const [numbers, setNumbers] = useState([]);
    const [currentNumber, setCurrentNumber] = useState("");

    const addNumber = (num) => {
        setCurrentNumber(prev => prev + num); 
    };

    const finalizeNumber = () => {
        if (currentNumber !== "") {
            setNumbers(prev => [...prev, parseInt(currentNumber)]);
            setCurrentNumber("");
        }
    };
    const reset = () => {
        setNumbers([]);
        setCurrentNumber("");
    };

    const total = numbers.reduce((a, b) => a + b, 0);

    return (
        <CalculatorContext.Provider value={{
            numbers,
            currentNumber,
            addNumber,
            finalizeNumber,
            reset,
            total
        }}>
            {children}
        </CalculatorContext.Provider>
    );
};
