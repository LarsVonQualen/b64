# b64

Commandline Tool for encoding and decoding files as base64.

[![NPM](https://nodei.co/npm/b64-cli.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/b64-cli.png?downloads=true&downloadRank=true&stars=true)

## Install
`npm install -g b64-cli`

## Usage
### Encoding

`b64-cli encode some/path/to.file`
The base64 encoded string will be written to `some/path/to.file.base64`.

### Decoding

`b64-cli decode some/path/to.file.base64`
The base64 decoded string will be written to `some/path/to.file.bin`.
