const $wrote_read = require('@wrote/read');
const $wrote_write = require('@wrote/write');
const $wrote_ensure_path = require('@wrote/ensure-path');
const $wrote_rm = require('@wrote/rm');
const $wrote_read_dir_structure = require('@wrote/read-dir-structure');
const $wrote_exists = require('@wrote/exists');

module.exports.read = $wrote_read
module.exports.readBuffer = $wrote_read.readBuffer
module.exports.write = $wrote_write
module.exports.ensurePath = $wrote_ensure_path
module.exports.rm = $wrote_rm
module.exports.readDirStructure = $wrote_read_dir_structure
module.exports.exists = $wrote_exists