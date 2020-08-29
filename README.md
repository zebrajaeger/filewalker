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
const {filewalker} = require('@zebrajaeger/filewalker')

filewalker.walkSync(
    './myFileRoot', 
    (file) => console.log('File:', file),
    (dir) => console.log('Directory:', dir)
)
```

## Example files only

```javascript
const {filewalker} = require('@zebrajaeger/filewalker')

filewalker.walkSync(
    './myFileRoot', 
    (file) => console.log('File:', file)
)
```

## Example directories only

```javascript
const {filewalker} = require('@zebrajaeger/filewalker')

filewalker.walkSync(
    './myFileRoot',
    null, 
    (dir) => console.log('Directory:', dir)
)
```