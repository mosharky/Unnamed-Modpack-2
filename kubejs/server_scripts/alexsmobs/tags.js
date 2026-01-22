/** @param {$TagKubeEvent} e */
function itemTags_AlexsMobs(e) {
    e.add('alexsmobs:anacondas_foodstuffs', [
        'autumnity:turkey',
        'autumnity:turkey_piece',
        'autumnity:cooked_turkey',
        'autumnity:cooked_turkey_piece',
    ])
    e.add('alexsmobs:bison_breedables', [
        'natures_spirit:oat_grass',
        'natures_spirit:tall_oat_grass',
    ])
    e.add('alexsmobs:tiger_breedables', [
        'windswept:mimosa',
    ])
    e.add('alexsmobs:gazelle_breedables', [
        'windswept:mimosa',
    ])
    e.add('alexsmobs:hummingbird_breedables', [
        'windswept:mimosa',
    ])
    e.add('alexsmobs:elephant_tameables', [
        'windswept:mimosa',
    ])
    e.add('alexsmobs:elephant_breedables', [
        'windswept:mimosa',
    ])
    e.add('alexsmobs:elephant_foodstuffs', [
        'windswept:mimosa',
    ])
    e.add('alexsmobs:tarantula_hawk_foodstuffs', [
        'windswept:mimosa',
    ])
}

/** @param {$TagKubeEvent} e */
function entityTags_AlexsMobs(e) {

}

/** @param {$TagKubeEvent} e */
function blockTags_AlexsMobs(e) {
    e.removeAll('alexsmobs:orca_breakables')
    e.removeAll('alexsmobs:cachalot_whales_breakables')
}