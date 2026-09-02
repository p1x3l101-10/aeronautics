scoreboard players set @s al.count 12
# Stage 1
scoreboard players operation @s al.deathtime_m2 = @s crng4mc.base
scoreboard players operation @s al.deathtime_m2 %= $awf.limit crng4mc.limit
# Stage 2
scoreboard players operation @s al.rng_cache = @s crng4mc.base
scoreboard players operation @s al.rng_cache *= $awf.limit crng4mc.div2
# Stage 3
scoreboard players operation @s al.deathtime = @s al.rng_cache
scoreboard players operation @s al.deathtime %= $awf.limit crng4mc.limit
# Stage 4
scoreboard players operation @s al.deathtime += @s al.deathtime_m2
scoreboard players operation @s al.deathtime *= $awf.limit crng4mc.div2
scoreboard players add @s al.deathtime 3
scoreboard players operation @s al.deathtime_m2 = @s al.deathtime
scoreboard players set @s al.lx 1
