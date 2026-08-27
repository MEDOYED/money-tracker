import styles from "./TopBar.module.scss";

function TopBar() {
    return (
        <header className={styles.topBar}>
            <button className={styles.menuButton} type="button">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav className={styles.navigation}>
                <a href="/spending">Расходы</a> |
                <a href="/income">Доходы</a>
            </nav>

            <select
                className={styles.select}
                name="incomesList"
                id="incomesList"
            >
                <option value="">Выберите источник</option>
                <option value="salary">Карта</option>
                <option value="freelance">Кредитка</option>
            </select>

            <a className={styles.historyLink} href="/history">

            </a>
        </header>
    );
}

export default TopBar;