// 导入数据库模块
const mongoose = require('mongoose');
// 连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/login', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// 绑定监听，连接数据库时触发

mongoose.connection.once('open', (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Database connect Successful');
});
