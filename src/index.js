module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 !== 0) return false;
    else return checkBrackets(str);

    function checkBrackets(str) {
        let array = [];
        let first = bracketsConfig.map((e) => e[0].toString());
        let last = bracketsConfig.map((e) => e[1].toString());

        for (let i = 0; i < str.length; i++) {
            if (
                first.includes(str[i]) &&
                last.includes(str[i]) &&
                array.includes(str[i])
            ) {
                let open = array.pop();
                let close = last[first.indexOf(open)];

                if (close !== str[i]) return false;
            } else if (first.includes(str[i])) {
                array.push(str[i]);
            } else if (last.includes(str[i])) {
                let open = array.pop();
                let close = last[first.indexOf(open)];

                if (close !== str[i]) return false;
            }
        }
        return true;
    }
};

// check('()', [['(', ')']]) // -> true
// check('((()))()', [['(', ')']]) // -> true
// check('())(', [['(', ')']]) // -> false
// check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]) // -> true
// check('[(])', [['(', ')'], ['[', ']']]) // -> false
// check('[]()', [['(', ')'], ['[', ']']]) // -> true
// check('[]()(', [['(', ')'], ['[', ']']]) // -> false

// // special case: opening and closing bracket can be the same :)

// check('||', [['|', '|']]) // -> true
// check('|()|', [['(', ')'], ['|', '|']]) // -> true
// check('|(|)', [['(', ')'], ['|', '|']]) // -> false
// check('|()|(||)||', [['(', ')'], ['|', '|']]) // -> true
