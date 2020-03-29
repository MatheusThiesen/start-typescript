interface IMailTo {
  name: string;
  email: string;
};

interface IMailMassage {
  subject: string;
  body: string;
  attachement?: string[];  
    //Definição de um Array = Array<string>  || string[]
    //Definindo um item nao obrigatorio no objeto = ?: 
};

interface IMessegeDTO{
  to:IMailTo;
  messege:IMailMassage;
};

interface IEmailService{
  sendMail(request: IMessegeDTO): void;
}

//DTO = Data Trasfer Object |  metodologi(DDD) significa Obejto para trasnferencia de dados 

class EmailService implements IEmailService {
  sendMail({to, messege}:IMessegeDTO) {
    console.log(`E-mail enviado ${to.name}: ${messege.subject}`);    
  }
}

export default EmailService;