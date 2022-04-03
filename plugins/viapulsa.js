let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `╠═〘 PEMBAYARAN 〙 ═
╠═ Untuk Pembayaran Via GOPAY
╠➥ *6281268477296*
╠➥ Chat Owner:
║- wa.me/6281268477296
╠═〘 NEROHBOT 〙 ═
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Sewa Bot*', 'status@broadcast') 
}
handler.help = ['viagopay']
handler.tags = ['info']
handler.command = /^viagopay$/i

module.exports = handler
