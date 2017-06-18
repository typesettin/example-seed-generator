module.exports = (seedDoc) => {
  const formattedSeedDoc = Object.assign({}, seedDoc);
  if (seedDoc.id) {
    formattedSeedDoc._id = seedDoc.id.$oid;
  }
  if (seedDoc._id) {
    formattedSeedDoc._id = seedDoc._id.$oid;
  }
  if (seedDoc.author) {
    formattedSeedDoc.author = seedDoc.author.$oid;
  }
  if (seedDoc.primaryasset) {
    formattedSeedDoc.primaryasset = seedDoc.primaryasset.$oid;
  }
  if (seedDoc.coverimage) {
    formattedSeedDoc.coverimage = seedDoc.coverimage.$oid;
  }
  if (seedDoc.author) {
    formattedSeedDoc.author = seedDoc.author.$oid;
  }
  if (seedDoc.userid) {
    formattedSeedDoc.userid = seedDoc.userid.$oid;
  }
  if (seedDoc.primaryauthor) {
    formattedSeedDoc.primaryauthor = seedDoc.primaryauthor.$oid;
  }
  if (seedDoc.assets) {
    formattedSeedDoc.assets = seedDoc.assets.map(p => p.$oid);
  }
  if (seedDoc.privileges) {
    formattedSeedDoc.privileges = seedDoc.privileges.map(p => p.$oid);
  }
  if (seedDoc.coverimages) {
    formattedSeedDoc.coverimages = seedDoc.coverimages.map(p => p.$oid);
  }
  if (seedDoc.userroles) {
    formattedSeedDoc.userroles = seedDoc.userroles.map(p => p.$oid);
  }
  if (seedDoc.roles) {
    formattedSeedDoc.roles = seedDoc.roles.map(p => p.$oid);
  }
  if (seedDoc.tags) {
    formattedSeedDoc.tags = seedDoc.tags.map(p => p.$oid);
  }
  if (seedDoc.categories) {
    formattedSeedDoc.categories = seedDoc.categories.map(p => p.$oid);
  }
  if (seedDoc.authors) {
    formattedSeedDoc.authors = seedDoc.authors.map(p => p.$oid);
  }
  if (seedDoc.related_assets) {
    formattedSeedDoc.related_assets = seedDoc.related_assets.map(p => p.$oid);
  }
  if (seedDoc.parent) {
    formattedSeedDoc.parent = seedDoc.parent.map(p => p.$oid);
  }
  if (seedDoc.contenttypes) {
    formattedSeedDoc.contenttypes = seedDoc.contenttypes.map(p => p.$oid);
  }
  delete formattedSeedDoc.id;
  return formattedSeedDoc;
};