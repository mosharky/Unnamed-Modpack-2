/** @param {$ItemModificationKubeEvent} e */
function itemModification_AlexsMobs(e) {
    e.modify('alexsmobs:sopa_de_macaco', item => item.maxStackSize = 16)
    e.modify('alexsmobs:mosquito_repellent_stew', item => item.maxStackSize = 16)
}