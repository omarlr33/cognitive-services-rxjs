const chai = require('chai');
const expect = chai.expect;

describe('congnitive-services-rxjs', () => {
				let cognitiviveServicesRxjs;

				it('should initialise OK', () => {
								cognitiviveServicesRxjs = require('../index');
								expect(cognitiviveServicesRxjs)
												.not
												.to
												.equal('undefined');
				});

				it('should initialise tagImage in computer-vision', () => {
								cognitiviveServicesRxjs = require('../index');

								const config = {
												api_key: '',
												endpoint: ''
								}

								expect(cognitiviveServicesRxjs.computerVision({config}).tagImage)
												.not
												.to
												.equals('undefined');
				});

				it('should initialise analyzeImage in computer-vision', () => {
								cognitiviveServicesRxjs = require('../index');

								const config = {
												api_key: '',
												endpoint: ''
								}

								expect(cognitiviveServicesRxjs.computerVision({config}).analyzeImage)
												.not
												.to
												.equals('undefined');
				});

});