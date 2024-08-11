import styles from './sidebar.module.css';

export default function SideBar() {
    return(

        <aside className={styles.container}>
            <div className={styles.logo}>

            </div>
            <ul className={styles.sidebar}>
            <li>Home</li>
            <li>Tasks</li>
            <li>Report</li>
            <li>Insights</li>
            <li>Inbox</li>
            <li>Settings</li>
            </ul>
        </aside>
  
    )
}