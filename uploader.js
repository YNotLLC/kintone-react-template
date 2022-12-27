import glob from "glob";
import { execSync } from "child_process";

const command = `npx kintone-customize-uploader --base-url ${process.env.KINTONE_BASE_URL} --username ${process.env.KINTONE_USER} --password ${process.env.KINTONE_PASSWORD} `;
const file = glob.sync("dest/customize-manifest.json");
console.log("\nuploading... ", file);
const result = execSync(command + file);
console.log("\n" + result);
