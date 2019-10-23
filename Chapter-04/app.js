const {inc,dec,getCount} = require("./lib/myModule");
const myMod = require("./lib/myModule")
const util = require("util");
dec();
dec();
inc();

myMod.dec();
util.log(getCount());
util.log(myMod.getCount());
