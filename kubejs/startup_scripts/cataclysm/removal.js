function removals_Cataclysm() {
    global.REMOVALS.add([
        'cataclysm:pointed_icicle',
        'cataclysm:stone_pillar',
        'cataclysm:end_stone_pillar',
        'cataclysm:blackstone_pillar',
        'cataclysm:chiseled_end_stone_bricks',
        /cataclysm:.*chorus.*/,
        'cataclysm:stone_tile_slab',
        'cataclysm:stone_tile_stair',
        'cataclysm:stone_tile_wall',
        'cataclysm:stone_tiles',
        /cataclysm:(?!.*void.*).*purpur.*/,
        'cataclysm:blackstone_pillar',
        'cataclysm:prismarine_brick_wall'
    ])

    global.BLOCK_SWAPPER.set('cataclysm:stone_pillar', 'create:andesite_pillar')
    global.BLOCK_SWAPPER.set('cataclysm:pointed_icicle', 'immersive_weathering:icicle')
    global.BLOCK_SWAPPER.set('cataclysm:end_stone_pillar', 'unusualend:endstone_pillar')
    global.BLOCK_SWAPPER.set('cataclysm:chiseled_end_stone_bricks', 'unusualend:chiseled_endstone_dragon')
    global.BLOCK_SWAPPER.set('cataclysm:chorus_stem', 'goety:chorus_log')
    global.BLOCK_SWAPPER.set('cataclysm:chorus_planks', 'goety:chorus_planks')
    global.BLOCK_SWAPPER.set('cataclysm:chorus_slab', 'goety:chorus_slab')
    global.BLOCK_SWAPPER.set('cataclysm:chorus_stairs', 'goety:chorus_stairs')
    global.BLOCK_SWAPPER.set('cataclysm:chorus_fence', 'goety:chorus_fence')
    global.BLOCK_SWAPPER.set('cataclysm:chorus_trapdoor', 'goety:chorus_trapdoor')
    global.BLOCK_SWAPPER.set('cataclysm:chiseled_purpur_block', 'unusualend:chiseled_polished_purpur_tiles')
    global.BLOCK_SWAPPER.set('cataclysm:purpur_tiles', 'unusualend:polished_purpur_tiles')
    global.BLOCK_SWAPPER.set('cataclysm:purpur_tile_slab', 'unusualend:polished_purpur_tiles_slab')
    global.BLOCK_SWAPPER.set('cataclysm:purpur_tile_stairs', 'unusualend:polished_purpur_tiles_stairs')
    global.BLOCK_SWAPPER.set('cataclysm:purpur_tile_wall', 'unusualend:polished_raw_purpur_brick_wall')
    global.BLOCK_SWAPPER.set('cataclysm:purpur_tile_pillar', 'minecraft:purpur_pillar')
    global.BLOCK_SWAPPER.set('cataclysm:purpur_wall', 'goety:purpur_wall')
    global.BLOCK_SWAPPER.set('cataclysm:blackstone_pillar', 'netherexp:polished_blackstone_pillar')
    global.BLOCK_SWAPPER.set('cataclysm:stone_tiles', 'supplementaries:stone_tile')
    global.BLOCK_SWAPPER.set('cataclysm:stone_tile_stairs', 'supplementaries:stone_tile_stairs')
    global.BLOCK_SWAPPER.set('cataclysm:stone_tile_slab', 'supplementaries:stone_tile_slab')
    global.BLOCK_SWAPPER.set('cataclysm:stone_tile_wall', 'supplementaries:stone_tile_wall')
    global.BLOCK_SWAPPER.set('cataclysm:prismarine_brick_wall', 'immersive_weathering:prismarine_brick_wall')
}