var hexaUtil = {
    createGrids: function (numberOfRows) {
        var colorArr = ["#069ad5", "#fc5215", "#30b71d", "#eee"],
                letterCt = 4,
                settings = {
                    size: 150,
                    margin: 5,
                    fontSize: 100,
                    horizontalFlip: false,
                    domEvents: {
                        click: function (e, face, cube) {
                            var letter = cube.classList.toString();
                            letter = letter.substring(letter.lastIndexOf('-') + 1);
                            this.flip(false, letter);
                        },
                        mouseout: function (e, face, cube) {
                            //face.style.backgroundColor = getRandomColor(colorArr);
                        }
                    }
                },
                makeObject = function (a) {
                    var o = {};
                    for (var i = 0, l = a.length; i < l; i++) {
                        o['letter' + i] = a[i];
                    }
                    return o;
                },
                generateRandomLetters = function (len) {
                    var x = 0,
                        retObj = [];
                    while (x < 4) {
                        var text = "";

                        var charset = "dtvlttweeuvbjonfgeeiahieeadmgxyaagdrrasodeabceirczeyftkluiounutnneiihraoriowsisnoonaallmeeippoqstr";

                        for (var i = 0; i < len; i++) {
                            text += charset.charAt(Math.floor(Math.random() * charset.length));
                        }
                        retObj.push(text.split(''));
                        x++;
                    }
                    return retObj;
                },
                getRandomColor = function (arr) {
                    return arr[Math.floor(Math.random() * arr.length)];
                }

        document.addEventListener('DOMContentLoaded', function () {
            for (var i = 0; (i < numberOfRows && numberOfRows < 10) ; i++) {
                switch (i) {
                    case 0:
                        cubeGroup0 = new HexaFlip(document.getElementById('cubeGroup0'), makeObject(generateRandomLetters(letterCt)), settings);
                        break;
                    case 1:
                        cubeGroup1 = new HexaFlip(document.getElementById('cubeGroup1'), makeObject(generateRandomLetters(letterCt)), settings);
                        break;
                    case 2:
                        cubeGroup2 = new HexaFlip(document.getElementById('cubeGroup2'), makeObject(generateRandomLetters(letterCt)), settings);
                        break;
                    case 3:
                        cubeGroup3 = new HexaFlip(document.getElementById('cubeGroup3'), makeObject(generateRandomLetters(letterCt)), settings);
                        break;
                    case 4:
                        cubeGroup4 = new HexaFlip(document.getElementById('cubeGroup4'), makeObject(generateRandomLetters(letterCt)), settings);
                        break;
                    case 5:
                        cubeGroup5 = new HexaFlip(document.getElementById('cubeGroup5'), makeObject(generateRandomLetters(letterCt)), settings);
                        break;
                    case 6:
                        cubeGroup6 = new HexaFlip(document.getElementById('cubeGroup6'), makeObject(generateRandomLetters(letterCt)), settings);
                        break;
                    case 7:
                        cubeGroup7 = new HexaFlip(document.getElementById('cubeGroup7'), makeObject(generateRandomLetters(letterCt)), settings);
                        break;
                    case 8:
                        cubeGroup8 = new HexaFlip(document.getElementById('cubeGroup8'), makeObject(generateRandomLetters(letterCt)), settings);
                        break;
                    case 9:
                        cubeGroup9 = new HexaFlip(document.getElementById('cubeGroup9'), makeObject(generateRandomLetters(letterCt)), settings);
                        break;
                }
            }
        }, false);
    },
    eraseGrids: function () {
        $("#cubeGroup0").empty();
        $("#cubeGroup1").empty();
        $("#cubeGroup2").empty();
        $("#cubeGroup3").empty();
        $("#cubeGroup4").empty();
        $("#cubeGroup5").empty();
        $("#cubeGroup6").empty();
        $("#cubeGroup7").empty();
        $("#cubeGroup8").empty();
        $("#cubeGroup9").empty();
    },
    rotateRow: function (rowNum) {
        if (rowNum === "all") {
            cubeGroup0.flip();
            cubeGroup1.flip();
            cubeGroup2.flip();
            cubeGroup3.flip();
            cubeGroup4.flip();
        }
        else {
            for (var x = 0; x < rowNum.length; x++) {
                switch (Number(rowNum[x])) {
                    case 0:
                        cubeGroup0.flip();
                        break;
                    case 1:
                        cubeGroup1.flip();
                        break;
                    case 2:
                        cubeGroup2.flip();
                        break;
                    case 3:
                        cubeGroup3.flip();
                        break;
                    case 4:
                        cubeGroup4.flip();
                        break;
                }
            }
        }
    },
    rotateCol: function (colNum) {
        for (var x = 0; x < colNum.length; x++) {
            cubeGroup0.flip(false, "letter"+colNum[x]);
            cubeGroup1.flip(false, "letter"+colNum[x]);
            cubeGroup2.flip(false, "letter"+colNum[x]);
            cubeGroup3.flip(false, "letter"+colNum[x]);
        }
    }
}