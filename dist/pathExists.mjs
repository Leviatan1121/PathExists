import fs from 'fs';
const exists = (path) => fs.existsSync(path);
export default exists