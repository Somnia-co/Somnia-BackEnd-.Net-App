const Cookie = require('./Cookies');
class Auth{
    constructor(){

    }
    static isLogged(cookie){
        if(cookie!= null) return true;
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
        let someDate = new Date();
        let numberOfDaysToAdd = -6;
        someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 
        let cookie = {
            username: username,
            expires: someDate
        };
        let jsonCookie = JSON.stringify(cookie);
        return jsonCookie;
    }
}

module.exports = Auth;