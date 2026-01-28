/** @param {$ItemModificationKubeEvent} e */
function itemModification_AlexsCaves(e) {
    e.modify('alexscaves:sundae', item => item.maxStackSize = 16)
}