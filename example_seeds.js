const fs = require('fs-extra');
const formatSeedDoc = require('./formatSeedDoc');
const standard_account = require('./standard_account').map(formatSeedDoc);
const standard_asset = require('./standard_asset').map(formatSeedDoc);
const standard_attribute = require('./standard_attribute').map(formatSeedDoc);
const standard_category = require('./standard_category').map(formatSeedDoc);
const standard_contenttype = require('./standard_contenttype').map(formatSeedDoc);
const standard_data = require('./standard_data').map(formatSeedDoc);
const standard_item = require('./standard_item').map(formatSeedDoc);
const standard_tag = require('./standard_tag').map(formatSeedDoc);
const standard_user = require('./standard_user').map(formatSeedDoc);
const standard_usergroup = require('./standard_usergroup').map(formatSeedDoc);
const standard_userprivilege = require('./standard_userprivilege').map(formatSeedDoc);
const standard_userrole = require('./standard_userrole').map(formatSeedDoc);

const seeds = [
  { standard_account, },
  { standard_asset, },
  { standard_attribute, },
  { standard_category, },
  { standard_contenttype, },
  { standard_data, },
  { standard_item, },
  { standard_tag, },
  { standard_user, },
  { standard_usergroup, },
  { standard_userprivilege, },
  { standard_userrole, },
];

fs.outputJsonSync('./exampleseed.json', seeds, { spaces: 2 });
// console.log(JSON.stringify(seeds, null, 2));