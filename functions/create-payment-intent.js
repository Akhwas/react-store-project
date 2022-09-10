//  domain/.netlify/functions/create-payment-intent
exports.handler = async function (event,context){
    // const {cart,shipping_fee,total_amount} = JSON.parse(event.body)
    console.log(event)
    return {
        statusCode: 200,
        body: 'JSON.stringify(cart)',
    }
}