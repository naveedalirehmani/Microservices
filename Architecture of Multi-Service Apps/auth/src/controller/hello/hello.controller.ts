import { Request, Response } from "express";

export async function sayHello(_: Request, response: Response) {
  try {
    response.status(200).send('hello')
  } catch (error) {
    console.log('hello', error)
  }
}
