queue()
    .defer(d3.csv, "assets/data/student.csv")
    .await(makeGraphs);

//Draw Graph Fuction    
function makeGraphs(error, causeData) {
    var ndx = crossfilter(causeData);

    causeselect(ndx);
    gender(ndx);
    age(ndx);
    loc_student(ndx);
    gender_activites(ndx);
    family_support(ndx);
    school_support(ndx);

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

//Student Gender Barchart
function gender(ndx) {
    var dim = ndx.dimension(dc.pluck('sex'));
    var group = dim.group();
    
    dc.barChart("#sex")
        .width(400)
        .height(350)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Female or Male Students")
        .yAxis().ticks(20);
}

//Student Age Barchart
function age(ndx) {
    var dim = ndx.dimension(dc.pluck('age'));
    var group = dim.group();
    
    dc.barChart("#age")
        .width(400)
        .height(350)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Age of Student")
        .yAxis().ticks(20);
}

//Student Location Barchart
function loc_student(ndx) {
    var dim = ndx.dimension(dc.pluck('address'));
    var group = dim.group();
    
    dc.barChart("#location")
        .width(400)
        .height(350)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel(" Location of Student either Rural or Urban")
        .yAxis().ticks(20);
}

//Piechart showing After school activities
function gender_activites(ndx){
    var dim = ndx.dimension(dc.pluck('activities'));
    var group = dim.group();

    dc.pieChart('#activities')
        .height(330)
        .radius(250)
        .transitionDuration(1500)
        .dimension(dim)
        .group(group);
}

//Piechart showing if student gets Family Support
function family_support(ndx){
    var dim = ndx.dimension(dc.pluck('famsup'));
    var group = dim.group();

    dc.pieChart('#family_support')
        .height(330)
        .radius(250)
        .transitionDuration(1500)
        .dimension(dim)
        .group(group);
}

//Piechart showing if the student gets Support from school
function school_support(ndx){
    var dim = ndx.dimension(dc.pluck('schoolsup'));
    var group = dim.group();

    dc.pieChart('#school_support')
        .height(330)
        .radius(250)
        .transitionDuration(1500)
        .dimension(dim)
        .group(group);
}