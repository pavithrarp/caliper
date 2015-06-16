
$(function () {
    var test = document.getElementById("latency_tst").value;  
    
    var rttest_dic = getJson(test, 'rttest');
    var columns = getHoriColumn(rttest_dic);
    var data = getHoriData(rttest_dic, columns);
	   
    // initialize grid
    var options = {emptyRow: true, sortable: false};
	var grid = $(".sensei-grid:eq(5)").grid(data, columns, options);

    draw_grid(grid);

    // api examples
    var $row = grid.getRowByIndex(5);
    console.group("data api examples");
    console.log("grid.getRowDataByIndex(0):", grid.getRowDataByIndex(0));
    console.log("grid.getRowData($row):", grid.getRowData($row));
    console.log("grid.getGridData():", grid.getGridData());
    console.groupEnd();

    window.grid = grid;
});