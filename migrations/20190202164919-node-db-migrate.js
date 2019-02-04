'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  let objPlan = [
    {name: 'Basic', value: 250},
    {name: 'Pro', value: 500},
    {name: 'Enterprise', value: 500}
  ]
  db.insert('plan', objPlan)

  let objUser = {
    name: 'Usuario padrão',
    email: 'usuario@teste.com',
    password: Buffer.from('1234').toString('base64')
  }
  db.insert('user', objUser)
  return null;
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
