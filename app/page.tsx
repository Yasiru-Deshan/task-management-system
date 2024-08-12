"use client";  // Add this line to make it a Client Component

import { useState } from 'react';
import styles from '../styles/Home.module.css';
import Header from './components/header';
import SideBar from './components/sidebar';
import TaskHeader from './components/taskheader';

type TaskCategory = 'Todo' | 'InProgress' | 'Completed';

interface Tasks {
  Todo: string[];
  InProgress: string[];
  Completed: string[];
}

const categoryColors: { category: TaskCategory; color: string }[] = [
  { category: 'Todo', color: '#FFAD0D' },
  { category: 'InProgress', color: '#0C6FBF' },
  { category: 'Completed', color: '#2A7E2E' },
];


export default function Home() {
  const [tasks, setTasks] = useState<Tasks>({
    Todo: [],
    InProgress: [],
    Completed: []
  });

  const addTask = (category: TaskCategory) => {
    const task = prompt('Enter a task:');
    if (task) {
      setTasks({
        ...tasks,
        [category]: [...tasks[category], task]
      });
    }
  };

  return (
    <div className={styles.container}>

      <SideBar/>
      <main className={styles.main}>
        <Header/>
        <div className={styles.board}>
          {categoryColors.map((category) => (
            <div key={category.category} className={styles.column}>
              <TaskHeader color={category.color} category={category.category}/>
              {/* <div className={styles.columnHeader}>
                
                <h3>{category === 'todo' ? 'Todo' : category === 'inProgress' ? 'In Progress' : 'Completed'}</h3>
                <button onClick={() => addTask(category)}>+</button>
              </div>
              <div className={styles.taskList}>
                {tasks[category].map((task, index) => (
                  <div key={index} className={styles.task}>
                    {task}
                  </div>
                ))}
              </div> */}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
