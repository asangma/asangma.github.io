dojo.provide("esri.tests.tasks.gpasync.simpleParamDoubleTest");

dojo.require("esri.tasks.gp");

var gpTask;

doh.registerGroup("tasks.gpasync.simpleParamDoubleTest", [{
    name: "gpAsync",
    timeout: 3000,
    runTest: function(t){
        //create input param
         var params = {
            "Input_String": "test",
            "Input_Long": 123456,
			"Input_Double":123.456,
			"Input_Boolean":false,
			"Input_Date":1199145600000,
			"Input_Linear_Unit":"",
				
        };
		
		var d = new doh.Deferred();
        function statusCallback(jobInfo){
        	console.log(jobInfo.jobStatus);
         
        }
        function showResult(jobInfo){
        	gpTask.getResultData(jobInfo.jobId, "Output_Double");
        }
        function getData(result){
            t.assertEqual(result.dataType,"GPDouble");
			t.assertEqual(result.value,123.456);
			d.callback(true);
			
        }
        dojo.connect(gpTask, "onGetResultDataComplete", getData);
        gpTask.submitJob(params, showResult, statusCallback);
		return d;
        
    }
}], function()//setUp()
{
    gpTask = new esri.tasks.Geoprocessor("http://servery/ArcGIS/rest/services/GPServices/byVal_async/GPServer/SimpleParamTest");
}, function()//tearDown
{
    gpTask = null;
});