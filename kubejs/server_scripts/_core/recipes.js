/** @param {$RecipesKubeEvent} e */
function recipes_Core(e) {
    e.replaceInput({ not: { id: 'woodworks:trapped_chest' } }, 'minecraft:chest', '#c:chests/wooden')

    // fixes a bug
    e.replaceInput({}, '#c:dough', '#c:foods/dough')
    e.replaceInput({}, '#c:doughs', '#c:foods/dough')

    // duplicates
    e.remove({ id: 'minecraft:lodestone' })
    e.remove({ id: 'vanillabackport:pumpkin_pie' })
    e.remove({ id: 'minecraft:cake' })
    e.remove({ id: 'neapolitan:cake' })
    e.remove({ id: 'vanillabackport:cake' })

    // no more ez bread
    e.remove({ id: 'minecraft:bread' })

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