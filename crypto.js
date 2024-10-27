// 安装CryptoJS
// npm install crypto-js

import CryptoJS from 'crypto-js';
import { readFile } from 'fs';

const { SHA256, enc } = CryptoJS;
// 读取JS文件内容
const filePath = './a.js'; // 替换为你的文件路径
readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    // 计算SHA-256哈希
    const hash = SHA256(data);
    
    // 将哈希值转换为Base64字符串
    const base64Hash = enc.Base64.stringify(hash);
    
    // 生成完整的integrity字符串
    const integrity = `sha256-${base64Hash}`;

    console.log('Integrity:', integrity);
});
