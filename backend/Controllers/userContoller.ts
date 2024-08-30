import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import userModel from '../Models/userModel';

import { generateAccessToken, generateRefreshToken } from '../Jwt/jwt';


interface IRegisterRequest extends Request {
  body: {
      username: string;
      email: string;
      password: string;
  };
}


interface ILoginRequest extends Request {
  body: {
      email: string;
      password: string;
  };
}


export const register = async (req: IRegisterRequest, res: Response) => {
  const { username, email, password } = req.body;

  try {
      const existUser = await userModel.findOne({ email });
      if (existUser) {
          return res.status(400).json({ message: 'User already exists' });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new userModel({
          name: username,
          email,
          password: hashedPassword,
      });
      await newUser.save();

      res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
      console.error(`Error: ${(error as Error).message}`);
      res.status(500).json({ message: 'Server error' }); 
  }
};

export const login = async (req: ILoginRequest, res: Response) => {
  const { email, password } = req.body;

  try {
      const user = await userModel.findOne({ email });
      if (!user) {
          return res.status(400).json({ message: 'User does not exist' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
          return res.status(400).json({ message: 'Invalid credentials' });
      }

      const accessToken = generateAccessToken(user._id.toString());
      const refreshToken = generateRefreshToken(user._id.toString());

      res.status(200).json({
          message: 'User logged in successfully',
          accessToken,
          refreshToken,
          data: {
              name: user.name,
              email: user.email,
          },
      });
  } catch (error) {
      console.error(`Error: ${(error as Error).message}`);
      res.status(500).json({ message: 'Server error' });
  }
};
