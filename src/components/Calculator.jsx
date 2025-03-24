import { useContext } from "react";
import { CalculatorContext } from "../context/CalculatorContext";
import { Link } from "react-router-dom";

export const Calculator = () => {
    const {
        addNumber,
        currentNumber,
        finalizeNumber,
        numbers,
    } = useContext(CalculatorContext);

    const handleClick = (num) => {
        addNumber(num.toString());
    };

    const handleAddToList = () => {
        if (currentNumber !== "") {
            finalizeNumber(); 
        }
    };

    return (
        <div>
            <h2>Calculadora</h2>

            <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>
                {currentNumber || "0"}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", maxWidth: "200px" }}>
                {[...Array(10).keys()].map((n) => (
                    <button
                        key={n}
                        onClick={() => handleClick(n)}
                        style={{ width: "60px", height: "60px", margin: "5px", fontSize: "1.5rem" }}
                    >
                        {n}
                    </button>
                ))}
            </div>

            <div style={{ marginTop: "1rem" }}>
                <button onClick={handleAddToList}>Agregar número</button>
            </div>

            <div style={{ marginTop: "1rem" }}>
                <Link to="/resultado">Ver Resultado</Link>
            </div>
        </div>
    );
};
