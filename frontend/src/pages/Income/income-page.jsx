import { TopBar } from "@widgets/top-bar";
import s from "./income-page.module.scss";
import { useState } from "react";


export const IncomePage = () => {
    const [cards, setCards] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cardName, setCardName] = useState("");
    const [cardBalance, setCardBalance] = useState(0);
    const [editingCardId, setEditingCardId] = useState(null);

    function handleButton() {
        setIsModalOpen(true);
    }
    function handleSubmit() {
        if (editingCardId === null) {
            setCards([
                ...cards,
                {
                    id: Date.now(),
                    name: cardName,
                    balance: +cardBalance
                }
            ]);
        } else {
            setCards(
                cards.map(card =>
                    card.id === editingCardId
                        ? {
                            ...card,
                            name: cardName,
                            balance: +cardBalance
                        }
                        : card
                )
            );
        }

        setEditingCardId(null);
        setCardName("");
        setCardBalance(0);
        setIsModalOpen(false);
    }
    function editCard(id) {
        const card = cards.find(card => card.id === id);

        setEditingCardId(id);
        setCardName(card.name);
        setCardBalance(card.balance);
        setIsModalOpen(true);
    }


    return (
        <>
            <TopBar />

            <main className={s.page}>
                <section className={s.sources}>
                    {cards.map(card => (
                        <article className={s.card} key={card.id}>
                            <h2 className={s.card__name}>{card.name}</h2>
                            <button className={s.card__edit}
                                onClick={() => editCard(card.id)}>
                                Редактировать
                            </button>
                            <div className={s.card__balance}>
                                <span>остаток</span>
                                <strong>{card.balance}</strong>
                            </div>
                        </article>
                    ))}
                </section>


                <button
                    className={s.addButton}
                    type="button"
                    onClick={handleButton}
                >
                    +
                </button>
            </main>

            {
                isModalOpen && (
                    <div className={s.modalOverlay}>
                        <div className={s.modal}>
                            <h2>Новый источник</h2>
                            <div className={s.modal__card}>
                                <input value={cardName}
                                    onChange={(event) => setCardName(event.target.value)}
                                    className={s.modal__input}
                                    type="text" name="name"
                                    placeholder="Введите источник дохода"
                                />
                                <input value={cardBalance}
                                    onChange={(event) => setCardBalance(event.target.value)}
                                    className={`${s.modal__input} ${s.modal__inputBalance}`}
                                    type="number" name="balance" placeholder="Введите баланс"
                                />
                            </div>
                            <button
                                type="button"
                                onClick={() => setIsModalOpen(false)}
                            >
                                X
                            </button>
                            <button
                                type="submit"
                                onClick={handleSubmit}
                            >
                                Добавить
                            </button>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default IncomePage;