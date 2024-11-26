import { TiInputChecked, TiCancel } from "react-icons/ti";
import { MdDelete } from "react-icons/md";

type TodoTaskListProps = {
	todoTask: { id: string; title: string; completed: boolean }[];
	deleteTask: (id: string) => void;
	todoTaskCompletion: (id: string) => void;
};

const TodoTaskList: React.FC<TodoTaskListProps> = ({
	todoTask,
	deleteTask,
	todoTaskCompletion,
}) => {
	return (
		<section aria-labelledby="task-list">
			<h3 id="task-list" className="text-lg font-medium text-gray-600 mb-2">
				Your Tasks
			</h3>
			<ul id="tasks">
				{todoTask.map((taskValue, index) => (
					<li key={taskValue.id} className="flex justify-between">
						<span className=" font-bold pr-2">{index + 1}</span>
						<span
							className={`flex-1 ${
								taskValue.completed ? "line-through text-red-500" : ""
							}`}>
							{taskValue.title}
						</span>
						<span
							className="flex gap-2"
							onClick={() => todoTaskCompletion(taskValue.id)}>
							{!taskValue.completed ? (
								<button
									aria-label="Mark as complete"
									className=" cursor-pointer">
									<TiInputChecked />
								</button>
							) : (
								<button aria-label="Undo task" className=" cursor-pointer">
									<TiCancel />
								</button>
							)}
						</span>
						<button onClick={() => deleteTask(taskValue.id)}>
							<MdDelete />
						</button>
					</li>
				))}
			</ul>
		</section>
	);
};

export default TodoTaskList;
