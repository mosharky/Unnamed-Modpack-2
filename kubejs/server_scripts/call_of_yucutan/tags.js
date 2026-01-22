/** @param {$TagKubeEvent} e */
function biomeTags_CallOfYucutan(e) {
    e.add('kubejs:has_feature/call_of_yucutan_features', [
        '#minecraft:is_jungle',
        '#natures_spirit:is_tropical_woods',
        '#atmospheric:is_rainforest'
    ])
}

/** @param {$TagKubeEvent} e */
function itemTags_CallOfYucutan(e) {
    e.add('c:gems', 'call_of_yucutan:jade')
    e.add('c:gems/jade', 'call_of_yucutan:jade')
}