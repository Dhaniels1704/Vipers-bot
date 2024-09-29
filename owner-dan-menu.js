const fs = require('fs')

global.namabot = "Vipers Bot" //Nama bot
global.namaowner = "Dhaniels Store" //Nama Owner
global.footer_text = "© " + namabot
global.pp_bot = fs.readFileSync("./image/foto.jpg") //Foto Profile Bot
global.qris = fs.readFileSync("./image/qris.jpg") //Foto Qris
global.owner = ['#'] //Nomor Owner
global.apikey = '#' //Apikey Lolhuman
global.sessionName = 'session' //Jangan diganti
global.prefa = ['-_-']
global.caption_pay = `─────〔  *QRIS ALL PAYMENT* 〕─────

Semua *M-BANKING & E-WALLET* bisa *SCAN QRIS DIATAS* (Cari fitur SCAN & Masukin Barcode Diatas)

Mau ganti payment? ketik .setpay`
module.exports.helpMenu = (pushname) =>{
  return `
• Hallo ${pushname}
• *Nomormu* : ${m.sender.split("@")[0]}
• *Nama Bot* : ${namabot} - WhatsApp Store Helper

╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
Vipers Bot adalah Bot Whatsapp yang bertugas membantu para seller berjualan dengan fitur fitur menarik yang sudah di kategorikan seperti berikut.

Buat kalian jangan lupa lihat rules bot supaya tidak terbanned (.rules)
jika bingung cara pakainya bisa melihat tutorial (.tutorial)
Jika ada fitur yang error silakan report dengan cara hubungi (.owner).
╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌

╭─────≼ *Menu ${namabot}* ≽
╎» .allmenu
╎» .menuowner
╎» .menustore
╎» .menugroup
╎» .kalkulator
╎» .menubot
╎» .menustalk
╎» .sewabot
╎» .downloadmenu
╰─────≼-≽`
}