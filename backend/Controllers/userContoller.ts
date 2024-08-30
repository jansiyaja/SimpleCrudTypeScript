import { Request, Response } from "express";
import {dumyData} from '../Models/demoUsers'; // Import your mock data

export const getUsers = async (req: Request, res: Response) => {
  try {
   
  } catch (error) {
    console.error('Error fetching users:', error); // Log the error
    res.status(500).json({ message: "Server Error" });
  }
};
