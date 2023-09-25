let len = document.getElementById("lenbtn").onclick = function () {
    len = document.getElementById("length").value;
    document.getElementById("strlen").innerHTML = len.length;
}

let slice = document.getElementById("slibtn").onclick = function () {
    slice = document.getElementById("slice").value;
    document.getElementById("strslice").innerHTML = slice.slice(2, 4);
}

let substring = document.getElementById("sbstrbtn").onclick = function () {
    substring = document.getElementById("substring").value;
    document.getElementById("sub_string").innerHTML = substring.substring(3, 4);
}

let substr = document.getElementById("substrbtn").onclick = function () {
    substr = document.getElementById("substr").value;
    document.getElementById("sub_str").innerHTML = substr.substr(3, 2);
}

let change = document.getElementById("replacebtn").onclick = function () {
    change = document.getElementById("replace").value;
    document.getElementById("re-place").innerHTML = change.replace("a", "0");
}

let changeall = document.getElementById("replaceallbtn").onclick = function () {
    changeall = document.getElementById("replaceall").value;
    document.getElementById("re-placeall").innerHTML = changeall.replaceAll("a", "0");
}

let up = document.getElementById("upperbtn").onclick = function () {
    up = document.getElementById("uppercase").value;
    document.getElementById("upper").innerHTML = up.toUpperCase();
}

let low = document.getElementById("lowerbtn").onclick = function () {
    low = document.getElementById("lowercase").value;
    document.getElementById("lower").innerHTML = low.toLowerCase();
}

let add = document.getElementById("concatbtn").onclick = function () {
    add = document.getElementById("concat").value;
    document.getElementById("strconcat").innerHTML = add.concat(" Hello");
}

let trim = document.getElementById("trimbtn").onclick = function () {
    trim = document.getElementById("trim").value;
    document.getElementById("strtrim").innerHTML = trim.trim();
}

let trimstart = document.getElementById("trim-sbtn").onclick = function () {
    trimstart = document.getElementById("trim-s").value;
    document.getElementById("strtrim-s").innerHTML = trimstart.trimStart();
}

let trimend = document.getElementById("trim-ebtn").onclick = function () {
    trimend = document.getElementById("trim-e").value;
    document.getElementById("strtrim-e").innerHTML = trimend.trimEnd();
}

let startpad = document.getElementById("pad-sbtn").onclick = function () {
    startpad = document.getElementById("pad-s").value;
    document.getElementById("strpad-s").innerHTML = startpad.padStart(5,"9");
}

let endpad = document.getElementById("pad-ebtn").onclick = function () {
    endpad = document.getElementById("pad-e").value;
    document.getElementById("strpad-e").innerHTML = endpad.padEnd(6,"2");
}

let char = document.getElementById("charbtn").onclick = function () {
    char = document.getElementById("char").value;
    document.getElementById("strchar").innerHTML = char.charAt(3);
}

let sp = document.getElementById("splitbtn").onclick = function () {
    sp = document.getElementById("split").value;
    myArray = sp.split(",")
    document.getElementById("strsplit").innerHTML = myArray[3];
}