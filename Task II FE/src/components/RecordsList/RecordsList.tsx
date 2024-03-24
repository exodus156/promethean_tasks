type RecordsListProps = {
	records?: {
		x: string
		y: string
	}[]
}

export const RecordsList: React.FC<RecordsListProps> = ({ records }) => {
	console.log(records)
	return <div>Record List</div>
}
