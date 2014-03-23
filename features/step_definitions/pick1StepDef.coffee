
should = require('should')
request = require('request')

module.exports = stepDef = () ->
  result = ""
  this.When /^쇼핑몰 URL 입력:$/, (table, callback) ->
    data = table.raw()
    url = data[0][0]
    parseUrl = "http://211.110.115.44:8000/urlparser/productinfo?url=" + encodeURIComponent(url)

    request.get parseUrl, (error, res, body) ->
      if (!error && res.statusCode == 200)
        result = JSON.parse(body)
        callback()
      else
        throw error

  this.Then /^분석 결과:$/, (table, callback) ->
    data = table.raw()
    productName = data[0][0]
    productImg = data[1][0]
    productPrice = data[2][0]
    try
      productName.should.equal(result.product_name)
      productImg.should.equal(result.product_image)
      productPrice.should.equal(result.product_price)
    catch e
      callback.fail(e.toString())

    callback()
