const { app, BrowserWindow } = require('electron')
const URL = require('url')


let mainWindow

async function createWindow() {
	mainWindow = new BrowserWindow({
		show: false,
		webPreferences: {
			defaultEncoding: 'utf-8',
			webSecurity: false,
			nodeIntegration: true
		}
	})

	mainWindow.loadURL(URL.format({
		protocol: 'http:',
		host: 'localhost:8080',
		pathname: 'index.html',
		slashes: true
	}))

	mainWindow.once('ready-to-show', () => mainWindow.show())
	mainWindow.on('closed', async () => mainWindow = null)
}

app.on('ready', createWindow)

app.on('activate', () => {
	if (mainWindow === null) createWindow()
})
