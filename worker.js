const ipc = require('node-ipc');

ipc.config.id = 'a-unique-process-name2';
ipc.config.retry = 1500;
ipc.config.silent = true;

const mainProcessName = 'a-unique-process-name1';

ipc.connectTo(mainProcessName, () => {
  ipc.of[mainProcessName].on('connect', () => {
    ipc.of[mainProcessName].emit('a-unique-message-name', {a: 2, b: {c: 5, kek: 6, lol: [2, 3, 4]}});
  });
});
