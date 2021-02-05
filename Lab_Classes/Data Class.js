class Request {
    constructor(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response=undefined;
        this.fulfilled=false;
    }

    toString(){
        return  'Request'+ this.toString();
    }
}


let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '')
console.log(myData);


//Request {
//   method: 'GET',
//   uri: 'http://google.com',
//   version: 'HTTP/1.1',
//   message: '',
//   response: undefined,
//   fulfilled: false
// }