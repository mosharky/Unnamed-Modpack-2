/** @param {$LootModifier$Builder} all */
function lootReplacements_Core(all) {
    global.BLOCK_SWAPPER.forEach((value, key) => {
        if (Item.exists(key) && Item.exists(value)) {
            all.replaceLoot(key, value, true)
        }
    })
    
    global.ITEM_SWAPPER.forEach((value, key) => {
        all.replaceLoot(key, value, true)
    })

    global.REMOVALS.all.forEach(removal => {
        if (global.ITEM_SWAPPER.has(removal) || global.BLOCK_SWAPPER.has(removal)) {
            return
        }
        all.removeLoot(removal)
    })
}

/** @param {$LootModificationEvent} e */
function lootTables_Core(e) {
    e.addEntityModifier('minecraft:ravager').addLoot('kubejs:ravager_hide')
    // e.addEntityModifier('goety:ravager').addLoot('kubejs:ravager_hide')
    // e.addEntityModifier('goety:trampler').addLoot('kubejs:ravager_hide')
}