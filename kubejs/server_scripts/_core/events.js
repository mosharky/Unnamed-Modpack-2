BlockEvents.rightClicked('minecraft:end_portal_frame', e => antiLoser(e, 'minecraft:ender_eye', 'alexsmobs:bear_dust', 5))
BlockEvents.rightClicked('minecraft:soul_sand', e => antiLoser(e, 'minecraft:wither_skeleton_skull', 'alexsmobs:bear_dust', 5))

EntityEvents.checkSpawn(global.ENTITY_REMOVALS, e => e.success(false))