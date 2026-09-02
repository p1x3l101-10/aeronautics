# Desc: All commands here run every tick
#
# Called by: main:load
# 1 AlC = 5s

schedule function awlightning:main 3s
execute if score $awf.settings al.owr matches 0 run execute as @r[scores={al.hp=..7,al.count=0}] at @s run function awlightning:smlight
function awlightning:main2