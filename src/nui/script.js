Reposition = function(left,bottom) {
  $("#container").css({
    left:left,
    bottom:bottom
  });
}

let colorCodes = {
  ["~y~"]:"<text style='color:yellow'>",
  ["~g~"]:"<text style='color:green'>",
  ["~s~"]:"<text style='color:white'>",
  ["~w~"]:"<text style='color:rgba(255,255,255,0.8)'>",
  ["~o~"]:"<text style='color:orange'>",
  ["~p~"]:"<text style='color:purple'>",
  ["~r~"]:"<text style='color:red'>",
  ["~b~"]:"<text style='color:blue'>",
}

PrepareString = function(str) {
  for (var i=0;i<str.length;i++) {
    var char = str[i];
    if (char == "~" && str.length >= i+2 && str[i+2] == "~") {
      var code = str.substring(i,i+3);
      str = str.substring(0,i)+colorCodes[code]+str.substring(i+3,str.length);
      return PrepareString(str);
    } 
  }
  return str;
}

Notify = function(msg) {
  var notification = document.createElement('div');
  notification.className = "notification";
  notification.innerHTML = PrepareString(msg);
  $("#container").append(notification);
  $(notification).fadeIn(200,function() {
    setTimeout(function() {
      $(notification).fadeOut(200,function() {
        notification.remove();        
      })
    },5000);    
  });
}

window.addEventListener('message', function(event) {
  switch (event.data.type) {
    case "Reposition":
      Reposition(event.data.left,event.data.bottom);
    break;

    case "Notify":
      Notify(event.data.message);
    break;
  }
})

window.onload = function() {
  $.post("https://notifications/init",{},function(settings) {
    Reposition(settings.left,settings.bottom);
  })
}