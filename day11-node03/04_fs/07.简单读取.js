const fs = require('fs');
const path = require('path');

// const filePath = path.resolve(__dirname, "text.txt");
const filePath = path.resolve(__dirname, '01.同步写入.js');

//简单读取文件(一次性读取)
fs.readFile(filePath, (err, re) => {
  if (err) {
    return;
  }
  console.log(re);
});
