const app = require('./application');
const Controller = require('./core/controllers');
const Service = require('./core/services');
const log = require('./lib/log')({ debug: false });
const pkg = require('../package.json');
const load = require('./load');

function start(){
  load.load();
  log.info(`start Polix `,log.color.yellow(`v${pkg.version}`));
};

module.exports = {
  Controller,
  Service,
  app,
  start
}
