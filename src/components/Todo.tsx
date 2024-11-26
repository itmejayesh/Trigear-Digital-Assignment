import TodoTaskList from "./TodoTaskList";
import TodoFormInput from "./TodoFormInput";
import { useEffect, useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

const Todo: React.FC = () => {
	const [todoTask, setTodoTask] = useState<
		{ id: string; title: string; completed: boolean }[]
	>([]);

	const handleFormSubmit = useCallback(
		(inputValue: string) => {
			const trimmedInput = inputValue.trim();

			if (!trimmedInput) return;

			if (todoTask.some((task) => task.title === trimmedInput)) {
				return;
			}

			setTodoTask((prevTask) => [
				...prevTask,
				{ id: uuidv4(), title: trimmedInput, completed: false },
			]);
		},
		[todoTask, setTodoTask]
	);

	const deleteTask = useCallback(
		(id: string) => {
			setTodoTask((prevTasks) => {
				const updatedTasks = prevTasks.filter((val) => val.id !== id);

				if (updatedTasks.length === 0) {
					localStorage.removeItem("Todo-App");
				}
				return updatedTasks;
			});
		},
		[setTodoTask]
	);

	const todoTaskCompletion = useCallback(
		(id: string) => {
			setTodoTask((prevTasks) =>
				prevTasks.map((task) =>
					task.id === id ? { ...task, completed: !task.completed } : task
				)
			);
		},
		[setTodoTask]
	);

	useEffect(() => {
		const storedTasks = localStorage.getItem("Todo-App");
		if (storedTasks) {
			setTodoTask(JSON.parse(storedTasks));
		}
	}, []);

	useEffect(() => {
		if (todoTask.length > 0) {
			localStorage.setItem("Todo-App", JSON.stringify(todoTask));
		} else {
			localStorage.removeItem("Todo-App");
		}
	}, [todoTask]);

	return (
		<section
			aria-labelledby="task-manager"
			className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
			<TodoFormInput onAddTodo={handleFormSubmit} />

			<TodoTaskList
				todoTask={todoTask}
				deleteTask={deleteTask}
				todoTaskCompletion={todoTaskCompletion}
			/>
		</section>
	);
};

export default Todo;
