import { useContext } from "react";
import { CalculatorContext } from "../context/CalculatorContext";
import { Link } from "react-router-dom";

export const Result = () => {
    const { numbers, total, reset } = useContext(CalculatorContext);

    return (
        <div>
            <h2>Resultado</h2>
            <p>Números pulsados: {numbers.join(", ")}</p>
            <p>Suma total: {total}</p>
            <button onClick={reset}>Reset</button>
            <br />
            <Link to="/">Volver a la calculadora</Link>
        </div>
    );
};
