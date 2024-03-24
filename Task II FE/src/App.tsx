import { useState } from 'react'
import { RecordField, RecordsList, Title } from './components'
import { RecordListType } from './types'

function App() {
	const [recordedPoints, setRecordedPoints] = useState<RecordListType>()

	const handleRecordPoints = (records: RecordListType) => {
		setRecordedPoints(records)
	}

	const handleClearRecords = () => {
		setRecordedPoints(undefined)
	}

	return (
		<div className="flex flex-col items-center h-[100vh] bg-green-50 font-serif">
			<Title>Record points app</Title>
			<RecordField
				setRecords={handleRecordPoints}
				clearRecords={handleClearRecords}
			/>
			{!!recordedPoints && <RecordsList records={recordedPoints} />}
		</div>
	)
}

export default App
