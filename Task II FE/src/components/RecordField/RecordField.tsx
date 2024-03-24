import { useState } from 'react'

type RecordFieldProps = {
	setRecords?: (record: { x: string; y: string }) => void
	clearRecords?: () => void
}

export const RecordField: React.FC<RecordFieldProps> = ({ setRecords }) => {
	const [isRecording, setIsRecording] = useState(false)

	const toggleRecording = () => {
		setIsRecording((prevState) => !prevState)
	}

	const registerPoint = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		console.log(e.clientX, e.clientY)
	}
	console.log(setRecords)
	return (
		<>
			<p className="text-xl text-green-800">
				Click inside the box to start recording
			</p>
			<div
				className="inline-block w-[500px] h-[500px] border-green-800 border-2 mb-20"
				onClick={toggleRecording}
				onMouseMove={isRecording ? registerPoint : undefined}
			/>
		</>
	)
}
