"use client"; 
import React, { useState, DragEvent } from "react";
import styles from "../styles/Home.module.css";
import Header from "./components/header";
import SideBar from "./components/sidebar";
import TaskHeader from "./components/taskheader";
import AddTask from "./components/addtask";
import Task from "./components/task";
import Modal from "./components/modal";

type TaskCategory = "Todo" | "InProgress" | "Completed";

interface TaskData {
  id: number;
  type: TaskCategory;
  title: string;
  description: string;
  priority: "High" | "Medium" | "Low";
  dueDate: Date;
}

interface Tasks {
  Todo: TaskData[];
  InProgress: TaskData[];
  Completed: TaskData[];
}

const initialTasks: TaskData[] = [
  {
    id: 1,
    type: "Todo",
    title: "Project setup and initial configurations",
    description: "This task involves setting up the project environment and configuring all necessary tools and frameworks to ensure smooth development.",
    priority: "High",
    dueDate: new Date("2022-12-31"),
  },
  {
    id: 2,
    type: "InProgress",
    title: "Project setup and initial configurations",
    description: "This task involves setting up the project environment and configuring all necessary tools and frameworks to ensure smooth development.",
    priority: "Medium",
    dueDate: new Date("2022-12-31"),
  },
  {
    id: 3,
    type: "Completed",
    title: "Project setup and initial configurations",
    description: "This task involves setting up the project environment and configuring all necessary tools and frameworks to ensure smooth development.",
    priority: "Low",
    dueDate: new Date("2022-12-31"),
  },
];

const categoryColors: { category: TaskCategory; color: string }[] = [
  { category: "Todo", color: "#FFAD0D" },
  { category: "InProgress", color: "#0C6FBF" },
  { category: "Completed", color: "#2A7E2E" },
];

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Tasks>({
    Todo: initialTasks.filter(task => task.type === "Todo"),
    InProgress: initialTasks.filter(task => task.type === "InProgress"),
    Completed: initialTasks.filter(task => task.type === "Completed"),
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addNewTask, setAddNewTask] = useState<{ type: TaskCategory; status: boolean }>({ type: "Todo", status: false });

  const closeModal = () => setIsModalOpen(false);

  const addTask = (category: TaskCategory) => {
    const title = prompt("Enter a task title:");
    const description = prompt("Enter a task description:");
    if (title && description) {
      const newTask: TaskData = {
        id: Date.now(), // Using timestamp as a unique ID
        type: category,
        title,
        description,
        priority: "Low", // Default priority
        dueDate: new Date(), // Default due date
      };
      setTasks({
        ...tasks,
        [category]: [...tasks[category], newTask],
      });
    }
  };

  const handleAddTask = (category: TaskCategory) => {
    setAddNewTask({ type: category, status: true });
  };

  const handleDragStart = (e: DragEvent<HTMLDivElement>, taskId: number, taskType: TaskCategory) => {
    e.dataTransfer.setData("taskId", taskId.toString());
    e.dataTransfer.setData("taskType", taskType);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>, category: TaskCategory) => {
    e.preventDefault();
    const taskId = parseInt(e.dataTransfer.getData("taskId"));
    const taskType = e.dataTransfer.getData("taskType") as TaskCategory;

    if (taskType === category) return;

    const task = tasks[taskType].find(task => task.id === taskId);
    if (task) {
      setTasks({
        ...tasks,
        [taskType]: tasks[taskType].filter(task => task.id !== taskId),
        [category]: [...tasks[category], task],
      });
    }
  };

  return (
    <div className={styles.container}>
      <SideBar />
      <main className={styles.main}>
        <Header isModalOpen={setIsModalOpen} />
        <div className={styles.board}>
          {categoryColors.map(({ category, color }) => (
            <div
              key={category}
              className={styles.column}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, category)}
            >
              <TaskHeader
                color={color}
                category={category}
                handleNewTask={() => handleAddTask(category)}
              />

              {addNewTask.type === category && addNewTask.status && <AddTask />}

              {tasks[category].map((task) => (
                <Task
                  key={task.id}
                  type={task.type}
                  title={task.title}
                  priority={task.priority}
                  description={task.description}
                  draggable
                  onDragStart={(e) => handleDragStart(e, task.id, task.type)}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, task.type)} id={0}/>

              ))}

              <div className="w-full flex items-center justify-center mt-10 cursor-pointer">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-4"
                  onClick={() => handleAddTask(category)}
                >
                  <path
                    d="M6 12H18"
                    stroke="#727272"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 18V6"
                    stroke="#727272"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div
                  className="ml-4 text-[#727272]"
                  onClick={() => handleAddTask(category)}
                >
                  Add Task
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} />}
    </div>
  );
};

export default Home;
