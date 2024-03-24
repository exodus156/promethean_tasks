import { LinkButton, Text, Title } from 'components'
import styles from './PageContent.module.scss'
import { useEffect, useState } from 'react'

type ButtonsDataType = {
	text: string
	linkTo: string
}

export type PageContentProps = {
	variant: 'home' | 'subpage1' | 'subpage2'
	contentTitle: string
	pageText: string
}

export const PageContent: React.FC<PageContentProps> = ({
	contentTitle,
	pageText,
	variant,
}) => {
	const [buttonsData, setButtonsData] = useState<ButtonsDataType[]>()

	useEffect(() => {
		switch (variant) {
			case 'home':
				setButtonsData([
					{ text: 'Subpage1', linkTo: '/Subpage1' },
					{ text: 'Subpage2', linkTo: '/Subpage2' },
				])
				break
			case 'subpage1':
				setButtonsData([
					{ text: 'Home', linkTo: '/' },
					{ text: 'Subpage2', linkTo: '/Subpage2' },
				])
				break
			case 'subpage2':
				setButtonsData([
					{ text: 'Home', linkTo: '/' },
					{ text: 'Subpage1', linkTo: '/Subpage1' },
				])
				break
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className={styles.pageContentWrapper}>
			<div className={styles.navWrapper}>
				{buttonsData &&
					buttonsData.map(({ text, linkTo }) => (
						<LinkButton
							key={linkTo}
							text={text}
							linkTo={linkTo}
						/>
					))}
			</div>
			<Title
				className={styles.title}
				text={contentTitle}
			/>
			<Text className={styles.textContent}>{pageText}</Text>
		</div>
	)
}
