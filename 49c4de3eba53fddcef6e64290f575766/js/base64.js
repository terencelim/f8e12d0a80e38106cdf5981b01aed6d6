// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding
function b64Encode() {
    var txtEncode = document.getElementById("b64enc").value;
    document.getElementById("b64dec").value = window.btoa(txtEncode);
}

function b64Decode() {
    var txtEncode = document.getElementById("b64dec").value;
    document.getElementById("b64enc").value = window.atob(txtEncode);
}

function utf8_to_b64(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
}

function b64_to_utf8(str) {
    return decodeURIComponent(escape(window.atob(str)));
}

function b64EncodeUnicode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode('0x' + p1);
    }));
}

function svgPreview() {
    var container = document.getElementById("svgContainer");
    container.innerHTML = document.getElementById("b64enc").value;
}