# Filewalker

Simple synchron filewalker for node and local filesystem.

## Install

```bash
npm install --save @zebrajaeger/filewalker
```
```bash
yarn add @zebrajaeger/filewalker
```

## Example with files and directories

```javascript
const {walkSync} = require('@zebrajaeger/filewalker')

walkSync(
    '.', 
    (file) => console.log('File:', file),
    (dir) => console.log('Directory:', dir)
).then();
```

## Example files only

```javascript
const {walkSync} = require('@zebrajaeger/filewalker')

walkSync(
    '.', 
    (file) => console.log('File:', file)
).then();
```

## Example directories only

```javascript
const {walkSync} = require('@zebrajaeger/filewalker')

walkSync(
    '.',
    null, 
    (dir) => console.log('Directory:', dir)
).then();
```