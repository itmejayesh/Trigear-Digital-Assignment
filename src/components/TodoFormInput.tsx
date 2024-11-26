import { useState } from "react";
import { Button } from "./ui/button";

const TodoFormInput = ({
	onAddTodo,
}: {
	onAddTodo: (value: string) => void;
}) => {
	const [inputValue, setInputValue] = useState<string>("");

	const handleInputValue = (value: string) => {
		setInputValue(value);
	};

	const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		onAddTodo(inputValue);
		setInputValue("");
	};

	return (
		<section>
			<form
				onSubmit={handleFormSubmit}
				id="add-task-form"
				aria-label="Add Task"
				className="flex items-center gap-2 mb-6">
				<label htmlFor="task-input" className=" sr-only">
					Add a new task:
				</label>
				<input
					type="text"
					id="task-input"
					className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-black focus:outline-none"
					placeholder="Enter your task"
					value={inputValue}
					onChange={(event) => handleInputValue(event.target.value)}
					required
					autoComplete="off"
				/>
				<Button
					type="submit"
					aria-label="Add Task"
					className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-600">
					Add Task
				</Button>
			</form>
		</section>
	);
};

export default TodoFormInput;
