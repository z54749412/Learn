function toMoney1(number) {
    if (isNaN(number)) {
        throw '请输入数字'
    }
    console.log((number - 0).toLocaleString())
}
toMoney1('123456.123')
toMoney1('123456，123')
toMoney1(['123456.123'])
toMoney1(123456.123)
toMoney1('123456.123a')

function toMoney2(number) {
    if (isNaN(number)) {
        throw '请输入数字'
    }
    let tmpArr = number.toString().split('.')
    let integer = tmpArr[0].split('')
    let result = ''
    result = integer.reverse().join("").replace(/(\d{3})(?=[^$])/g, "$1,").split("").reverse().join("")
    if (tmpArr[1]) {
        result = result + '.' + tmpArr[1]
    }
    console.log(result)
    return result
}
toMoney2('123456.123')
toMoney2('123456，123')
toMoney2(['123456.123'])
toMoney2(123456.123)
toMoney2('123456.123a')
