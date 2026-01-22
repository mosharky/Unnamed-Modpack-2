// PlayerEvents.inventoryChanged('minecraft:enchanted_book', e => {
//     const slot = e.player.inventory.find('minecraft:enchanted_book')
//     const enchantedBook = e.player.inventory.getStackInSlot(slot)
//     if (enchantedBook.hasNBT()) {
//         const enchantment = enchantedBook.nbt.StoredEnchantments[0].id
//         if (enchantment != undefined) {
//             const ancientBook = Item.of('immersiveenchanting:ancient_book', `{"immersiveenchanting:ancient_book_enchantment_type":"${enchantment}"}`)
//             e.player.inventory.setStackInSlot(slot, ancientBook)
//         }
//     }
// })