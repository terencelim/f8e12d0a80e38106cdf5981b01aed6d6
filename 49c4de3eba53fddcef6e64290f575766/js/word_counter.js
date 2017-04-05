// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding

function words255() {
    var text = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.\n";
        text += "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.\n";
        text += "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.\n";
        text += "Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.\n";
        text += "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.\n";
        text += "Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.\n";
        text += "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.\n";
        text += "Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.\n";
        text += "Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien.\n";
        text += "Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis.\n";
        document.getElementById("txtCount").value = text;
        counter();
}

function characters255() {
    // Source: http://www.blindtextgenerator.com/lorem-ipsum
    var text = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, nascetur ridiculus mus. Cum sociis elit.";
        document.getElementById("txtCount").value = text;
        counter();
}

function counter() {
    var txtCount = document.getElementById("txtCount").value;
    var elmWordCount = document.getElementById("wordCount");
    var elmTotalChars = document.getElementById("totalChars");
    var elmCharCount = document.getElementById("charCount");
    var elmCharCountNoSpace = document.getElementById("charCountNoSpace");

    if (txtCount.length == 0) {
        elmWordCount.innerHTML = 0;
        elmTotalChars.innerHTML = 0;
        elmCharCount.innerHTML = 0;
        elmCharCountNoSpace.innerHTML = 0;
        return;
    }

    var regex = /\s+/gi;
    var wordCount = txtCount.trim().replace(regex, ' ').split(' ').length;
    var totalChars = txtCount.length;
    var charCount = txtCount.trim().length;
    var charCountNoSpace = txtCount.replace(regex, '').length;

    elmWordCount.innerHTML = wordCount;
    elmTotalChars.innerHTML = totalChars;
    elmCharCount.innerHTML = charCount;
    elmCharCountNoSpace.innerHTML = charCountNoSpace;
}