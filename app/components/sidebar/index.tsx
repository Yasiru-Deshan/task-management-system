import styles from './sidebar.module.css';
import logo from './../../../public/images/aa624316428cd4498ccd9769187ec302.png';
import Image from 'next/image';
import HomeIcon from './../../../public/icons/Home2-Linear-32px.svg';
import TasksIcon from '../../../public/icons/TaskSquare-Linear-32px.svg';
import ReportIcon from '../../../public/icons/Diagram-Linear-32px.svg';
import InsightIcon from '../../../public/icons/LampCharge-Linear-32px.svg';
import InboxIcon from '../../../public/icons/NotificationBing-Linear-32px.svg';
import SettingsIcon from '../../../public/icons/Setting2-Linear-32px.svg';

const sidebar_items = [
    {id: 1, title: 'Home', icon: HomeIcon},
    {id: 2, title: 'Tasks', icon: TasksIcon},
    {id: 3, title: 'Report', icon: ReportIcon},
    {id: 4, title: 'Insights', icon: InsightIcon},
    {id: 5, title: 'Inbox', icon: InboxIcon},
    {id: 6, title: 'Settings', icon: SettingsIcon}
 
]

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
                {sidebar_items.map((item)=>(
                
                    <li key={item.id}><Image
                        src={item.icon}
                        alt="Home"
                        width={24}
                        height={24}
                    />{item.title}</li>     
                ))}    
            </ul>
        </aside>

    )
}
