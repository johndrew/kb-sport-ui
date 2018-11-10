const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const fetchMock = require('fetch-mock').sandbox();
const nodeFetch = require('node-fetch');

Enzyme.configure({ adapter: new Adapter() });
nodeFetch.default = fetchMock;
