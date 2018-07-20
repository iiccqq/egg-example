
'use strict';

const Service = require('egg').Service;


class HomeService extends Service {
    async qeuryTest(id) {
     // assume we have the user id then trying to get the user details from database
    const { ctx, app } = this;

     const test = await app.mysql.get('test', {id:1});
    //const test ={};
    console.log(test);
      return { test };
    }
  }

  module.exports = HomeService;