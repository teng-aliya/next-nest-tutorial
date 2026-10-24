'use client';
import { useState, useEffect } from 'react';
import { fetchTasks } from '../services/api.service';

interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
}

export default function HomePage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  useEffect(() => {
    const getTasks = async () => {
      const data = await fetchTasks();
      setTasks(data);
    }
    getTasks();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8"> Tasks from NestJS Backend </h1>

      <div className="w-full max-w-md">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center justify-between p-4 border-b border-gray-700 bg-gray-400 rounded mb-2">
            <span className="text-lg">{task.title}</span>
            <span className={`px-2 py-1 rounded text-sm ${task.isCompleted ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'}`}>
              {task.isCompleted ? 'Done' : 'Pending'}
            </span>
          </div>
        ))}
      </div>
    </main>
  )
}