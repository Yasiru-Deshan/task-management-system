"use client";  // Add this line to make it a Client Component

import { useState } from 'react';
import styles from '../styles/Home.module.css';
import Header from './components/header';
import SideBar from './components/sidebar';
import TaskHeader from './components/taskheader';
import AddTask from './components/addtask';
import Task from './components/task';
import Modal from './components/modal';

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);

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
        <Header isModalOpen={setIsModalOpen}/>
        <div className={styles.board}>
          {categoryColors.map((category) => (
            <div key={category.category} className={styles.column}>
              <TaskHeader color={category.color} category={category.category}/>
              <AddTask/>
              <Task/>
              <div className='w-full flex items-center justify-center mt-10 cursor-pointer'>      
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-4"
                >
                  <path
                    d="M6 12H18"
                    stroke="#727272"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 18V6"
                    stroke="#727272"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div className="ml-4 text-[#727272]">Add Task</div>
              </div>
              
            </div>
          ))}
        </div>
      </main>

      {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal}/>}
    </div>
  );
}
