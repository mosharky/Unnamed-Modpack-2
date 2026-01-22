function removals_Neapolitan() {
    global.REMOVALS.add([
        'neapolitan:milk_bottle',
        'neapolitan:chocolate_bar',
        'neapolitan:chocolate_block',
        /neapolitan:.*chocolate_brick.*/,
        /neapolitan:.*chocolate_tile.*/,
    ])

    global.ITEM_SWAPPER.set('neapolitan:chocolate_bar', 'create:bar_of_chocolate')
}