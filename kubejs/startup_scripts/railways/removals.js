function removals_Railways() {
    global.REMOVALS.add([
        'railways:jukeboxcart',
        /railways:track_(quark_azalea|quark_ancient|quark_blossom|natures_spirit_maple).*/,
        /railways:track_incomplete_(quark_azalea|quark_ancient|quark_blossom|natures_spirit_maple).*/,
    ])
}