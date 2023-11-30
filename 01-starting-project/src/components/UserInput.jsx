
export default function UserInput({ onChange, userInput }) {

    return <section id="user-input">

        <div className='input-group'>

            <p>
                <label>Initial Investment</label>
                <input type="number"
                    required value={userInput.initialInvestments}
                    onChange={(event) => { onChange("initialInvestments", event.target.value) }} />
            </p>

            <p>
                <label>Annual Investments</label>
                <input type="number" required
                    value={userInput.annualInvestments}
                    onChange={(event) => { onChange("annualInvestments", event.target.value) }} />
            </p>


        </div>

        <div className='input-group'>

            <p>
                <label>Expected Return</label>
                <input type="number" required
                    value={userInput.expectedReturn}
                    onChange={(event) => { onChange("expectedReturn", event.target.value) }} />
            </p>

            <p>
                <label >Duration</label>
                <input type="number" required
                    value={userInput.duration}
                    onChange={(event) => { onChange("duration", event.target.value) }}
                />
            </p>





        </div>


    </section>
}

