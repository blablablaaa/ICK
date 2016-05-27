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
  var temp1 = 25;
  var temp2 = 25;
  var naw1 = 30;
  var naw2 = 30;

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

  $("#button-radio-1").click(function()
  {
    $("#radio-station").text("UNKNOWN" +" - FM "+(Number((Math.random() * (110.0 - 87.0) + 87.0).toFixed(2)))+ " mHz");
  });

  $("#button-radio-2").click(function()
  {
    $("#radio-station").text("UNKNOWN." +" - FM "+(Number((Math.random() * (110.0 - 87.0) + 87.0).toFixed(2)))+ " mHz");
  });

  $("#button-radio-3").click(function()
  {
    $("#info").show();

    setTimeout(function(){
      $("#info").hide();
    }, 1200);
  });

  $("#button-media-1").click(function()
  {
    $("#info").show();

    setTimeout(function(){
      $("#info").hide();
    }, 1200);
  });

  $("#button-media-2").click(function()
  {
    $("#info").show();

    setTimeout(function(){
      $("#info").hide();
    }, 1200);
  });

  $("#button-media-3").click(function()
  {
    $("#info").show();

    setTimeout(function(){
      $("#info").hide();
    }, 1200);
  });

  $("#temp-1-p").click(function()
  {
    if(temp1<40){
      temp1++;
      $("#tempp1").text("Temperatura: "+temp1+"*C");
    }
  });

  $("#temp-1-m").click(function()
  {
    if(temp1>10){
      temp1--;
      $("#tempp1").text("Temperatura: "+temp1+"*C");
    }
  });

  $("#temp-2-p").click(function()
  {
    if(temp2<40){
      temp2++;
      $("#tempp2").text("Temperatura: "+temp2+"*C");
    }
  });

  $("#temp-2-m").click(function()
  {
    if(temp2>10){
      temp2--;
      $("#tempp2").text("Temperatura: "+temp2+"*C");
    }
  });

  $("#naw-1-p").click(function()
  {
    if(naw1<100){
      naw1+=5;
      $("#nawiew1").text("Siła nawiewu: "+naw1+"%");
    }
  });

  $("#naw-1-m").click(function()
  {
    if(naw1>0){
      naw1-=5;
      $("#nawiew1").text("Siła nawiewu: "+naw1+"%");
    }
  });

  $("#naw-2-p").click(function()
  {
    if(naw2<100){
      naw2+=5;
      $("#nawiew2").text("Siła nawiewu: "+naw2+"%");
    }
  });

  $("#naw-2-m").click(function()
  {
    if(naw2>0){
      naw2-=5;
      $("#nawiew2").text("Siła nawiewu: "+naw2+"%");
    }
  });

  $("#klaw-butt1").click(function()
  {
    if($("#tel-sub3").text().length<12){
      $("#tel-sub3").text($("#tel-sub3").text()+"1");
    }
  });
  $("#klaw-butt2").click(function()
  {
    if($("#tel-sub3").text().length<12){
      $("#tel-sub3").text($("#tel-sub3").text()+"2");
    }
  });
  $("#klaw-butt3").click(function()
  {
    if($("#tel-sub3").text().length<12){
      $("#tel-sub3").text($("#tel-sub3").text()+"3");
    }
  });
  $("#klaw-butt4").click(function()
  {
    if($("#tel-sub3").text().length<12){
      $("#tel-sub3").text($("#tel-sub3").text()+"4");
    }
  });
  $("#klaw-butt5").click(function()
  {
    if($("#tel-sub3").text().length<12){
      $("#tel-sub3").text($("#tel-sub3").text()+"5");
    }
  });
  $("#klaw-butt6").click(function()
  {
    if($("#tel-sub3").text().length<12){
      $("#tel-sub3").text($("#tel-sub3").text()+"6");
    }
  });
  $("#klaw-butt7").click(function()
  {
    if($("#tel-sub3").text().length<12){
      $("#tel-sub3").text($("#tel-sub3").text()+"7");
    }
  });
  $("#klaw-butt8").click(function()
  {
    if($("#tel-sub3").text().length<12){
      $("#tel-sub3").text($("#tel-sub3").text()+"8");
    }
  });
  $("#klaw-butt9").click(function()
  {
    if($("#tel-sub3").text().length<12){
      $("#tel-sub3").text($("#tel-sub3").text()+"9");
    }
  });
  $("#klaw-butt10").click(function()
  {
    if($("#tel-sub3").text().length<12){
      $("#tel-sub3").text($("#tel-sub3").text()+"#");
    }
  });
  $("#klaw-butt11").click(function()
  {
    if($("#tel-sub3").text().length<12){
      $("#tel-sub3").text($("#tel-sub3").text()+"0");
    }
  });
  $("#klaw-butt12").click(function()
  {
      $("#tel-sub3").text("");
  });

  $("#info-div1").click(function()
  {
      $("#info-sub1").show();
      $("#info-sub2").show();
      $("#info-sub3").show();

      $("#info-sub4").hide();
      $("#info-sub5").hide();
      $("#info-sub6").hide();
      $("#info-sub7").hide();

      $("#info-sub8").hide();
      $("#info-sub9").hide();
  });

  $("#info-div2").click(function()
  {
      $("#info-sub1").hide();
      $("#info-sub2").hide();
      $("#info-sub3").hide();

      $("#info-sub4").show();
      $("#info-sub5").show();
      $("#info-sub6").show();
      $("#info-sub7").show();

      $("#info-sub8").hide();
      $("#info-sub9").hide();
  });

  $("#info-div3").click(function()
  {
      $("#info-sub1").hide();
      $("#info-sub2").hide();
      $("#info-sub3").hide();

      $("#info-sub4").hide();
      $("#info-sub5").hide();
      $("#info-sub6").hide();
      $("#info-sub7").hide();

      $("#info-sub8").show();
      $("#info-sub9").show();
  });

}
