const {app, BrowserWindow} = require('electron');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
      height: 730,
      width: 1280
  });

  mainWindow.loadURL('file://' + __dirname + '/index.html');
});
