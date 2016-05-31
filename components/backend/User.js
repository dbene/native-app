/**
 * Created dbene on 31.05.2016.
 */

var User = (function () {
    var instance;

    function createInstance() {
        var object = new UserClass();
        return object;
    }

    return {
        getInstance: function (pReset) {
            if (!instance || pReset == 1) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

class UserClass {
    user= {
        id:"",
        firstname:"",
        lastname:"",
        password:"",
        birthday:"",
        sex:""
    };
}

module.exports = User, UserClass;
