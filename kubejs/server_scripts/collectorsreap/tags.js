/** @param {$TagKubeEvent} e */
function biomeTags_CollectorsReap(e) {
    e.add('collectorsreap:has_spawn/dragon_fruit', [
        'natures_spirit:lively_dunes',
        'natures_spirit:blooming_dunes',
        '#atmospheric:is_dunes'
    ])
    e.add('collectorsreap:has_spawn/lime', [
        'natures_spirit:floral_ridges',
        'natures_spirit:tropical_basin',
        'natures_spirit:tropical_woods',
        'natures_spirit:sparse_tropical_woods',
    ])
    e.add('collectorsreap:has_spawn/portobello', [
        'natures_spirit:marsh',
        'natures_spirit:prairie',
        'natures_spirit:oak_savanna',
        'natures_spirit:flowering_shrubland',
        'natures_spirit:shrubland',
        'natures_spirit:coniferous_covert',
        'natures_spirit:cedar_thicket',
        'natures_spirit:sugi_forest',
        'natures_spirit:windswept_sugi_forest',
        'atmospheric:laurel_forest',
        'environmental:blossom_woods',
        'environmental:blossom_valleys'
    ])
    e.add('collectorsreap:has_spawn/tiger_prawn', [
        'natures_spirit:marsh',
        'natures_spirit:tropical_basin',
        'natures_spirit:bamboo_wetlands',
        'atmospheric:rainforest_basin',
        'atmospheric:sparse_rainforest_basin'
    ])
}