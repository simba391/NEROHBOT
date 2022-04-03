let handler = function (m) {
	this.sendContact(m.chat, '6281268477296', 'Owner Bot Neroh :)', m)
}

handler.customPrefix = ['Owner bot'] 
handler.command = new RegExp

module.exports = handler
