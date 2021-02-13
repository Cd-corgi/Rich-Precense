const RPC = require('discord-rpc')
const rpc = new RPC.Client({
    transport: 'ipc'
})

rpc.on("ready", () => {
    rpc.setActivity({
        details: "200 Subscribers Road",
        state: "Creating Discord bots",
        startTimestamp: new Date(),
        largeImageKey: "large",
        largeImageText: "Sub 2 UltraX",
        smallImageKey: "small",
        smallImageText: "Road to 200 subs",
        buttons : [{label : "GitHub" , url : "https://github.com/Cd-corgi/"},{label : "YouTube" , url : "https://www.youtube.com/channel/UCnkviocxvPGS_80aNjJrCkQ"}]
    })

    console.log("successfully activated the RPC")
})

rpc.login({
    clientId: '808009574702776320'
})
