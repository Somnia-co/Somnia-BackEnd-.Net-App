const Cookie = require('./Cookies');
const session = require('express-session');
class Auth{
    constructor(){

    }
    static isLogged(cookie){
        if(session.Cookie!= null) return true;
        return false; 
    }
    static LogIn(username){
        
        let someDate = new Date();
        let numberOfDaysToAdd = 6;
        someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 
        let cookie = {
            username: username,
            expires: someDate
        };
        let jsonCookie = JSON.stringify(cookie);
        return jsonCookie;
    }
    static LogOut(){
        
        session.Cookie = null;
        return jsonCookie;
    }
}

module.exports = Auth;