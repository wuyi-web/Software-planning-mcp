export interface Todo {
  id: string;
  title: string;
  description: string;
  complexity: number;
  codeExample?: string;
  isComplete: boolean;
}

export interface Plan {
  goal: string;
  todos: Todo[];
  savedAt: Date;
}
