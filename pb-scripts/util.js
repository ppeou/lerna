
const iargs = (params, delimeter) => {
  let [i, args] = [0, {}];
  const ch = delimeter || '=';
  for(i = 2; i < params.length; i++) {
      const [a, b] = params[i].split(delimeter);
      args[a] = b;
  }
  return args;
}

module.exports = { iargs };