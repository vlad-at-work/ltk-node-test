const express = require('express');
const app = express();
const port = 3000;
const isLocal = true;

const ENCOMPASS_DATA = [ { loanId: '123', borrowers: [ { pairId, firstName, lastName} ] } ];
const NORMAL_SHAPE = { loanId: 321, borrowers: [ { pairId: 'int', firstName: 'string', lastName: 'string', phone: 'string',} ] }

app.get('/', (req, res) => {
	req.send(res[NORMAL_SHAPE[req.loanId]]) //321
});

if (isLocal) {
	//local host
	app.listen(port, () => {
		console.log(`Example app listening on port ${port}`)
	});
} else {
	//for lambda export
	module.exports = app;
}
