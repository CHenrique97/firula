import jwt from 'jsonwebtoken';

export function decodeJWTFromCookie(cookie:string) {
    const token = cookie?.split('=')[1];
    
    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'default-secret');
        return decoded;
      } catch (err) {
        console.error(err);
      }
    }
    
    return null;
  }