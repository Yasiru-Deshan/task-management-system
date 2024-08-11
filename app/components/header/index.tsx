import styles from './header.module.css';
import SearchIcon from './../../../public/icons/SearchNormal1-Linear-32px.svg';

export default function Header() {
    return(
        <div className={styles.container}>
            <div className={styles.searchBar}>
                <SearchIcon width={24} height={24} stroke="currentColor" />
                <input type="text" placeholder="Search tasks" />
            </div>
        </div>
    )
}