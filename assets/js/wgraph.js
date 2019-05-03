queue()
    .defer(d3.csv, "assets/data/student.csv")
    .await(makeGraphs);

//Draw Graph Fuction    
function makeGraphs(error, causeData) {
    var ndx = crossfilter(causeData);

    causeselect(ndx);

     //console.log(causeData);
     dc.renderAll();
}

//Drop down selector for selection of school
function causeselect(ndx) {
    var dim = ndx.dimension(dc.pluck('school'));
    var group = dim.group();
    
    dc.selectMenu("#make-selector")
        .dimension(dim)
        .group(group);
}