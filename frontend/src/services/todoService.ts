import axios from 'axios';
import { Todo, CreateTodoDto, UpdateTodoDto } from '../types/todo';

const API_URL = 'http://localhost:3001/todos';

export const todoService = {
  async getAllTodos(): Promise<Todo[]> {
    const response = await axios.get(API_URL);
    return response.data;
  },

  async createTodo(todo: CreateTodoDto): Promise<Todo> {
    const response = await axios.post(API_URL, todo);
    return response.data;
  },

  async updateTodo(id: number, todo: UpdateTodoDto): Promise<Todo> {
    const response = await axios.patch(`${API_URL}/${id}`, todo);
    return response.data;
  },

  async deleteTodo(id: number): Promise<void> {
    await axios.delete(`${API_URL}/${id}`);
  },

  async toggleTodo(id: number): Promise<Todo> {
    const response = await axios.patch(`${API_URL}/${id}/toggle`);
    return response.data;
  },

  async searchTodos(query: string): Promise<Todo[]> {
    const response = await axios.get(`${API_URL}/search`, {
      params: { query }
    });
    return response.data;
  }
}; 