var COMMENTago = false; // testing flag for legitimate text for a comment
var COMMENTgocode = ''; // holds entire HTML comment code
var COMMENTgojscode = ''; // holds entire JavaScript comment code
var COMMENTExampleSeparator = '';
var COMMENTExampleRegion = '';


COMMENTExampleSeparator = 'public class Client {\n';
COMMENTExampleSeparator += '\n';
COMMENTExampleSeparator += '    //================================================================================\n';
COMMENTExampleSeparator += '    // Properties\n';
COMMENTExampleSeparator += '    //================================================================================\n';
COMMENTExampleSeparator += '\n';
COMMENTExampleSeparator += '    private String name;\n';
COMMENTExampleSeparator += '    private boolean checked;\n';
COMMENTExampleSeparator += '\n';
COMMENTExampleSeparator += '    //================================================================================\n';
COMMENTExampleSeparator += '    // Constructors\n';
COMMENTExampleSeparator += '    //================================================================================\n';
COMMENTExampleSeparator += '\n';
COMMENTExampleSeparator += '    public Client() {\n';
COMMENTExampleSeparator += '    }\n';
COMMENTExampleSeparator += '\n';
COMMENTExampleSeparator += '    public Client(String name, boolean checked) {\n';
COMMENTExampleSeparator += '        this.name = name;\n';
COMMENTExampleSeparator += '        this.checked = checked;\n';
COMMENTExampleSeparator += '    }\n';
COMMENTExampleSeparator += '\n';
COMMENTExampleSeparator += '    //================================================================================\n';
COMMENTExampleSeparator += '    // Accessors\n';
COMMENTExampleSeparator += '    //================================================================================\n';
COMMENTExampleSeparator += '\n';
COMMENTExampleSeparator += '    public String getName() {\n';
COMMENTExampleSeparator += '        return name;\n';
COMMENTExampleSeparator += '    }\n';
COMMENTExampleSeparator += '\n';
COMMENTExampleSeparator += '    public void setName(String name) {\n';
COMMENTExampleSeparator += '        this.name = name;\n';
COMMENTExampleSeparator += '    }\n';
COMMENTExampleSeparator += '\n';
COMMENTExampleSeparator += '    public boolean isChecked() {\n';
COMMENTExampleSeparator += '        return checked;\n';
COMMENTExampleSeparator += '    }\n';
COMMENTExampleSeparator += '\n';
COMMENTExampleSeparator += '    public void setChecked(boolean checked) {\n';
COMMENTExampleSeparator += '        this.checked = checked;\n';
COMMENTExampleSeparator += '    }\n';
COMMENTExampleSeparator += '\n';
COMMENTExampleSeparator += '}\n\n';
COMMENTExampleSeparator += '################################################################################\n';

COMMENTExampleRegion = '//regionBEGIN Description\n';
COMMENTExampleRegion += '//------------------------------------------------------------------------------\n\n';
COMMENTExampleRegion += '    Your Code Goes Here\n\n';
COMMENTExampleRegion += '//------------------------------------------------------------------------------\n';
COMMENTExampleRegion += '//regionEND Description\n';


String.prototype.toTitleCase = function() {
    return this.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};

var vBuildString = '';

function updateSep(elTargetID, elSourceName) {
    var x = document.getElementsByName(elSourceName);
    var i;
    for (i = 0; i < x.length; i++) {
        if (x[i].checked == true) {
            document.getElementById(elTargetID).value = x[i].value;
        }
    }
    generateComment();
}

