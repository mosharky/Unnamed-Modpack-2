/** @param {$ItemModificationEventJS_} e */
function itemModification_Respiteful(e) {
    e.modify(/respiteful:.*ice_cream/, item => item.maxStackSize = 16)
}