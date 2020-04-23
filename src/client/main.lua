Notify = function(msg)
  SendNUIMessage({
    type = "Notify",
    message = msg
  })
end

Reposition = function(left,bottom)
  SendNUIMessage({
    type = "Reposition",
    left = (left or Config.UISettings.left),
    bottom = (bottom or (IsPedInAnyVehicle(GetPlayerPed(-1)) and Config.UISettings.bottom_vehi or Config.UISettings.bottom_norm))
  })
end

Init = function()
  Reposition()
end

RegisterNUICallback('init',Init)
