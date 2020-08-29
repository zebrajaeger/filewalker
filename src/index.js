const fs = require('fs');
const path = require('path')

function isDirectory(p) {
    return fs.lstatSync(p).isDirectory()
}

function isFile(p) {
    return fs.lstatSync(p).isFile()
}

async function walkSync(dir, onFile, onDir) {
    const res = fs.readdirSync(dir);
    for (let i = 0; i < res.length; ++i) {
        const p = path.resolve(dir, res[i])
        if (isFile(p) && onFile) {
            await onFile(p);
        }
    }
    for (let i = 0; i < res.length; ++i) {
        const p = path.resolve(dir, res[i])
        if (isDirectory(p)) {
            if (onDir) {
                onDir(p)
            }
            await walkSync(p, onFile, onDir);
        }
    }
}

module.exports = {walkSync}