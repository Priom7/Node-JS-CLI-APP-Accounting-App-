const mongoose = require('mongoose');

// connect to DB

const db = mongoose.connect('mongodb://localhost:27017/company_demo', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

const Group = require('./models/group-model');

//add Group

const addGroup = (group) => {
	Group.create(group).then((group) => {
		console.info('New Group Added');
		mongoose.connection.close();
	});
};

//find Group

const findGroup = (name) => {
	const search = new RegExp(name, 'i');
	Group.find({ $or: [ { name: search } ] }).then((group) => {
		console.info(group);
		console.info(`${group.length} matches`);
		mongoose.connection.close();
	});
};

//Update

const updateGroup = (_id, group) => {
	Group.update({ _id }, group).then((group) => {
		console.info('Group Updated');
		mongoose.connection.close();
	});
};

const updateGroupByAccount = (_id, account) => {
	Group.update(
		{ _id },
		{
			$push: { accounts: account }
		}
	).then((account) => {
		console.info('Customer Update');
		mongoose.connection.close();
	});
};

//Update

const updateGroupByAccountTransaction = (group1_id, account1_id, group2_id, account2_id, transaction) => {
	Group.update(
		{ name: group1_id },
		{ name: group2_id },
		{
			$push: { transactions: transaction }
		}
	).then((transaction) => {
		console.info('Transaction Update');
		mongoose.connection.close();
	});
};

// //Delete

// const removeCustomer = (_id) => {
// 	Customer.remove({ _id }).then((customer) => {
// 		console.info('Customer Deleted');
// 		mongoose.connection.close();
// 	});
// };

// //Show All
const allGroups = () => {
	Group.find().then((groups) => {
		console.info(groups);
		console.info(`${groups.length} groups`);
		mongoose.connection.close();
	});
};

module.exports = {
	addGroup,
	findGroup,
	updateGroup,
	updateGroupByAccount,
	updateGroupByAccountTransaction,
	allGroups
};
