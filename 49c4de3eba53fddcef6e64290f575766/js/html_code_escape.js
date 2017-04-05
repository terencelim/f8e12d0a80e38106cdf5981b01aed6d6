// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding
function escapeCode() {
    var txtEncode = document.getElementById("txtEscapeCode").value;
    document.getElementById("txtUnEscapeCode").value = txtEncode.replace(/>/g,'&gt;')
                                                                .replace(/</g,'&lt;')
                                                                .replace(/"/g,'&quot;')
                                                                .replace(/'/g,'&#39');
}

function unEscapeCode() {
    var txtEncode = document.getElementById("txtUnEscapeCode").value;
    document.getElementById("txtEscapeCode").value = txtEncode.replace(/&gt;/g,'>')
                                                                .replace(/&lt;/g,'<')
                                                                .replace(/&quot;/g,'"')
                                                                .replace(/&#39/g,"'");;
}

function codePreview() {
    var container = document.getElementById("codePreview");
    container.innerHTML = document.getElementById("txtUnEscapeCode").value;
}