# fivem-notifications
Native themed NUI notification solution for FiveM.
With this script, you can move your notifications container while retaining the native GTA look.

# Example
```lua
local notif_tick = 0
RegisterCommand("notif",function(...)
    if notif_tick % 4 == 0 then
        exports["notifications"]:Notify("~g~Check ~r~it, ~b~NUI ~o~solution ~p~for ~r~native ~s~notifications.")
    elseif notif_tick % 4 == 1 then
        exports["notifications"]:Notify("~g~Resizable ~r~and ~b~repositionable, ~o~great ~p~for ~r~custom ~s~UIs.")
    elseif notif_tick % 4 == 2 then
        exports["notifications"]:Notify("~g~Uses ~r~common ~b~GTA ~o~color ~p~codes.")
    else
        exports["notifications"]:Notify("~g~R~r~a~b~i~o~n~p~b~r~o~s~w.")
    end
    notif_tick = notif_tick + 1
end)

local pos_tick = 0
RegisterCommand("setpos",function(...)  
    if notif_tick % 2 == 0 then
        exports["notifications"}:Reposition("80%","20px")
    else
        exports["notifications"]:Reposition("20px","100px")
    end
    pos_tick = pos_tick + 1
end)
```

# Preview
[![Video](https://ml6pvb0mhylj.i.optimole.com/MPs4gQ-xHzU2UWU/w:auto/h:auto/q:auto/https://dudeagency.io/wp-content/uploads/2017/06/video-overlay.png)](https://streamable.com/ilnwqp)
