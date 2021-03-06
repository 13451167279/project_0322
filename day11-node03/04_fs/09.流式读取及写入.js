const fs = require('fs');
const path = require('path');
const readFilePath = path.resolve(__dirname, '01.同步写入.js');
const writeFilePath = path.resolve(__dirname, '01.同步写入1.js');

// 创建可读流，创建可写流
const re = fs.createReadStream(readFilePath);
const wr = fs.createWriteStream(writeFilePath, { flag: 'a' });

//绑定data事件，监听可读流
re.on('data', (chunk) => {
  console.log(chunk);
  wr.write(chunk);
});
//绑定end事件 监听可读流关闭
re.on('end', () => {
  wr.close();
});
// 绑定close事件，监听可写流关闭
wr.on('close', () => {
  console.log('文件写入完毕');
});
