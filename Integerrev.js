const revInt = (int) => {
  const rev = [...int.toString()].reverse().join("");
  return Math.sign(int) * parseInt(rev);
};
console.log(revInt(-1345));
