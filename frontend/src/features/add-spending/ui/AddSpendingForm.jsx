import { useState } from "react";

function AddSpendingForm() {
    const [title, setTitle] = useState("");
    const [sum, setSum] = useState("");
    const [spendings, setSpendings] = useState([]);

    function handleSubmit() {
        setSpendings([...spendings,
        { id: Date.now(), title, sum }
        ]);

        setTitle("");
        setSum("");
    }

    return (
        <div>
            <h2>Добавить расход</h2>

            <input
                type="text"
                placeholder="Название"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />

            <input
                type="number"
                placeholder="Сумма"
                value={sum}
                onChange={(event) => setSum(event.target.value)}
            />

            <button onClick={handleSubmit}>Добавить</button>

            <p>Название: {title}</p>
            <p>Сумма: {sum}</p>

            {spendings.map((spending) => (
                <p key={spending.id}>
                    {spending.id} — {spending.title} — {spending.sum}
                </p>
            ))}
        </div>
    );
}

export default AddSpendingForm;
