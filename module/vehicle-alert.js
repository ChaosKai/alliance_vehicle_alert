
$(document).ready(function()
{
    MissionID = $("#mission_reply_mission_id").val();
    setTimeout( checkAutomaticAlert, 1000 );
});

var MissionID;
var MissionsReady;

function checkAutomaticAlert()
{
    MissionsReady = JSON.parse(localStorage.getItem("AllianceVehicleAlert-MissionsReady"));
    
    if( $.inArray( MissionID, MissionsReady ) != -1 )
    {
        alertFirstVehicle();
    }
}

function alertFirstVehicle()
{
    var TimeLeft   = 0;
    var FoundVehicle = false;
    var TimeValues = $("#mission_countdown_" + MissionID).text().split(":");

    for(i = 0; i < TimeValues.length; i++)
    {
         TimeLeft = (TimeLeft * 60) + parseInt(TimeValues[i]);
    }
    
    $.each( AllianceVehicleAlert_AllowedVehicleTypes, function(Key, VehicleType)
    {
        
        $("#vehicle_show_table_body_all").find(".vehicle_select_table_tr").each( function()
        {
            var VehicleID = $(this).attr("id").replace("vehicle_element_content_", "");
            var VehicleDistanceTime = $("#vehicle_sort_" + VehicleID).attr("sortvalue");
            
            if( $(this).attr("vehicle_type") == VehicleType && VehicleDistanceTime < TimeLeft && !FoundVehicle )
            {
                $("#vehicle_checkbox_" + VehicleID).click();
                FoundVehicle = true;
                
                MissionsReady.splice( MissionsReady.indexOf(MissionID), 1 );
                localStorage.setItem( "AllianceVehicleAlert-MissionsReady", JSON.stringify(MissionsReady) );
                
                $("#mission_alarm_btn").first().click();
            }
        });
        
    });
}
