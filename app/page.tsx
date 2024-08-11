"use client";  // Add this line to make it a Client Component

import { useState } from 'react';
import styles from '../styles/Home.module.css';
import Header from './components/header';

type TaskCategory = 'todo' | 'inProgress' | 'completed';

interface Tasks {
  todo: string[];
  inProgress: string[];
  completed: string[];
}

export default function Home() {
  const [tasks, setTasks] = useState<Tasks>({
    todo: [],
    inProgress: [],
    completed: []
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
      <aside className={styles.sidebar}>
        <ul>
          <li>Home</li>
          <li>Tasks</li>
          <li>Report</li>
          <li>Insights</li>
          <li>Inbox</li>
          <li>Settings</li>
        </ul>
      </aside>
      
      <main className={styles.main}>
        <Header/>
        <div className={styles.board}>
          {(['todo', 'inProgress', 'completed'] as TaskCategory[]).map((category) => (
            <div key={category} className={styles.column}>
              <div className={styles.columnHeader}>
                <h3>{category === 'todo' ? 'Todo' : category === 'inProgress' ? 'In Progress' : 'Completed'}</h3>
                <button onClick={() => addTask(category)}>+</button>
              </div>
              <div className={styles.taskList}>
                {tasks[category].map((task, index) => (
                  <div key={index} className={styles.task}>
                    {task}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
