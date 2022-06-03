exports.default = function (source){
    return  source.match(/<style>(.*)<\/style>/s)[1]
}