/** @param {$TagKubeEvent} e */
function biomeTags_ImmersiveWeathering(e) {
    e.removeAll('immersive_weathering:has_permafrost')
    e.add('immersive_weathering:has_permafrost', [
        'minecraft:frozen_river',
        'minecraft:snowy_plains',
        'minecraft:snowy_beach',
        'minecraft:snowy_taiga',
        'minecraft:grove',
        'minecraft:snowy_slopes',
        'minecraft:jagged_peaks',
        'minecraft:frozen_peaks',
        'minecraft:ice_spikes',
        'windswept:snowy_chestnut_forest',
        'windswept:snowy_pine_barrens',
        'natures_spirit:tundra',
        'natures_spirit:snowcapped_red_peaks',
        'natures_spirit:boreal_taiga',
        'natures_spirit:snowy_fir_forest',
        'environmental:snowy_pine_barrens',
        'environmental:snowy_old_growth_pine_barrens',
    ])

    e.removeAll('immersive_weathering:has_silt')
    e.add('immersive_weathering:has_silt', [
        'minecraft:swamp',
        'minecraft:mangrove_swamp',
        'natures_spirit:marsh',
        'minecraft:river',
        'climaterivers:lukewarm_river',
        'climaterivers:cold_river',
    ])
    
    e.add('immersive_weathering:has_sandy_dirt', [
        'climaterivers:warm_river',
        // NS biomes that have sandy soil
        'natures_spirit:arid_highlands',
        'natures_spirit:blooming_highlands',
        'natures_spirit:dusty_slopes',
        'natures_spirit:red_peaks',
        'natures_spirit:shrubby_highlands',
        'natures_spirit:sleeted_slopes',
        'natures_spirit:snowcapped_red_peaks',
        'natures_spirit:woody_highlands',
        'natures_spirit:wooded_drylands',
        'natures_spirit:stratified_desert',
        'natures_spirit:chaparral',
        'natures_spirit:blooming_dunes',
    ])

    e.add('kubejs:has_feature/permafrost_cliff', '#immersive_weathering:has_permafrost')
}