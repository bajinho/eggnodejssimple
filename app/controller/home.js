/* eslint-disable quotes */
"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = "hi, egg index";
  }

  async novo() {
    const { ctx } = this;
    ctx.body = "hi, egg novo";
  }

  async create() {
    const { ctx } = this;
    ctx.body = "hi, egg create";
  }

  async show() {
    const { ctx } = this;
    ctx.body = "hi, egg show";
  }

  async edit() {
    const { ctx } = this;
    ctx.body = "hi, egg edit";
  }

  async update() {
    const { ctx } = this;
    ctx.body = "hi, egg update";
  }

  async destroy() {
    const { ctx } = this;
    ctx.body = "hi, egg destroy";
  }
}

module.exports = HomeController;
