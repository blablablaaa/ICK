const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 500})
  //mainWindow = new BrowserWindow({width: 1920, height: 1080})

  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/index.html')

  // Open the DevTools.
  //mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.


function mainFunctions()
{
  $("#button-radio").click(function()
  {
    $(".screen").hide();
    $("#radio-screen").show();
    $(".buttony").css('background-color', '#CFCFCF');
    $(this).css('background-color', '#FF9393');
  });

  $("#button-tel").click(function()
  {
    $(".screen").hide();
    $("#tel-screen").show();
    $(".buttony").css('background-color', '#CFCFCF');
    $(this).css('background-color', '#FF9393');
  });

  $("#button-media").click(function()
  {
    $(".screen").hide();
    $("#media-screen").show();
    $(".buttony").css('background-color', '#CFCFCF');
    $(this).css('background-color', '#FF9393');
  });

  $("#button-nav").click(function()
  {
    $(".screen").hide();
    $("#nav-screen").show();
    $(".buttony").css('background-color', '#CFCFCF');
    $(this).css('background-color', '#FF9393');
  });

  $("#button-klima").click(function()
  {
    $(".screen").hide();
    $("#klima-screen").show();
    $(".buttony").css('background-color', '#CFCFCF');
    $(this).css('background-color', '#FF9393');
  });

  $("#button-komf").click(function()
  {
    $(".screen").hide();
    $("#komf-screen").show();
    $(".buttony").css('background-color', '#CFCFCF');
    $(this).css('background-color', '#FF9393');
  });

  $("#button-info").click(function()
  {
    $(".screen").hide();
    $("#info-screen").show();
    $(".buttony").css('background-color', '#CFCFCF');
    $(this).css('background-color', '#FF9393');
  });

  $("#button-menu").click(function()
  {
    $(".screen").hide();
    $("#menu-screen").show();
    $(".buttony").css('background-color', '#CFCFCF');
    $(this).css('background-color', '#FF9393');
  });

}