function generateComment() {

    var vNum = parseInt(document.COMMENTForm.txtNum.value);
    var vSep = document.COMMENTForm.txtCustomSepChar.value;
    var bPadCheck = document.COMMENTForm.chkPadding.checked;
    var bRemPadSeparatorCheck = document.COMMENTForm.chkRemPadSeparator.checked;
    var bRemPadSegmentCheck = document.COMMENTForm.chkRemPadSegment.checked;
    var chkRemPadSegSurround = document.COMMENTForm.chkRemPadSegSurround.checked;
    var chkStrBeginEndSegments = document.COMMENTForm.chkBeginEndSegments.checked;
    var vPadSpace = " ";
    var vPadSpaceLen = 2;
    var vChar = document.COMMENTForm.txtCustomSegChar.value;
    var vSeparatorBegin = document.COMMENTForm.txtSeparatorBegin.value;
    var vSeparatorEnd = document.COMMENTForm.txtSeparatorEnd.value;
    var vSegmentBegin = document.COMMENTForm.txtSegmentBegin.value;
    var vSegmentEnd = document.COMMENTForm.txtSegmentEnd.value;
    var vSurround = document.COMMENTForm.txtSurround.value;
    var vToPad = document.COMMENTForm.txtToPad.value;

    var bUpper = document.COMMENTForm.chkUpper.checked;
    var bLower = document.COMMENTForm.chkLower.checked;
    var bTitle = document.COMMENTForm.chkTitle.checked;

    if (document.COMMENTForm.chkRepeat01.checked) {
    document.COMMENTForm.txtToRepeat.value = 1;
    }
    else if (document.COMMENTForm.chkRepeat02.checked) {
    document.COMMENTForm.txtToRepeat.value = 2;
    }
    else if (document.COMMENTForm.chkRepeat03.checked) {
    document.COMMENTForm.txtToRepeat.value = 3;
    }
    else if (document.COMMENTForm.chkRepeat04.checked) {
    document.COMMENTForm.txtToRepeat.value = 4;
    };

    var vToRepeat = document.COMMENTForm.txtToRepeat.value;

    if (bPadCheck == false) {
    vPadSpace = "";
    vPadSpaceLen = 0;
    } else {
    vPadSpace = " ";
    vPadSpaceLen = 2;
    }

    if (bRemPadSeparatorCheck) {
    vSeparatorBegin = "";
    vSeparatorEnd = "";
    }

    if (bRemPadSegmentCheck) {
    vSegmentBegin = "";
    vSegmentEnd = "";
    }

    if (chkRemPadSegSurround) {
    vSurround = "";
    }

    var vSurroundLeft = vSurround.slice(0, 1);
    var vSurroundRight = vSurround.slice(-1);
    var padStringChar = Array(vNum + 1).join(vChar);
    var padStringSep = Array(vNum + 1).join(vSep);

    if (chkStrBeginEndSegments) {
    var vToPadBegin = vToPad + " Begin";
    var bdrStartBegin = ((vNum - (vToPadBegin.length + vSegmentBegin.length + vSegmentEnd.length + vSurround.length + vPadSpaceLen)) / 2).toFixed() - 1;
    var padTrimBegin = padStringChar.slice(-bdrStartBegin);
    var padSep = vSeparatorBegin + padStringSep.slice(-(vNum - vSeparatorBegin.length - vSeparatorEnd.length)) + vSeparatorEnd;
    var strCatBegin = vSurroundLeft + vPadSpace + vToPadBegin + vPadSpace + vSurroundRight;

    var vToPadEnd = vToPad + " End";
    var bdrStartEnd = ((vNum - (vToPadEnd.length + vSegmentBegin.length + vSegmentEnd.length + vSurround.length + vPadSpaceLen)) / 2).toFixed() - 1;
    var padTrimEnd = padStringChar.slice(-bdrStartEnd);
    var strCatEnd = vSurroundLeft + vPadSpace + vToPadEnd + vPadSpace + vSurroundRight;
    } else {
    var bdrStart = ((vNum - (vToPad.length + vSegmentBegin.length + vSegmentEnd.length + vSurround.length + vPadSpaceLen)) / 2).toFixed() - 1;
    var padTrim = padStringChar.slice(-bdrStart);
    var padSep = vSeparatorBegin + padStringSep.slice(-(vNum - vSeparatorBegin.length - vSeparatorEnd.length)) + vSeparatorEnd;
    var strCat = vSurroundLeft + vPadSpace + vToPad + vPadSpace + vSurroundRight;
    }

    vBuildString = "80 Character Reference\n";
    vBuildString += "\n";
    vBuildString += Array(vNum/10 + 1).join("-123456789") + "\n";
    vBuildString += padSep + "\n";

    if (chkStrBeginEndSegments) {
    for (var i = 1; i <= vToRepeat; i++) {
        vBuildString += vSegmentBegin + String(padStringChar + (padTrimBegin.concat(" ", strCatBegin, " ", padTrimBegin))).slice(-(vNum - vSegmentBegin.length - vSegmentEnd.length)) + vSegmentEnd + "\n";
    };
    vBuildString += padSep + "\n\n";
    vBuildString += padSep + "\n";
    for (var i = 1; i <= vToRepeat; i++) {
        vBuildString += vSegmentBegin + String(padStringChar + (padTrimEnd.concat(" ", strCatEnd, " ", padTrimEnd))).slice(-(vNum - vSegmentBegin.length - vSegmentEnd.length)) + vSegmentEnd + "\n";
    };
    } else {
    for (var i = 1; i <= vToRepeat; i++) {
        vBuildString += vSegmentBegin + String(padStringChar + (padTrim.concat(" ", strCat, " ", padTrim))).slice(-(vNum - vSegmentBegin.length - vSegmentEnd.length)) + vSegmentEnd + "\n";
    };
    }

    vBuildString += padSep + "\n";

    if (bUpper == true) {
    vBuildString = vBuildString.toUpperCase();
    }

    if (bTitle == true) {
    vBuildString = vBuildString.toTitleCase();
    }

    if (bLower == true) {
    vBuildString = vBuildString.toLowerCase();
    }

// OUTPUT To Text Areas
    document.COMMENTForm.showCode.value = vBuildString;
    document.COMMENTForm.exampleCode.value = COMMENTExampleSeparator + '\n' + COMMENTExampleRegion;

}

var testWindow = null;

function COMMENTgetcode() {
    if (!COMMENTago) return false;
    document.COMMENTForm.showCode.focus();
    document.COMMENTForm.showCode.select();
}

function copyit(theField) {
    var tempval = eval("document." + theField);
    tempval.focus();
    tempval.select();
    therange = tempval.createTextRange();
    therange.execCommand("Copy");
}

// clears field of default value - This NOT used here; not conditional
function clearfield(field) {
    field.value = ''
}

// clears field of default value - This is used here; conditional
function clear_field(field) {
    if (field.value == field.defaultValue) {
    field.value = ''
    }
}