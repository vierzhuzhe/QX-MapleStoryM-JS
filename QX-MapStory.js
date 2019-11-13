var body = $response.body;
var obj = JSON.parse(body);

obj['errorCode'] = 0;
body = JSON.stringify(obj);

$done(body);