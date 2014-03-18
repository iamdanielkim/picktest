
(function(){

  var pick1StepDefinitions = function () {
    var request = require('request');
    var result;
    this.When(/^쇼핑몰 URL 입력:$/, function (table, callback) {
      var data = table.raw();
      var url = data[0][0];
      var parseUrl = "http://211.110.115.44:8000/urlparser/productinfo?url=" + encodeURIComponent(url);
      console.log(">> ", parseUrl);

      request.get(parseUrl, function(error, res, body) {
        if (!error && res.statusCode == 200) {
            result = JSON.parse(body);
            callback();
        } else {
            throw error;
        }
      });
    });

    this.Then(/^분석 결과:$/, function (table, callback) {
  //    console.log("Table: ", table);
      var data = table.raw();
      var name = data[0][0];
      var img = data[1][0];
      var price = data[2][0];
      try{
          name.should.equal(result.product_name);
          img.should.equal(result.product_image);
          price.should.equal(result.product_price);
      }catch(e){
        callback.fail(e.toString());
      }
      callback();
    });
  }
  

  module.exports = pick1StepDefinitions;

})();
