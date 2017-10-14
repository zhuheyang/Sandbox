//eventEmitter, events.EventEmitter
//callback function, listen to events, and responce, function the callback
//and back to the mainLoop again, until there has no jobs.
var events = require('events');
var eventEmitter = new events.EventEmitter();

function mainLoop(){
	console.log('Starting application');
	eventEmitter.emit('ApplicationStart');

	console.log('Running application');
	eventEmitter.emit('ApplicationRun');

	console.log('Stopping application');
	eventEmitter.emit('ApplicationStop');
}

function onApplicationStart(){
	console.log('Handling Application Start Events');
}

function onApplicationRun(){
	console.log('Handling Application Run Events');
}

function onApplicationStop(){
	console.log('Handling Application Stop Events');
}

eventEmitter.on('ApplicationStart', onApplicationStart);
eventEmitter.on('ApplicationRun', onApplicationRun);
eventEmitter.on('ApplicationStop', onApplicationStop);

mainLoop();