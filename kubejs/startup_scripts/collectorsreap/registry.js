/** @param {$ItemModificationEventJS_} e */
function itemModification_CollectorsReap(e) {
    e.modify(/collectorsreap:.*ice_cream/, item => item.maxStackSize = 16)
}