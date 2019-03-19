
    $(document).ready(function()
    {
        MissionID = $("#mission_reply_mission_id").val();
        setTimeout( checkAutomaticAlert, 1000 );
    });

    var MissionID;
    var MissionList;

    function checkAutomaticAlert()
    {
        MissionList = JSON.parse( localStorage.getItem("AllianceVehicleAlert-MissionList") );
        
        if( typeof MissionList[MissionID] != "undefined" && MissionList[MissionID].alert == "pending" )
        {
            alertFirstVehicle();
            MissionList[MissionID].alert = "finished";
            
            localStorage.setItem("AllianceVehicleAlert-MissionList", JSON.stringify(MissionList));
        }
    }

    function alertFirstVehicle()
    {
        console.log(`AlertFirstVehicle()`);
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
                
                console.log(`${VehicleDistanceTime}`);
                console.log(`${FoundVehicle}`);
                
                if( $(this).attr("vehicle_type") == VehicleType && VehicleDistanceTime < TimeLeft && !FoundVehicle )
                {
                    $("#vehicle_checkbox_" + VehicleID).click();
                    FoundVehicle = true;
                    console.log(`alert = "done"`);
                    MissionList[MissionID].alert = "done";
                    localStorage.setItem( "AllianceVehicleAlert-MissionList", JSON.stringify(MissionList) );
                    
                    $("#mission_alarm_btn").first().click();
                }
            });
            
        });
    }
