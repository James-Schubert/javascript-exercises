const ftoc = function(TF) {
  if (TF === 32) return 0;
  let TC = (TF-32)*(5/9);
  return Number(TC.toFixed(1));

};

const ctof = function(TC) {
  if (TC === 0) return 32;
  let TF = (TC*1.8)+32;
  return Number(TF.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
