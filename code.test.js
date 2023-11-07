const fs = require('fs');
var test = require('unit.js');

eval(fs.readFileSync('code.js')+'');

        var cycleAdjList1 = [[1,4,5],
                            [0,2],
                            [1],
                            [],
                            [0,5],
                            [0,4]];
        var hascycle1Result = true;
        var hascycle2Result = false;
        var hascycle3Result = true;

        var cycleAdjList2 = [[],
                            [],
                            [3],
                            [2]];
        var hascycle4Result = false;
        var hascycle5Result = false;
        var hascycle6Result = true;

        test.value(hasCycle(cycleAdjList1, 0, 2)) == hascycle1Result;
        test.value(hasCycle(cycleAdjList1, 0, 3)) == hascycle2Result;
        test.value(hasCycle(cycleAdjList1, 1, 4)) == hascycle3Result;

        test.value(hasCycle(cycleAdjList2, 0, 1)) == hascycle4Result;
        test.value(hasCycle(cycleAdjList2, 0, 2)) == hascycle5Result;
        test.value(hasCycle(cycleAdjList2, 3, 2)) == hascycle6Result;
