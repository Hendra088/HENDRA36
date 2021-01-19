let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [0821-4707-8449]
│ • Telkomsel: [0821-4707-8449]
│ • Smartfren: [0821-4707-8449]
│ 「 Chat OWNER 」
│ > Ingin donasi? Wa.me/6282147078449
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
