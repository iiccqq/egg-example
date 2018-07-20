'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1532075092013_7612';


  config.mysql = {
    client: {
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: 'Feng123456',
      database: 'mytest',
    },
    // load into app, default true
    app: true,
    // load into agent, default false
    agent: false,
  }

  // add your config here
  config.middleware = [];

  return config;
};
