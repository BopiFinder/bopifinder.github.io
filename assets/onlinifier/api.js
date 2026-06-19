//made with one line of code (this comment line doesn't count ok)
function tof(id, mode) {fetch("https://corsproxy.io/?" + encodeURIComponent(`https://bopimo.com/api/users/${id}`), {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({"online": mode})});}
