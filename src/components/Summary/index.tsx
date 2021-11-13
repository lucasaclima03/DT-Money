import React, { useContext } from "react";
import { Container } from "./styles";
import incomeImage from "../../assets/income.svg";
import outcomeImage from "../../assets/outcome.svg";
import totalImage from "../../assets/total.svg";
import { TransactionsContext } from "../../TransactionsContext";

export function Summary() {
    const { transactions } = useContext(TransactionsContext);
    console.log(transactions);
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImage} alt="Entradas" />
                </header>
                <strong>R$1.000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImage} alt="Saídas" />
                </header>
                <strong>-R$500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImage} alt="Total" />
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    );
}
