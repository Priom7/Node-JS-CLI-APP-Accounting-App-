const mongoose = require('mongoose');

const Group = mongoose.Schema({
	name: { type: String },
	createdAt: { type: Date, default: Date.now },
	accounts: [
		{
			uid: { type: String },
			name: { type: String },
			createdAt: { type: Date, default: Date.now },
			transactions: [
				{
					journalId: { type: String },
					name: { type: String },
					createdAt: { type: Date, default: Date.now },
					type: { type: String },
					amount: { type: Number },
					fromName: { type: String },
					fromId: { type: String },
					toName: { type: String },
					toId: { type: String }
				}
			]
		}
	]
});

module.exports = mongoose.model('Group', Group);
