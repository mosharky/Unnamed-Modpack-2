/** @param {$KubeDataGenerator} e  */
function worldgen_Core(e) {
    removeFeatures(e, ['minecraft:spring_lava', 'minecraft:spring_lava_frozen'], '#minecraft:is_overworld', FLUID_SPRINGS)

    addFeatures(e, registerCliff(e, 'minecraft:andesite',
        256, -2, 2, -8, 0,
        ["minecraft:grass_block", "natures_spirit:red_moss_block", "minecraft:dirt", "minecraft:snow_block", "minecraft:stone", "minecraft:coarse_dirt", "minecraft:andesite"],
        ["minecraft:grass_block", "natures_spirit:red_moss_block", "minecraft:dirt", "minecraft:snow_block", "minecraft:stone", "minecraft:coarse_dirt", "minecraft:andesite"]
    ), '#kubejs:has_feature/andesite_cliff', RAW_GENERATION)
    addFeatures(e, registerCliff(e, 'minecraft:granite',
        256, -2, 2, -16, 0,
        ["minecraft:grass_block", "minecraft:stone", "minecraft:dirt", "minecraft:rooted_dirt", "minecraft:granite"],
        ["minecraft:grass_block", "minecraft:stone", "minecraft:dirt", "minecraft:rooted_dirt", "minecraft:granite"]
    ), '#kubejs:has_feature/granite_cliff', RAW_GENERATION)
    addFeatures(e, registerCliff(e, 'minecraft:stone',
        256, -2, 2, -8, 0,
        ["minecraft:grass_block", "natures_spirit:red_moss_block", "minecraft:dirt", "minecraft:snow_block", "minecraft:stone"],
        ["minecraft:grass_block", "natures_spirit:red_moss_block", "minecraft:snow_block", "minecraft:stone", "minecraft:gravel", "minecraft:dirt"]
    ), '#kubejs:has_feature/stone_cliff', RAW_GENERATION)
    addFeatures(e, registerCliff(e, 'minecraft:terracotta',
        96, -2, 2, -6, 0,
        ["minecraft:grass_block", "minecraft:dirt", "minecraft:stone", "minecraft:terracotta"],
        ["minecraft:grass_block", "minecraft:dirt", "minecraft:stone", "minecraft:terracotta"]
    ), '#kubejs:has_feature/terracotta_cliff', RAW_GENERATION)

    removeFeatures(e, [
        'minecraft:ore_granite_lower',
        'minecraft:ore_granite_upper',
        'minecraft:ore_andesite_lower',
        'minecraft:ore_andesite_upper',
        // hoping to get a different way to get diorite aside from underground idk
        // 'minecraft:ore_diorite_lower',
        'minecraft:ore_diorite_upper',
        'minecraft:ore_dirt',
    ], '#minecraft:is_overworld', UNDERGROUND_ORES)

    registerFeature(e, PLACED, 'minecraft:ore_gravel', {
        feature: 'minecraft:ore_gravel',
        placement: [
            { type: 'minecraft:count', count: 2 },
            { type: 'minecraft:in_square' },
            {
                type: 'minecraft:height_range',
                height: {
                    type: 'minecraft:uniform',
                    max_inclusive: { absolute: 60 },
                    min_inclusive: { absolute: 0 }
                }
            },
            { type: 'minecraft:biome' }
        ]
    })
}


/** @param {$KubeDataGenerator} e  */
function structures_Core(e) {
    // https://teamabnormals.wiki.gg/wiki/Structure_Repaletters
    // Swapping all blocks with Blueprint
    const repaletterJson = {
        structures: '#kubejs:all_structures',
        repaletter: [],
    }

    global.BLOCK_SWAPPER.forEach((replacesWith, replacesBlock) => {
        if (Block.getBlock(replacesWith) == null || !Block.getBlock(replacesBlock) == null) {
            console.error(`BLOCKSWAP ERROR - One of these blocks don't exist: ${replacesWith} : ${replacesBlock}`)
            return
        }
        repaletterJson.repaletter.push({
            type: 'blueprint:simple',
            replaces_block: replacesBlock,
            replaces_with: replacesWith
        })
    })

    e.json('kubejs:blueprint/structure_repaletters/block_swapper', repaletterJson)


    global.STRUCTURE_BLOCK_SWAPPER.forEach((swapMap, structure) => {
        const json = {
            priority: 1,  // Higher priority value = loads earlier
            structures: structure,
            repaletter: [],
        }
        swapMap.forEach((replacesWith, replacesBlock) => {
            if (Block.getBlock(replacesWith) == null || !Block.getBlock(replacesBlock) == null) {
                console.error(`BLOCKSWAP ERROR - One of these blocks don't exist: ${replacesWith} : ${replacesBlock} for structure ${structure}`)
                return
            }
            json.repaletter.push({
                type: 'blueprint:simple',
                replaces_block: replacesBlock,
                replaces_with: replacesWith
            })
        })

        e.json(`kubejs:blueprint/structure_repaletters/${nameProcess(structure)}`, json)
    })

    // Replacing minecraft:chest with oak chest by default
    e.json('kubejs:blueprint/structure_repaletters/default_oak_chest', {
        priority: 2,  // Higher priority value = loads later
        structures: '#kubejs:minecraft/has_oak_chest',
        repaletter: [
            {
                type: 'blueprint:simple',
                replaces_block: 'minecraft:chest',
                replaces_with: 'woodworks:oak_chest'
            },
            {
                type: 'blueprint:simple',
                replaces_block: 'minecraft:trapped_chest',
                replaces_with: 'woodworks:trapped_oak_chest'
            },
        ],
    })
}