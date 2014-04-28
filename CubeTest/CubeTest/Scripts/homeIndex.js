hexaUtil.createGrids(4);

//Page events
$(".cubeGroupRow").click(function () {
    var arr = [];
    var rowNum = $(this).data("cuberow");
    arr.push(rowNum);
    hexaUtil.rotateRow(arr);
})

$(".cubeGroupCol").click(function () {
    var arr = [];
    var colNum = $(this).data("cubecol");
    arr.push(colNum);
    hexaUtil.rotateCol(arr);
})


var buttons7Click = Array.prototype.slice.call(document.querySelectorAll('#btn-click button')),
				buttons9Click = Array.prototype.slice.call(document.querySelectorAll('button.btn-8g')),
				totalButtons7Click = buttons7Click.length,
				totalButtons9Click = buttons9Click.length;

buttons7Click.forEach(function (el, i) {
    el.addEventListener('click', activate, false);
});
buttons9Click.forEach(function (el, i) {
    el.addEventListener('click', activate, false);
});

function activate() {
    var self = this, activatedClass = 'btn-activated';
    if (!classie.has(this, activatedClass)) {
        classie.add(this, activatedClass);
        setTimeout(function () { classie.remove(self, activatedClass) }, 500);
    }
}