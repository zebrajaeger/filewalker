# Filewalker

Simple synchron filewalker for node and local filesystem.

## Install

```bash
npm install --save @zebrajaeger/filewalker
```
```bash
yarn add @zebrajaeger/filewalker
```

## Examples

### Basic

```javascript
const {FileWalker} = require('@zebrajaeger/filewalker');

// create instance
const fileWalker = new FileWalker('/media/l/Seagate');

// start (returns Promise so we call '.then()')
fileWalker.walk((f) => console.log('File', f), (d)=> console.log('Directory', d)).then();
```

returns i.E.
```bash
[...]

Directory { abs: '/media/l/Seagate/Seagate', rel: 'Seagate' }
Directory {
  abs: '/media/l/Seagate/Seagate/Registration',
  rel: 'Seagate/Registration'
}
File {
  abs: '/media/l/Seagate/Seagate/Registration/SerialNumber.xml',
  rel: 'Seagate/Registration/SerialNumber.xml'
}

[...]
```

### Start deeper but get the relative path to root directory.
```javascript
const {FileWalker} = require('@zebrajaeger/filewalker');

const fileWalker = new FileWalker('/media/l/Seagate');
fileWalker.walk(
    (f) => console.log('File', f),
    (d)=> console.log('Directory', d),
    {relStart: 'Seagate'}).then();
```

returns i.E.
```bash

```

## Example with files and directories

```javascript
const {FileWalker} = require('@zebrajaeger/filewalker');

walkSync(
    '.', 
    (file) => console.log('File:', file),
    (dir) => console.log('Directory:', dir)
).then();
```

## Example files only

```javascript
const {FileWalker} = require('@zebrajaeger/filewalker');

walkSync(
    '.', 
    (file) => console.log('File:', file)
).then();
```

## Example directories only

```javascript
const {FileWalker} = require('@zebrajaeger/filewalker');

walkSync(
    '.',
    null, 
    (dir) => console.log('Directory:', dir)
).then();
```