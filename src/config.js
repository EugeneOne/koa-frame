import path from 'path';

export const SYSTEM = {
  SERVER_PORT: 8090,
};

export const DB = {
  host: 'localhost', // 服务器地址
  port: 3306, // 数据库端口号
  username: 'admin', // 数据库用户名
  password: 'admin888', // 数据库密码
  database: 'development', // 数据库名称
  prefix: 'api_', // 默认"api_"
};
