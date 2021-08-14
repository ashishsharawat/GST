//Decimal.set({ precision: 5, rounding: 4 })

$(function(){
  $(txtMoney).on("change keyup",x=>calculate(x))
  calculate($(txtMoney).val())
})
function calculate(x){
  var priceTxt = Number.isNaN(parseInt(x)) ? $(x.target).val() : x
  var price = new Decimal(priceTxt)
  var taxableInc = price.div("1.18").toString()//Money.div(priceTxt,"1.06")
  var taxableExc = priceTxt
  var gstInc = price.mul("18").div("118").toString()
  var gstExc = price.mul("0.18").toString()
  var salesInc = priceTxt
  var salesExc = price.mul( "1.18").toString()
  gstInc = (Math.round(gstInc * 100) / 100).toFixed(2);
  taxableInc = (Math.round(taxableInc * 100) / 100).toFixed(2);
  $(tdTaxableInc).text(taxableInc)
  $(tdTaxableExc).text(taxableExc)
  $(tdGSTInc).text(gstInc)
  $(tdGSTExc).text(gstExc)
  $(tdSalesInc).text(salesInc)
  $(tdSalesExc).text(salesExc)
}