function removals_FarmersDelight() {
    global.REMOVALS.add([
        'farmersdelight:tree_bark',
        'farmersdelight:wheat_dough',
    ])

    // global.ITEM_SWAPPER.set('farmersdelight:tree_bark', 'immersive_weathering:oak_bark')
    global.ITEM_SWAPPER.set('farmersdelight:wheat_dough', 'create:dough')
}