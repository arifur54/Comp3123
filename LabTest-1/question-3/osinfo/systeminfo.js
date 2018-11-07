const os = require('os');

module.exports = {
    getSysteminfo: function(){
        var cpuArch = os.arch();
        var hostName = os.hostname();
        var osName = os.type();
    
        return cpuArch + hostName + osName;
    },
    getUserinfo: function(){
        var userInfo = os.userInfo();
        var userName = os.userName;
        var homeDir = os.homedir();

        return userInfo + userName + homeDir;
    }
}


