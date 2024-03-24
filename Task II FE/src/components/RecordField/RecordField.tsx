import { useState } from 'react'
import { RecordListType } from '../../types'

type RecordFieldProps = {
	setRecords: (records: RecordListType) => void
	clearRecords: () => void
}

export const RecordField: React.FC<RecordFieldProps> = ({
	setRecords,
	clearRecords,
}) => {
	const [isRecording, setIsRecording] = useState(false)
	const [internalRecords, setInternalRecords] = useState<RecordListType>()

	const toggleRecording = () => {
		if (internalRecords) {
			setRecords(internalRecords)
		}
		if (!isRecording) {
			clearRecords()
			setInternalRecords(undefined)
		}
		setIsRecording((prevState) => !prevState)
	}

	const registerPoint = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (!isRecording) return
		const point: RecordListType = [{ x: e.clientX, y: e.clientY }]
		setInternalRecords((prevState) => {
			if (!prevState) return point
			return prevState.concat(point)
		})
	}
	return (
		<>
			<p className="text-xl text-green-800">
				Click inside the box to {isRecording ? 'stop' : 'start'} recording
			</p>
			<div
				className="inline-block w-[500px] h-[500px] border-green-800 bg-green-100 border-2 mb-4"
				onClick={toggleRecording}
				onMouseMoveCapture={isRecording ? registerPoint : undefined}
			/>
		</>
	)
}
