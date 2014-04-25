hexaUtil.createGrids(4);

//Page events
$(".cubeGroupRow").click(function () {
    var arr = [];
    var rowNum = $(this).data("cuberow");
    arr.push(rowNum);
    hexaUtil.rotateRow(arr);
})

$(".cubeGroupCol").click(function () {
    hexaUtil.rotateCol($(this).data("cubecol"));
})
