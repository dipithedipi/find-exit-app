export async function accountCheck() {
    const res = await fetch(
        `http://localhost:3000/auth/user`,
        { credentials: "include" }
    );
    if (!res.ok) {
        return false;
    }

    const userInfo = await res.json();

    userInfo.domain = userInfo._json.domain;
    
    if(userInfo.email.startsWith("rspp")) {userInfo.type = "rspp"}
    else if((userInfo.email.match(/(?<=.*\..*\.).*(?=@)/) || [])[0] == "studente") {userInfo.type = "student"}
    else { userInfo.type = "other" }


    return userInfo;
}