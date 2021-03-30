function callHttp(url) {
    const https = require('https');
    https.get('https://twilio-cms-prod.s3.amazonaws.com/images/drone-api.width-808.png', (resp) => {
        let data = '';

        // A chunk of data has been received.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => { return data });
        // resp.on('end', () => {
        //    console.log(data);
        //  });
        
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
};

module.exports = class getHttp { signUrl(req) { return callHttp(req.data.url) }};