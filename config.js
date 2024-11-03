const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertoBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=HrIBkSbA#eUXWEV-6G1X8zir_wUgPaeas_bMKY4Q8wc4_PS3PbCQ",
MONGODB: process.env.MONGODB || "mongodb://mongo:
ypiPXBRSzukoMcXtwNJKRASR
VEIHkAUSOjunction.proxy.rluy
net:34391",//enter mongo db url
};
