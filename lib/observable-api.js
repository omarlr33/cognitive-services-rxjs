'use strict'

const Request = require('request')
const Observable = require('rxjs/Observable').Observable

const ObservableRequest = ({operation, endpoint, qs, body,formData}) => {
 
    var options = {
        uri: endpoint,
        method: operation.method,
        qs,
        headers: operation.headers,
        json: true,
        body,
        formData
    }

    return Observable.create(observer => {

        Request(options, (error, res, body) => {
            
            if (!error)
                observer.next(body);
            else 
                observer.error(error);
            }
        );

    })
};

module.exports = {
    ObservableRequest
}