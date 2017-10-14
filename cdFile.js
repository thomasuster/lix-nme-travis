const hxmlPath = process.argv[2];
const fs = require('fs');
const file = fs.readFileSync(hxmlPath, "utf8");
const lines = file.split('\n');
const line = lines[lines.length-2]; 
const right = line.substr('-cp ${HAXESHIM_LIBCACHE}'.length);
const full = `${process.env.HOME}/haxe/haxe_libraries${right}`;
const test = process.argv[3];
console.log(full);