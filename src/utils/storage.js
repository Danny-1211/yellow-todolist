function setToken(token) {
    localStorage.setItem("todoToken", token);
}

function setNickName(nickName) {
    localStorage.setItem("nickName", nickName);
}

function getToken(){
    const token = localStorage.getItem('todoToken');
    return token ? token : null
}

function getNickName() {
    const nickName = localStorage.getItem("nickName");
    return nickName? nickName  : ""
}

export {
    setToken,
    setNickName,
    getToken,
    getNickName
}