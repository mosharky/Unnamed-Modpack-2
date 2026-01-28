/** @param {$RecipesKubeEvent} e */
function recipes_Core(e) {
    e.replaceInput({ not: { id: 'woodworks:trapped_chest' } }, 'minecraft:chest', '#c:chests/wooden')

    e.remove({ id: 'minecraft:lodestone' })

    // Logs into chests
    for (const [mod, woodTypes] of Object.entries(global.WOOD_TYPES)) {
        for (const [woodType, woodTypeObj] of Object.entries(woodTypes)) {
            if (woodTypeObj.minecraft.log == undefined) break
            if (woodTypeObj.woodworks.chest == undefined) break
            if (woodTypeObj.woodworks.trapped_chest == undefined) break
            e.shaped(Item.of(woodTypeObj.woodworks.chest, 4), [
                'AAA',
                'A A',
                'AAA'],
                { A: woodTypeObj.minecraft.log })

            e.shaped(Item.of(woodTypeObj.woodworks.trapped_chest, 4), [
                'AAA',
                'ABA',
                'AAA'],
                {
                    A: woodTypeObj.minecraft.log,
                    B: 'minecraft:tripwire_hook'
                })
        }
    }

    e.shaped('backpacked:backpack', [
        'BCB',
        'CEC',
        'DAD'
    ], {
        A: 'kubejs:ravager_hide',
        B: '#c:strings',
        C: '#c:ingots/iron',
        D: 'minecraft:leather',
        E: '#c:chests/wooden'
    }).id('backpacked:backpack')
}