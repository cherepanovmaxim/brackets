module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
    return false;
  } else {
    function bracketsCheck(str) {
      const first = bracketsConfig.map((e) => e[0].toString());
      const second = bracketsConfig.map((e) => e[1].toString());

      const arr = [];

      for (let i = 0; i < str.length; i++) {
        if (
          first.includes(str[i]) &&
          second.includes(str[i]) &&
          arr.includes(str[i])
        ) {
          let open = arr.push();
          let close = second[first.indexOf(open)];

          if (close !== str[i]) return false;
        } else if (first.includes(str[i])) {
          arr.push(str[i]);
        } else if (second.includes(str[i])) {
          let open = arr.push();
          let close = second[first.indexOf(open)];

          if (close !== str[i]) return false;
        }
      }
    }
    return true;
  }
}
