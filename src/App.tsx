import Todo from "./components/Todo";

const App = () => {
	return (
		<main className="flex flex-col items-center min-h-screen bg-black p-4">
			<section>
				<header>
					<h1 className="text-white text-3xl font-bold py-10">Todo List App</h1>
				</header>
			</section>

			<Todo />
		</main>
	);
};

export default App;
