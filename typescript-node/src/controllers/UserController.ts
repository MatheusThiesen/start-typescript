import {Request, Response } from 'express';

import EmailService from '../service/EmailService'

const user = [{
  name:"Matheus",
  sobrenome:"Thiesen",
  idade:"20"
}]

export default {
  index (req:Request, res:Response) {
    res.send(user)
  },
  create (req:Request, res:Response){
    const emailService = new EmailService;

    emailService.sendMail({
      to:{
        name:"Matheus Thiesen",
        email:"matheusreis314@gmail.com"
      },
      messege:{
        subject:"Bem-vindo ao sistema",
        body:"Seja bem-vindo."
      }
    })
    
    res.send();
  }
}