import axios from './config';

export function fetch(url, params = {}, type = 'post') {
  return new Promise((resolve, reject) => {
    axios[type](url, params).then((response) => {
      if (response.code === 0) {
        resolve(response.data);
      } else {
        alert(response.message);
      }
    }).catch((error) => {
      reject(error);
    });
  });
}

export default {
  test(data) {
    return fetch('/webapi/test', data);
  }
};