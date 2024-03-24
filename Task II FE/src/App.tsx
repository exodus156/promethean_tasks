import { RecordField, RecordsList, Title } from './components'

function App() {
	return (
		<div className="flex flex-col items-center h-[100vh] bg-green-50 font-serif">
			<Title>Record points app</Title>
			<RecordField />
			<RecordsList />
		</div>
	)
}

export default App
