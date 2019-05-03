queue()
    .defer(d3.csv, "assets/data/student.csv")
    .await(makeGraphs);

//Draw Graph Fuction    
function makeGraphs(error, causeData) {
    var ndx = crossfilter(causeData);

     console.log(causeData);
     dc.renderAll();
}