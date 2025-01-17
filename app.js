const {app, BrowserWindow} = require('electron')
const url = require("url");
const path = require("path");
// const iconPath = path.join(__dirname, "build", "ic")

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 768,
    webPreferences: {
      nodeIntegration: true
    },
    frame: true,
    autoHideMenuBar: true,
    // icon: "./app/src/favicon.ico"
  })

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/Hunde-Trainer/index.html`),
      protocol: "file:",
      slashes: true
    })
  );
  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})
