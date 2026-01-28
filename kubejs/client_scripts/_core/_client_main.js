// priority: -1
ItemEvents.modifyTooltips(e => {
    console.log('test')
    console.log(global.REMOVALS.getAsArray())
    global.REMOVALS.getAsArray().forEach(removal => {
        console.log(removal)
        e.add(removal, Text.red('DISABLED. Report to momo if you obtained this.').append(Text.darkGray('\nThis item is supposed to be replaced; ignore if found in a menu').italic()))
    })
})

RecipeViewerEvents.removeCategories(e => {
    e.remove('woodworks:sawmill')
})

RecipeViewerEvents.addInformation('item', e => {
    e.add('kubejs:ravager_hide', 'Obtained by killing a Ravager.')
    e.add('minersdelight:silverfish_eggs', 'Obtained by killing a Silverfish with a knife.')
})



ClientEvents.generateAssets('after_mods', e => {
    clientData_EMI(e)
    // clientData_Quark(e)
})
