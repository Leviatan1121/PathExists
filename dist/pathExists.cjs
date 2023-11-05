const fs = require('fs');
const exists = (path) => fs.existsSync(path);
module.exports = exists