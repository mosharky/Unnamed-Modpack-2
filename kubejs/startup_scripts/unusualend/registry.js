/** @param {$ItemModificationKubeEvent} e */
function itemModification_UnusualEnd(e) {
    e.modify(/unusualend:.*stew/, item => item.maxStackSize = 16)
}