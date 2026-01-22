function processBlockswapConfig() {
    // Processing regex keys and turning the map into an object
    let swapperObj = {}
    global.BLOCKSWAP_CONFIG.swapper.forEach((value, key, map) => {
        if (key instanceof RegExp) {
            Ingredient.of(key).itemIds.forEach(match => {
                if (Item.of(match).isBlock()) swapperObj[match] = value
            })
        } else {
            swapperObj[key] = value
        }
    })
    global.BLOCKSWAP_CONFIG.swapper = swapperObj

    JsonIO.write('config/blockswap/block_swap.json5', global.BLOCKSWAP_CONFIG)
}


function processSwappers() {
    global.BLOCK_SWAPPER.forEach((value, key, map) => {
        if (key instanceof RegExp) {
            Ingredient.of(key).itemIds.forEach(match => global.BLOCK_SWAPPER.set(match, value))
            global.BLOCK_SWAPPER.delete(key)
        }
        if (key == undefined || value == undefined) return
    })
}