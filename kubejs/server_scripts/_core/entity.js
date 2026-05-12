/**  @param {$EntitySpawnedEventJS_} e */
function entitySpawned_Core(e) {
    // TEST WITH:
    // /summon zombie ~ ~1 ~ {PersistenceRequired:1,ArmorItems:[{Count:1,id:"caverns_and_chasms:silver_boots"},{Count:1,id:"caverns_and_chasms:silver_leggings"},{Count:1,id:"caverns_and_chasms:silver_chestplate"},{Count:1,id:"caverns_and_chasms:silver_helmet"}]}
    if (e.entity.type == 'minecraft:skeleton' || e.entity.type == 'minecraft:zombie') {
        if (global.ITEM_SWAPPER.has(`${Item.of(e.entity.headArmorItem).getId()}`)) {
            e.entity.headArmorItem = Item.of(global.ITEM_SWAPPER.get(`${Item.of(e.entity.headArmorItem).getId()}`))
        }
        if (global.ITEM_SWAPPER.has(`${Item.of(e.entity.chestArmorItem).getId()}`)) {
            e.entity.chestArmorItem = Item.of(global.ITEM_SWAPPER.get(`${Item.of(e.entity.chestArmorItem).getId()}`))
        }
        if (global.ITEM_SWAPPER.has(`${Item.of(e.entity.legsArmorItem).getId()}`)) {
            e.entity.legsArmorItem = Item.of(global.ITEM_SWAPPER.get(`${Item.of(e.entity.legsArmorItem).getId()}`))
        }
        if (global.ITEM_SWAPPER.has(`${Item.of(e.entity.feetArmorItem).getId()}`)) {
            e.entity.feetArmorItem = Item.of(global.ITEM_SWAPPER.get(`${Item.of(e.entity.feetArmorItem).getId()}`))
        }
        if (global.ITEM_SWAPPER.has(`${Item.of(e.entity.mainHandItem).getId()}`)) {
            e.entity.mainHandItem = Item.of(global.ITEM_SWAPPER.get(`${Item.of(e.entity.mainHandItem).getId()}`))
        }
        if (global.ITEM_SWAPPER.has(`${Item.of(e.entity.offHandItem).getId()}`)) {
            e.entity.offHandItem = Item.of(global.ITEM_SWAPPER.get(`${Item.of(e.entity.offHandItem).getId()}`))
        }
    }
}    
