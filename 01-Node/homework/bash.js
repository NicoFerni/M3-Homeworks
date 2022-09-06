
const command = require('./commands/index.js');

const done = function(output){
    process.stdout.write(output)
    process.stdout.write('\nprompt > ')
}

process.stdout.write('prompt > ');


process.stdin.on('data', function (data) {
        var arg = data.toString().trim().split(' '); 
        var cmd = arg.shift();

        if(command[cmd]){
            command[cmd](arg, done)
        } else{
            process.stdout.write(`${cmd} not found `)
            process.stdout.write('\nprompt > ');
     }
    });
