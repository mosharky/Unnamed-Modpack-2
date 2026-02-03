function removals_NoMansLand() {
    global.REMOVALS.add([
        'nomansland:short_beachgrass',
        'nomansland:tall_beachgrass',
        'nomansland:sconce_torch',
        'nomansland:sconce_soul_torch',
        'nomansland:frosted_grass',
        'nomansland:icicles',
        'nomansland:barrel_cactus',
        'nomansland:succulent',
        'nomansland:dried_grass',
        'nomansland:walnuts',
        'nomansland:raw_venison',
        'nomansland:cooked_venison',
        'nomansdelight:venison_chop',
        'nomansdelight:cooked_venison_chop',
    ])

    global.ITEM_SWAPPER.set('nomansland:walnuts', 'bountifulfares:walnut')

    global.BLOCK_SWAPPER.set('nomansland:extinguished_sconce_torch', 'supplementaries:sconce')  // if only i could do state swapping..
    global.BLOCK_SWAPPER.set('nomansland:sconce_torch', 'supplementaries:sconce')
    global.BLOCK_SWAPPER.set('nomansland:sconce_soul_torch', 'supplementaries:sconce_soul')
}