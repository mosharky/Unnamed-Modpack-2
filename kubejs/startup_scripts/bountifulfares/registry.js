/** @param {$ItemModificationKubeEvent} e */
function itemModification_BountifulFares(e) {
    e.modify('bountifulfares:passion_fruit', item => {
        item.foodProperties = food => {
            food.effect('atmospheric:spitting', 7, 0, 1)
        }
    })
}