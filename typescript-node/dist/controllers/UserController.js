"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var EmailService_1 = __importDefault(require("../service/EmailService"));
var user = [{
        name: "Matheus",
        sobrenome: "Thiesen",
        idade: "20"
    }];
exports.default = {
    index: function (req, res) {
        res.send(user);
    },
    create: function (req, res) {
        var emailService = new EmailService_1.default;
        emailService.sendMail({
            to: {
                name: "Matheus Thiesen",
                email: "matheusreis314@gmail.com"
            },
            messege: {
                subject: "Bem-vindo ao sistema",
                body: "Seja bem-vindo."
            }
        });
        res.send();
    }
};
