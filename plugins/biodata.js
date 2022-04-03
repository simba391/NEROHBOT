let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
╭═════════════════
║╭──❉ *𝐁𝐈𝐎𝐃𝐀𝐓𝐀 𝐎𝐖𝐍𝐄𝐑* ❉───
║│➸ *Nama* : Neroh
║│➸ *Umur* : GK PERLUH TAUH LU
║│➸ *Kelas* :  KEPO LUWH
║│➸ *Status* : "Day" is not important to me
║╰───────────────
╰════════════════
╭════════════════
║╭──❉ *𝐒𝐎𝐒𝐈𝐀𝐋 𝐌𝐄𝐃𝐈𝐀* ❉───
║│➸ *No.Owner* : wa.me/6281268477296
║│➸ *No.Bot* : wa.me/6282225232861
║│➸ *Chanel Youtube* : GK ADA 
║│➸ *Gmail* : MALESNGISI@gmail.com
║│➸ *Github* : https://github.com/AhmadBOTV3z
║╰────────────────
╰═════════════════
_Oke udah itu aja terimakasih_

`.trim()
conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'NeeohBOT')).buffer(), ext, 'Recoded By NerohBOT', 'Nomor Owner', '.owner', 'Donasi', '.donasi', 'Sewa Bot', '.sewa', m)

}
handler.help = ['infoowner', 'infocreator']
handler.tags = ['info']
handler.command = /^(infoowner|infocreator)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
