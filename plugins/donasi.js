let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat [085888213719]
│ • Gopay [085888213719]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6285888213719
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
