let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: Drawl Nag
╠➥ Script: @Nurotomo
║
╠➥ Github: https://github.com/Hendra168/XPTN
╠➥ Instagram: @Hendra.stror
╠➥ YouTube: Drawl Nag
║
╠═〘 Thanks To 〙 ═
╠➥ arugaz
╠➥ ridho
╠➥ ST4RZ
╠➥ Dan kawan yang lain :)
║
╠═〘 DONASI 〙 ═
╠➥ Tsel: 0813-5730-2007
║
║>Request? Wa.me/6282147078449
║
╠═〘 NfQ BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['about']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

