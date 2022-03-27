let handler = function (m) {
	this.sendContact(m.chat, '6281250521455', 'Owner Bot Ahmad :)', m)
}

handler.customPrefix = ['Owner bot'] 
handler.command = new RegExp

module.exports = handler
