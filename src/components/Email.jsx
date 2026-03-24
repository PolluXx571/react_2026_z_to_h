export function Email() {

     
      const myMail = 'alyapegasus@mail.ru';
      const emailRegExp = /^[^\s@]+@[^\\s@]+\.[^\s@]+$/;
      const check = emailRegExp.test(myMail);
      return check ? myMail : null;
}
