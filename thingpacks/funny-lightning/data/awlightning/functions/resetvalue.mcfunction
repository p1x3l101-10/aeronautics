schedule function awlightning:resetvalue 1s
execute as @a[scores={al.death=1..}] run function awlightning:resetvalue_func1
execute as @a run scoreboard players add @s al.count 0
execute as @a[scores={al.lx=1,al.deathtime=0}] at @s run function awlightning:resetvalue_func2.1
execute as @a[scores={al.lx=1,al.deathtime=1..}] run scoreboard players remove @s al.deathtime 1
