import { RecordListType } from '../../types'

type RecordsListProps = {
	records: RecordListType
}

export const RecordsList: React.FC<RecordsListProps> = ({ records }) => {
	const componentsArray: React.ReactElement[] = []

	for (const [idx, record] of records.entries()) {
		componentsArray.push(
			<p
				key={`${idx} ${record.x} ${record.y}`}
				className="tabular-nums flex justify-between items-center text-center font-sans text-base"
			>
				<span>{idx + 1}.</span>
				<span>X: {record.x}</span>
				<span>Y: {record.y}</span>
			</p>,
		)
	}

	return (
		<div className="max-w-[300px] w-[300px] max-h-[300px] h-[300px] py-2 px-4 overflow-y-auto">
			{componentsArray}
		</div>
	)
}
