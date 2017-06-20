# Microsoft® Cognitive Services RxJS API for NodeJs.

`Unofficial` Microsoft® Cognitive Services RxJS API for NodeJs. Check out Microsoft® Cognitive Services [Terms and Conditions](http://research.microsoft.com/en-us/um/legal/CognitiveServicesTerms20160628.htm).
 
## Installation
 
`npm i cognitive-services-rxjs --save`

## API Documentation
[API Microsoft® Documentation](https://dev.projectoxford.ai/docs/services/56332331778daf02acc0a50b/operations/565d9001ca73072048922d97)
## Usage
* [Computer Vision](#computer-vision)
	* [Analyze Image](#) `Partial`
	* [Describe Image](#) `Not yet :(`
	* [Get Thumbnail](#) `Not yet :(`
	* [List Domain Specific Models](#) `Not yet :(`
	* [OCR](#) `Not yet :(`
	* [Recognize Domain Specific Content](#) `Not yet :(`
	* [Tag Image](#computer-vision---tag-image)
* [Emotion](#) `Not yet :(`
* [Entity Linking](#)`Not yet :(`
* [Face](#)`Not yet :(`
* [Recommendations](#)`Not yet :(`
* [Speaker Recognition](#)`Not yet :(`
* [Text Analytics](#)`Not yet :(`
* [Video](#)`Not yet :(`
* [Web Language Model](#)`Not yet :(`
* [Bing Autosuggest](#)`Not yet :(`
* [Bing Image Search](#)`Not yet :(`
* [Bing News Search](#)`Not yet :(`
* [Bing Spell Check](#)`Not yet :(`
* [Bing Video Search](#)`Not yet :(`
* [Bing Web Search](#)`Not yet :(`
### Computer Vision

#### Computer Vision - Analyze Image
 [API Endpoint Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/56f91f2d778daf23d8ec6739/operations/56f91f2e778daf14a499e1fa)

#### Example [Image URL]

```javascript

const cognitiviveServicesRxjs = require('cognitive-services-rxjs');

const computerVision = cognitiviveServicesRxjs.computerVision({
api_key : 'your_api_key',
endpoint: 'your_endpoint_api' //https://[location].api.cognitive.microsoft.com/vision/v1.0
})

var parameters = { visualFeatures: 'Categories'} //Optional
var body = {
    {url:'\\url_image'}
}

computerVision.analyzeImage({parameters,body}).subscribe(
res=> console.log(JSON.stringify(res)),
error=> console.log(`Something  Gone wrong :( - ${error}`))

```

#### Example [Binary image data]

```javascript

const cognitiviveServicesRxjs = require('cognitive-services-rxjs');

const computerVision = cognitiviveServicesRxjs.computerVision({
api_key : 'your_api_key',
endpoint: 'your_endpoint_api' //https://[location].api.cognitive.microsoft.com/vision/v1.0
})

var parameters = { visualFeatures: 'Categories'} //Optional
var formData = {
    my_file: fs.createReadStream(__dirname + '/images/picture.jpg')
}

computerVision.analyzeImage({parameters,formData}).subscribe(
res=> console.log(JSON.stringify(res)),
error=> console.log(`Something  Gone wrong :( - ${error}`))

```

 #### Computer Vision - Tag Image
 [API Endpoint Documentation](https://westus.dev.cognitive.microsoft.com/docs/services/56f91f2d778daf23d8ec6739/operations/56f91f2e778daf14a499e1fa)

#### Example [Image URL]

```javascript

const cognitiviveServicesRxjs = require('cognitive-services-rxjs');

const computerVision = cognitiviveServicesRxjs.computerVision({
api_key : 'your_api_key',
endpoint: 'your_endpoint_api' //https://[location].api.cognitive.microsoft.com/vision/v1.0
})

var body = {
    {url:'\\url_image'}
}

computerVision.tagImage({body}).subscribe(
res=> console.log(JSON.stringify(res)),
error=> console.log(`Something  Gone wrong :( - ${error}`))

```

#### Example [Binary image data]

```javascript

const cognitiviveServicesRxjs = require('cognitive-services-rxjs');

const computerVision = cognitiviveServicesRxjs.computerVision({
api_key : 'your_api_key',
endpoint: 'your_endpoint_api' //https://[location].api.cognitive.microsoft.com/vision/v1.0
})

var formData = {
    my_file: fs.createReadStream(__dirname + '/images/picture.jpg')
}

computerVision.tagImage({formData}).subscribe(
res=> console.log(JSON.stringify(res)),
error=> console.log(`Something  Gone wrong :( - ${error}`))

```
## Contributing
 
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
 
## History
 
Version 0.1.1 (2015-05-23) - KickStart
 
## Credits
 
Lead Developer - Omar Lara [@omarlr33](https://twitter.com/omarlr33)
Inspired on API [Microsoft® Cognitive Services SDK for Node.JS](https://www.npmjs.com/package/cognitive-services)
## License
 
The MIT License (MIT)

Copyright (c) 2017 Omar Lara

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## Legal
Microsoft, Microsoft Cognitive Services, and Windows are either registered trademarks or trademarks of Microsoft Corporation in the United States and/or other countries.
This project was done without the knowledge or endorsement of Microsoft®.
	