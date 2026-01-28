function removals_Create() {
    global.REMOVALS.add([
        'create:dough',
        'create:wheat_flour',
    ])

    global.ITEM_SWAPPER.set('create:dough', 'farmersdelight:wheat_dough')
    global.ITEM_SWAPPER.set('create:wheat_flour', 'bountifulfares:flour')
}