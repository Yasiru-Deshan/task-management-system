import styles from './sidebar.module.css';
import logo from './../../../public/images/aa624316428cd4498ccd9769187ec302.png';
import Image from 'next/image';
import HomeIcon from './../../../public/icons/Home2-Linear-32px.svg';
import TasksIcon from '../../../public/icons/TaskSquare-Linear-32px.svg';
import ReportIcon from '../../../public/icons/Diagram-Linear-32px.svg';
import InsightIcon from '../../../public/icons/LampCharge-Linear-32px.svg';
import InboxIcon from '../../../public/icons/NotificationBing-Linear-32px.svg';
import SettingsIcon from '../../../public/icons/Setting2-Linear-32px.svg';

export default function SideBar() {
    return(

        <aside className={styles.container}>
            <div className={styles.sidebarHeader}>
                <Image 
                    src={logo} 
                    alt="Logo" 
                    className={styles.logo} 
                    />
                Code 94 Labs

                </div>
            <ul className={styles.sidebar}>             
                <li>
                <HomeIcon width={24} height={24} stroke="currentColor" />
                Home
                </li>
                <li>
                <TasksIcon width={24} height={24} stroke="currentColor" />
                Tasks
                </li>
                <li>
                <ReportIcon width={24} height={24} stroke="currentColor" />
                Report
                </li>
                <li>
                <InsightIcon width={24} height={24} stroke="currentColor" />
                Insights
                </li>
                <li>
                <InboxIcon width={24} height={24} stroke="currentColor" />
                Inbox
                </li>
                <li>
                <SettingsIcon width={24} height={24} stroke="currentColor" />
                Settings
                </li>  
            </ul>
        </aside>

    )
}
