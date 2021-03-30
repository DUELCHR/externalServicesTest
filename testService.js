var cfsign = require('aws-cloudfront-sign')
var opn = require('opn')

function getSignedUrl(url) {
var twoDays = 2*24*60*60*1000    
var signingParams = {
  keypairId: process.env.PUBLIC_KEY,
  privateKeyString: process.env.PRIVATE_KEY,
  expires: Math.floor((Date.now() + twoDays)/1000), 
  // Optional - this can be used as an alternative to privateKeyString
  privateKeyPath: './.aws/private_key.pem'
}
// Generating a signed URL
var signedUrl = cfsign.getSignedUrl(
  url, 
  signingParams
)
console.log(signedUrl);
return signedUrl;

}

module.exports = (getUrl)=>{
  getUrl.on ('signUrl', req => getSignedUrl(req.data.url))
}
