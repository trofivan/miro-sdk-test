const ROOT_PATH = 'https://trofivan.github.io/miro-sdk-test'
const SVG_ICON = '<path d="M14.554,0C6.561,0,0,6.562,0,14.552c0,7.996,6.561,14.555,14.554,14.555c7.996,0,14.553-6.559,14.553-14.555 C29.106,6.562,22.55,0,14.554,0z"/>'

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