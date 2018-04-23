import CryptoJS from 'crypto-js';
import { CLIENT_SECRET } from '../redux/constants';

class JWT {
  constructor() {
    this.header = {
      typ: 'JWT',
      alg: 'HS256',
    };
  }

  base64url(source) {
    encodedSource = CryptoJS.enc.Base64.stringify(source);
    encodedSource = encodedSource.replace(/=+$/, '');
    encodedSource = encodedSource.replace(/\+/g, '-');
    encodedSource = encodedSource.replace(/\//g, '_');
    return encodedSource;
  }

  createJWT(payload) {
    const header = {
      typ: 'JWT',
      alg: 'HS256',
    };

    const stringifiedHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(header));
    const encodedHeader = this.base64url(stringifiedHeader);

    const stringifiedData = CryptoJS.enc.Utf8.parse(JSON.stringify(payload));
    const encodedData = this.base64url(stringifiedData);

    const token = `${encodedHeader}.${encodedData}`;

    let signature = CryptoJS.HmacSHA256(token, CLIENT_SECRET);
    signature = this.base64url(signature);

    const signedToken = `${token}.${signature}`;
    return signedToken;
  }
}

export default new JWT();
