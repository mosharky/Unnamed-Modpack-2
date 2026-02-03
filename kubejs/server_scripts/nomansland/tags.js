/** @param {$TagKubeEvent} e  */
function biomeTags_NoMansLand(e) {
    e.remove('nomansland:feature_addition/has_cave_weeds', /pastel:.*/)
    e.remove('nomansland:is_cragland', 'minecraft:sparse_jungle')

    e.add('nomansland:feature_addition/has_swamp_foliage', [
        'atmospheric:rainforest_basin',
    ])
    e.add('nomansland:feature_addition/has_rafflesia', [
        '#natures_spirit:is_tropical',
        '#atmospheric:is_rainforest',
    ])


    // Crag rocks
    e.add('kubejs:has_feature/common_crag_rock/terracotta', [
        'minecraft:sparse_jungle'
    ])
    e.add('kubejs:has_feature/crag_rock/andesite', [
        '#kubejs:has_feature/andesite_cliff',
    ])
    e.add('kubejs:has_feature/crag_rock/granite', [
        '#kubejs:has_feature/granite_cliff',
    ])
    e.add('kubejs:has_feature/crag_rock/travertine', [
        '#kubejs:has_feature/travertine_cliff',
    ])
    e.add('kubejs:has_feature/crag_rock/kaolin', [
        e.get('kubejs:has_feature/kaolin_cliff').getObjectIds()
    ])
    e.remove('kubejs:has_feature/crag_rock/kaolin', /.*basin/)

    e.add('kubejs:has_feature/crag_rock/chert', [
        'natures_spirit:arid_savanna'
    ])

    // this was such a bitch to do
    e.removeAll('nomansland:classic_soil')
    e.add('nomansland:classic_soil', e.get('minecraft:is_overworld').getObjectIds())
    e.remove('nomansland:classic_soil', [
        // from https://github.com/Alchemists-Of-Yore/No-Mans-Land/1.21.1/src/main/resources/data/nomansland/tags/worldgen/biome/classic_soil.json
        'minecraft:mushroom_fields',
        'minecraft:frozen_peaks',
        e.get('minecraft:is_ocean').getObjectIds(),
        e.get('minecraft:is_river').getObjectIds(),
        e.get('c:is_desert').getObjectIds(),
        e.get('c:is_cave').getObjectIds(),
        e.get('c:is_badlands').getObjectIds(),
        e.get('minecraft:is_nether').getObjectIds(),
        e.get('minecraft:is_end').getObjectIds(),
        // my filters
        /.*basin/,
        'natures_spirit:tundra',
        e.get('kubejs:has_feature/terracotta_cliff').getObjectIds(),
        e.get('kubejs:has_feature/common_crag_rock/terracotta').getObjectIds(),
        e.get('kubejs:has_feature/crag_rock/travertine').getObjectIds(),
        e.get('kubejs:has_feature/crag_rock/kaolin').getObjectIds(),
        e.get('kubejs:has_feature/crag_rock/chert').getObjectIds(),
        e.get('kubejs:has_feature/chert_cliff').getObjectIds(),
        e.get('kubejs:has_feature/crag_rock/andesite').getObjectIds(),
        e.get('kubejs:has_feature/crag_rock/granite').getObjectIds(),
    ])
}