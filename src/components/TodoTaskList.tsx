import React, { memo } from "react";
import { TiInputChecked, TiCancel } from "react-icons/ti";
import { MdDelete } from "react-icons/md";

type TodoTaskListProps = {
	todoTask: { id: string; title: string; completed: boolean }[];
	deleteTask: (id: string) => void;
	todoTaskCompletion: (id: string) => void;
};

const TodoTaskList: React.FC<TodoTaskListProps> = memo(
	({ todoTask, deleteTask, todoTaskCompletion }) => {
		const handleCompletion = (id: string) => () => todoTaskCompletion(id);
		const handleDelete = (id: string) => () => deleteTask(id);

		return (
			<section aria-labelledby="task-list">
				<h3 id="task-list" className="text-lg font-medium text-gray-600 mb-2">
					Your Tasks
				</h3>
				<ul id="tasks">
					{todoTask.map((taskValue, index) => (
						<li key={taskValue.id} className="flex justify-between">
							<span className="font-bold pr-2">{index + 1}</span>
							<span
								className={`flex-1 ${
									taskValue.completed ? "line-through text-red-500" : ""
								}`}>
								{taskValue.title}
							</span>
							<span className="flex gap-2">
								{!taskValue.completed ? (
									<button
										aria-label="Mark as complete"
										className="cursor-pointer"
										onClick={handleCompletion(taskValue.id)}>
										<TiInputChecked />
									</button>
								) : (
									<button
										aria-label="Undo task"
										className="cursor-pointer"
										onClick={handleCompletion(taskValue.id)}>
										<TiCancel />
									</button>
								)}
							</span>
							<button
								onClick={handleDelete(taskValue.id)}
								aria-label="Delete task"
								className="text-red-500">
								<MdDelete />
							</button>
						</li>
					))}
				</ul>
			</section>
		);
	}
);

export default TodoTaskList;
