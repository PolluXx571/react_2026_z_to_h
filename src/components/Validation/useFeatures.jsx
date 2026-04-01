export default function emailCheck(mail) {
      const regExpToControlMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regExpToControlMail.test(mail);
}
