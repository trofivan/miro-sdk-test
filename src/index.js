const ROOT_PATH = 'https://trofivan.github.io/miro-sdk-test'
const SVG_ICON = `
	<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<circle cx="50%" cy="50%" r="12" fill="black"/>
	</svg>
`

function run() {
	miro.initialize({
		extensionPoints: {
			toolbar: {
				title: 'Miro SDK Test Plugin',
				toolbarSvgIcon: SVG_ICON,
				librarySvgIcon: SVG_ICON,
				onClick: () => {
					miro.board.ui.openLibrary(`${ROOT_PATH}/library.html`, {title: 'Library'})
					miro.board.ui.openBottomPanel(`${ROOT_PATH}/bottomPanel.html`, {title: 'Bottom Panel'})
				},
			},
		},
	})
}

miro.onReady(run)