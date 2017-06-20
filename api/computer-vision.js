'use strict'

const api = require('../lib/observable-api');
const {HTTP_METHOD, API_ENDPOINT} = require('../lib/constants-api')

const computerVision = ({api_key, endpoint}) => {

      let me = this;

      const operation = {
            method: "",
            headers: {
                  'Ocp-Apim-Subscription-Key': api_key
            }
      }

      me.analyzeImage = ({parameters, body, formData}) => {

            operation.method = HTTP_METHOD.POST
            let apiEndpoint = endpoint.concat(API_ENDPOINT.COMPUTER_VISION.ANALZE)
            const qs = {
                  visualFeatures: 'Tags',
                  language: 'en',
                  details: null
            }

            setHeaders(operation.headers, body, formData)
            setParameters(qs, parameters)

            return api.ObservableRequest({operation, endpoint: apiEndpoint, qs, body, formData})
      }

      me.tagImage = ({parameters, body, formData}) => {

            operation.method = HTTP_METHOD.POST
            let apiEndpoint = endpoint.concat(API_ENDPOINT.COMPUTER_VISION.TAG)

            setHeaders(operation.headers, body, formData)

            return api.ObservableRequest({operation, endpoint: apiEndpoint, body, formData})
      }

      return me
}

const setParameters = function (qs, parameters) {
      if (parameters) 

            for (let prop in parameters) 
                  qs[prop] = parameters[prop]

}

const setHeaders = function (headers, body, formData) {
      if (formData) 
            headers = Object.assign({
                  'Content-Type': 'application/octet-stream'
            }, headers)
}

module.exports = computerVision