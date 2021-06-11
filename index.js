var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "trakteer.id/rioclover",
assets : {
large_image : "dapin",
large_text : "Insta : @daffin.official" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "SUBSCRIBE" , url : "https://www.youtube.com/channel/UCx47Tz2fyF0NDfSUJeD-blA"},{label : "GIGA GANG`S",url : "https://discord.gg/fADWN9TA8D"}]
}
})
})
client.login({ clientId : "852185458129109031" }).catch(console.error);