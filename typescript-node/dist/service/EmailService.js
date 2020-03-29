"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
;
;
//DTO = Data Trasfer Object |  metodologi(DDD) significa Obejto para trasnferencia de dados 
var EmailService = /** @class */ (function () {
    function EmailService() {
    }
    EmailService.prototype.sendMail = function (_a) {
        var to = _a.to, messege = _a.messege;
        console.log("E-mail enviado " + to.name + ": " + messege.subject);
    };
    return EmailService;
}());
exports.default = EmailService;
