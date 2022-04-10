const ROOT_PATH = 'https://trofivan.github.io/miro-sdk-test'
const SVG_ICON = `
	<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<circle cx="50%" cy="50%" r="12" fill="black"/>
	</svg>
`
const TITLE = 'SDK Test Plugin'

const handleClick = () => {
	miro.board.ui.openLibrary(`${ROOT_PATH}/library.html`, {title: 'Library'})
	miro.board.ui.openBottomPanel(`${ROOT_PATH}/bottomPanel.html`, {title: 'Bottom Panel'})
}

function run() {
	miro.initialize({
		extensionPoints: {
			toolbar: {
				title: TITLE,
				toolbarSvgIcon: SVG_ICON,
				librarySvgIcon: SVG_ICON,
				onClick: handleClick,
			},
			bottomBar: {
				title: TITLE,
				svgIcon: SVG_ICON,
				positionPriority: 1,
				onClick: handleClick,
			},
		},
	})
}

miro.onReady(run)