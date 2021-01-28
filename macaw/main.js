const { app, BrowserWindow } = require("electron")
const { Notification } = require("electron")

var window = null;

function createWindow() {
    window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferennces: {
            nodeIntegration: true
        }
    });
    window.loadFile("index.html");
    // window.setProgressBar(0.5); //NOTE: to show progress
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    if(process.platform !== "darwin") {
        app.quit();
    }
})

app.on("activate", () => {
    if(BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
})