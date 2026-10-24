import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto.js';
import { UpdateTaskDto } from './dto/update-task.dto.js';

export interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
}

@Injectable()
export class TaskService {
  create(createTaskDto: CreateTaskDto) {
    return 'This action adds a new task';
  }

  // Simulating a database with a private array
  private tasks: Task[] = [
    { id: 1, title: 'Write a NestJS Article', isCompleted: false },
    { id: 2, title: 'Deploy Backend API', isCompleted: true },
  ];

  findAll(): Task[] {
    return this.tasks;
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
