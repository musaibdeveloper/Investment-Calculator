import { calculateInvestmentResults, formatter } from "../../util/investments"

export default function Results({ input }) {

    const resultData = calculateInvestmentResults(input);
    console.log(resultData);
    const initialInvestments = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment
    return <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investments Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>

        </thead>

        <tbody>
            {resultData.map((yearData) => {
                const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestments;
                const totalAmountInvested = yearData.valueEndOfYear - totalInterest

                return <tr key={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    <td>{formatter.format(yearData.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>

                </tr>
            })}

        </tbody>

    </table>
}
