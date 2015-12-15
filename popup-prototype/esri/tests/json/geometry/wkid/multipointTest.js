dojo.provide("esri.tests.json.geometry.wkid.multipointTest");


var multipointJson, multipoint;
function hasUndefined(queue){

    var obj = queue.shift(), value;

    if (dojo.isArray(obj)) {
        for (var i = 0; i < obj.length; i++) {
            value = obj[i];
            console.log("value in array:"+value);
            if (value === undefined) {

                return true;
            }
            else
            if (dojo.isObject(value)) {
                queue.push(value);

            }
        }
    }
    else { // assumed object
        for (var prop in obj) {
            value = obj[prop];
            console.log("value in object:"+value);
            if (value === undefined) {
                console.log(prop+"_"+dojo.toJson(value));
                return true;
            }
            else
            if (dojo.isObject(value)) {
                queue.push(value);
            }
        }
    }

    return false;
}
doh.registerGroup("json.geometry.wkid.multipointTest", [{
    name: "testMultipoint",
    timeout: 3000,
    runTest: function(t){
        
		t.assertEqual(4326,multipoint.spatialReference.wkid);
		t.assertEqual("multipoint",multipoint.type);
		t.assertEqual(4,multipoint.points.length);
		t.assertEqual(-97.06138,multipoint.getPoint(0).x);
		t.assertEqual(32.837,multipoint.getPoint(0).y);

		
    }
	
},{
	name: "testToJson",
	timeout: 3000,
	runTest: function(t){
		t.assertEqual(multipointJson, multipoint.toJSON());
        //added undefined test
        var json = multipoint.toJSON();
        var q = [json], found = false;

        do {
            found = hasUndefined(q);
        }
        while (!found && q.length > 0);

        if (found) {
            console.error("Test Failed");
        }
        else {
            console.info("Test Passed");
        }
        console.log(found);
        t.assertFalse(found);
	}
} ], 


function()//setUp()
{
    
	multipointJson = {"points" : [ [-97.06138,32.837], [-97.06133,32.836], [-97.06124,32.834], [-97.06127,32.832] ],
	"spatialReference" : {"wkid" : 4326}};
	multipoint = new esri.geometry.Multipoint(multipointJson);
   
    
}, function()//tearDown
{
    multipoint = null;
});