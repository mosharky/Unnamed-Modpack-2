ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event


    event.register(Commands.literal('fr')
        .requires(src => src.hasPermission(3))
        .executes(ctx => {
            let server = ctx.source.getServer()
            server.runCommandSilent('kubejs reload startup-scripts')
            server.runCommandSilent('kubejs reload client-scripts')
            server.runCommandSilent('kubejs reload lang')
            server.runCommand('reload')
            return 1
        })
    )




    event.register(Commands.literal('dev')
        .requires(src => src.hasPermission(3))

        // check if /locate command was successful for each biome in a 12801×12801 area arround the player
        // used because reterraforged makes certain biomes too rare
        .then(Commands.literal('detect_missing_biomes').executes(ctx => {
            let player = ctx.source.getPlayer()

            player.tell(Text.gold('Starting biome checks. The server will lag momentarily...'))
            overworldBiomes.forEach(biome => {
                if (!player.runCommandSilent(`/locate biome ${biome}`)) {
                    player.tell([Text.red('COULD NOT FIND BIOME: '), Text.gray(biome)])
                    console.log(`COULD NOT FIND BIOME: ${biome}`)
                }
            })
            player.tell(Text.gold('Biome checks complete!'))

            return 1
        }))
    )
})
