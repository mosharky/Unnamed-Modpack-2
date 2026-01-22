function removals_UnusualPrehistory() {
    global.REMOVALS.add([
        /unusual_prehistory:.*petrified.*/,
    ])

    global.BLOCK_SWAPPER.set('unusual_prehistory:petrified_log', 'darkerdepths:petrified_log')
    global.BLOCK_SWAPPER.set('unusual_prehistory:petrified_wood', 'darkerdepths:petrified_wood')
    global.BLOCK_SWAPPER.set('unusual_prehistory:polished_petrified_wood', 'darkerdepths:petrified_wood')
    global.BLOCK_SWAPPER.set('unusual_prehistory:polished_petrified_wood_button', 'darkerdepths:petrified_button')
    global.BLOCK_SWAPPER.set('unusual_prehistory:polished_petrified_wood_pressure_plate', 'darkerdepths:petrified_pressure_plate')
    global.BLOCK_SWAPPER.set('unusual_prehistory:polished_petrified_wood_slab', 'darkerdepths:petrified_slab')
    global.BLOCK_SWAPPER.set('unusual_prehistory:polished_petrified_wood_stairs', 'darkerdepths:petrified_stairs')
}