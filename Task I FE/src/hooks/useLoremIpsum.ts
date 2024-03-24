import { loremIpsum } from 'lorem-ipsum'
import { useMemo } from 'react'

export const useLoremIpsum = () => {
	const text = useMemo(
		() =>
			loremIpsum({
				count: 4,
				format: 'plain',
				paragraphLowerBound: 30,
				paragraphUpperBound: 70,
				sentenceLowerBound: 5,
				sentenceUpperBound: 15,
				units: 'paragraph',
			}),
		[],
	)

	return {
		text,
	}
}
