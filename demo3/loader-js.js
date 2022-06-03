exports.default = function (source){
    return  source.match(/<script>(.*)<\/script>/s)[1]
}