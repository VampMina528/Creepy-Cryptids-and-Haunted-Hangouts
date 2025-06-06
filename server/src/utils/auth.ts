// JWT functions (sign, verify, etc.)
// Verifies codename JWT
import jwt from 'jsonwebtoken';
import { GraphQLError } from 'graphql';
import dotenv from 'dotenv';
dotenv.config();

//console.log('JWT_SECRET_KEY:', process.env.JWT_SECRET_KEY)

export const authenticateToken = ({ req }: any) => {
  // Allows token to be sent via req.body, req.query, or headers
  let token = req.body.token || req.query.token || req.headers.authorization;

  // If the token is sent in the authorization header, extract the token from the header
  if (req.headers.authorization) {
    token = token.split(' ').pop().trim();
  }

  // If no token is provided, return the request object as is
  if (!token) {
    return { user: null };
  }

  // Try to verify the token
  try {
    const { data }: any = jwt.verify(token, process.env.JWT_SECRET_KEY || '', { maxAge: '2hr' });
    // If the token is valid, attach the user data to the request object
    return { user: data }
  } catch (err) {
    // If the token is invalid, log an error message
    console.log('Invalid token');
    return { user: null }
  }
};

export const signToken = (user: {codename: string, email: string, _id: unknown }) => {
  // Create a payload with the user information
  const payload = { 
    codename: user.codename,
    email: user.email,
    _id: user._id 
  };
  const secretKey = process.env.JWT_SECRET_KEY; // Get the secret key from environment variables
  if (!secretKey) throw new Error("JWT_SECRET_KEY is not defined")
  // Sign the token with the payload and secret key, and set it to expire in 2 hours
  return jwt.sign({ data: payload }, secretKey, { expiresIn: '2h' });
};

export class AuthenticationError extends GraphQLError {
  constructor(message: string) {
    super(message, undefined, undefined, undefined, ['UNAUTHENTICATED']);
    Object.defineProperty(this, 'name', { value: 'AuthenticationError' });
  }
};
