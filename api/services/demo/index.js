
import axios from 'axios';
import config from 'config';

const Recovery = (dataRes) => {
  let realData = null;
  let baseUrl = config.get('app.baseUrl.default');
  if (process.env.NODE_MOCKS) {
    realData = new Promise((resolve, reject) => {
      resolve({ data: {token: 'Mocks data' }});
    });    
  } else {
    realData = axios({
      method: 'post',
      url: baseUrl+'/api/demo',
      headers: {'Content-Type': 'application/json'},
      data: { 'use': dataRes },
    });
  }
  return realData;
}

export default Recovery;

