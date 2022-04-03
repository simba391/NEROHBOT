let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kamisato = `
╭═══ 〔 SEWA BOT 〕 ════
├⬡  PERMANENT
├⬡  PERMANENT
├⬡  PERMANENT
├⬡  PERMANENT
└═══════════════
𝗦𝗶𝗹𝗮𝗸𝗮𝗻 𝗸𝗹𝗶𝗸 𝗽𝗮𝗱𝗮 "𝗟𝗶𝘀𝘁 𝗛𝗮𝗿𝗴𝗮" 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗹𝗶𝗵𝗮𝘁 𝗹𝗶𝘀𝘁.
╭═══════════════════════
║╭──❉ 〔 𝐕𝐈𝐀 𝐓𝐎𝐏𝐔𝐏 〕 ❉──────
║│➸ *GOPAY* : 6281268477296
║│➸ *DANA*: 6281268477296
║│➸ *Owner*: wa.me/6281268477296
║╰─────────────────────
╰═══════════════════════`.trim()
    const button = {
        buttonText: 'List Harga',
        description: kamisato,
        sections:  [{title: "Silahkan di pilih", rows: [
        {title: 'VIA PULSA :', description: "RP5.000\nSewa bot PERMANENT.", rowId:".masuk"},
        {title: 'VIA DANA :', description: "RP10.000\nSewa bot PERMANENT.", rowId:".masuk"},
        {title: 'VIA GOPAY :', description: "RP10.000\nSewa bot PERMANENT.", rowId:".masuk"},
        {title: 'PERMANENT DECK', description: "Rp5.000\nPremium.", rowId:".masuk"},
        {title: 'Owner', description: "Chat owner nya jika ada perlu.", rowId:".owner"},
        {title: 'Rules', description: "Rules Neroh BOT.", rowId:".snk"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['main']
handler.command = /^(sewa)$/i
handler.help = ['sewa']
module.exports = handler
//NEROHBOT
