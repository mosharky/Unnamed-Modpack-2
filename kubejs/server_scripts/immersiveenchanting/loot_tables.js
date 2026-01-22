/** @param {$LootActionsBuilderJS_} all */
function lootReplacements_ImmersiveEnchanting(all) {
    // Replace all enchanted books with ancient_books
    all.modifyLoot(Item.of('minecraft:enchanted_book'), stack => {
        if (stack.hasNBT()) {
            const enchantment = stack.nbt.StoredEnchantments[0].id
            if (enchantment != undefined) {
                stack = Item.of('immersiveenchanting:ancient_book', `{"immersiveenchanting:ancient_book_enchantment_type":"${enchantment}"}`)
            }
        }
        return stack
    })
}

function lootTables_ImmersiveEnchanting(e) {
    // Disable removal of enchanted books and disable adding ancient books
    e.removeGlobalModifier('@immersiveenchanting')
}