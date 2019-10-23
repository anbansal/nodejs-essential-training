const {inc,dec,getCount} = require("./myModule");
const myMod = require("./myModule")
const util = require("util");
dec();
dec();
inc();

myMod.dec();
util.log(getCount());
util.log(myMod.getCount());
