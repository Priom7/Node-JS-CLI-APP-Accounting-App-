const program = require('commander');
const { prompt } = require('inquirer');

const {
	addGroup,
	findGroup,
	updateGroup,
	updateGroupByAccount,
	allGroups,
	updateGroupByAccountTransaction
} = require('./index');
const { command } = require('commander');

//Questions

const questions = [
	{
		type: 'input',
		name: 'name',
		message: 'Group Name'
	}
];

const accountQuestions = [
	{
		type: 'input',
		name: 'name',
		message: 'Account Name'
	}
];

const accountTransactionQuestions = [
	{
		type: 'input',
		name: 'name',
		message: 'Group 1 Id'
	},
	{
		type: 'input',
		name: 'type',
		message: 'Account 1 Id'
	},
	{
		type: 'input',
		name: 'amount',
		message: 'Amount TK.'
	},
	{
		type: 'input',
		name: 'fromName',
		message: 'From Name'
	},
	{
		type: 'input',
		name: 'fromId',
		message: 'From Id'
	},
	{
		type: 'input',
		name: 'toName',
		message: 'To Name'
	},
	{
		type: 'input',
		name: 'toId',
		message: 'To Id'
	}
];

program.version('0.0.1').description('Accounting CLI APP');

// Add Groups
program.command('add').alias('a').description('Add a Group').action(() => {
	prompt(questions).then((answers) => addGroup(answers));
});

//Find Groups
program.command('find <name>').alias('f').description('Find a Group').action((name) => {
	findGroup(name);
});

// Update
program.command('update <_id>').alias('u').description('Update a Customer').action((_id) => {
	prompt(questions).then((answers) => updateGroup(_id, answers));
});

// Update Group By Account
program.command('updateAccount <_id>').alias('uac').description('Update a Customer').action((_id) => {
	prompt(accountQuestions).then((answers) => updateGroupByAccount(_id, answers));
});

//Update Group By Account Transaction
program
	.command('transaction <gname1> <name1> <gname2> <name2>')
	.alias('t')
	.description('Update a Transaction')
	.action((group1_id, account1_id, group2_id, account2_id) => {
		prompt(accountTransactionQuestions).then((answers) =>
			updateGroupByAccountTransaction(group1_id, account1_id, group2_id, account2_id, answers)
		);
	});

// // Remove
// program.command('remove <_id>').alias('r').description('Remove a Customer').action((_id) => removeCustomer(_id));

// All
program.command('list').alias('l').description('List of all Customer').action(() => allGroups());

program.parse(process.argv);
