'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;

   const s = await ctx.service.home.qeuryTest(1);
    console.log(s);
    this.ctx.body = 'good' + JSON.stringify(s);
  }
}

module.exports = HomeController;
