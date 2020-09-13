const fs = require('fs');
const path = require('path')

class FileWalker {
    rootDir_;

    constructor(rootDir) {
        this.rootDir_ = rootDir;
    }

    isDirectory(p) {
        try {
            return fs.lstatSync(p).isDirectory()
        } catch (err) {
            console.log(`Could not check if directory: '${p}'`, err);
        }
    }

    isFile(p) {
        try {
            return fs.lstatSync(p).isFile()
        } catch (err) {
            console.log(`Could not check if file: '${p}'`, err);
        }
    }

    async walkRel(rootDir, startDir, onFile, onDir) {
        let dirItems
        try {
            dirItems = fs.readdirSync(startDir);
        } catch (err) {
            console.log(`Could not read directory content: '${startDir}'`, err);
            return;
        }

        for (let i = 0; i < dirItems.length; ++i) {
            const resPath = path.resolve(startDir, dirItems[i])
            if (this.isFile(resPath) && onFile) {
                await onFile({abs: resPath, rel: path.relative(rootDir, resPath)});
            }
        }

        for (let i = 0; i < dirItems.length; ++i) {
            const resPath = path.resolve(startDir, dirItems[i])
            if (this.isDirectory(resPath)) {
                if (onDir) {
                    onDir({abs: resPath, rel: path.relative(rootDir, resPath)})
                }
                await this.walkRel(rootDir, resPath, onFile, onDir);
            }
        }
    }

    async walk(onFile, onDir, options = {relStart: null, absStart: null}) {
        const opts = options || {};
        const relStart = opts.relStart;
        const absStart = opts.absStart;

        let start = this.rootDir_;
        if (relStart && absStart) {
            s
            throw new Error('Only one of relStart and absStart can be set')
        }

        if (relStart) {
            start = path.resolve(this.rootDir_, relStart);
        }

        if (absStart) {
            start = absStart;
        }

        return this.walkRel(this.rootDir_, start, onFile, onDir);
    }
}

module.exports = {FileWalker}