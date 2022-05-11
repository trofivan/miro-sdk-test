const ROOT_PATH = 'https://trofivan.github.io/miro-sdk-test'
const SVG_ICON = `
	<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<circle cx="50%" cy="50%" r="12" fill="currentColor" />
	</svg>
`

function run() {
	miro.initialize({
		extensionPoints: {
			bottomBar: {
				title: 'Open Library',
				svgIcon: SVG_ICON,
				positionPriority: 1,
				onClick: () => {
					// miro.board.ui.openLeftSidebar(`${ROOT_PATH}/bottomPanel.html`, {title: 'LeftSidebar'})
					// miro.board.ui.openLeftSidebar(`${ROOT_PATH}/bottomPanel.html`, {placement: 'LeftApps'})
					miro.board.ui.openLibrary(`${ROOT_PATH}/bottomPanel.html`, {title: 'External PLugin'})
				},
			},
		},
	})
}

miro.onReady(run)