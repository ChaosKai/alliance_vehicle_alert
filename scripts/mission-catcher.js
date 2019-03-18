
    $(document).ready(function()
    {
        setTimeout( function() {
            setInterval( function() {
                collectMissions();
            }, 1000);
        }, 200);

        setTimeout( function() {
            setInterval( function() {
                markMissionsForOpening();
            }, 500);
        }, 300);

        setTimeout( function() {
            setInterval( function() {
                openMissions();
            }, 500);
        }, 600);
    });



//  - --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
//  -
//  -           Collect Missions
//  -
//  - --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

    function collectMissions()
    {
        let AllianceMissions = JSON.parse( localStorage.getItem("AllianceVehicleAlert-MissionList") );
        let UpdatedMissions  = {};

        $("#mission_list_alliance").find(".missionSideBarEntry").each(function()
        {
            var MissionID = $(this).attr("mission_id");
            var MissionType = $(this).attr("mission_type_id");
            var MissionName = $(this).find(".map_position_mover").text().replace("[Verband] ", "");
            var MissionState = "";
            var MissionAlert = "none";

            if( $(this).children("div").hasClass("mission_panel_green") )
            {
                MissionState = "green";
            }
            else if( $(this).children("div").hasClass("mission_panel_yellow") )
            {
                MissionState = "yellow";
            }
            else
            {
                MissionState = "red";
            }

            if( typeof AllianceMissions[MissionID] != "undefined" )
            {
                var MissionAlert = AllianceMissions[MissionID].alert;
            }

            UpdatedMissions[MissionID] = {
                "id"    : MissionID,
                "type"  : MissionType,
                "state" : MissionState,
                "name"  : MissionName,
                "alert" : MissionAlert
            };
        });

        localStorage.setItem( "AllianceVehicleAlert-MissionList", JSON.stringify(UpdatedMissions) );
    }


//  - --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
//  -
//  -           Mark Mission for opening
//  -
//  - --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

    function markMissionsForOpening()
    {
        let AllianceMissions = JSON.parse( localStorage.getItem("AllianceVehicleAlert-MissionList") );
        
        $.each(AllianceMissions, function(MissionId, MissionDetails)
        {
            if( MissionDetails.state == "green" && MissionDetails.alert == "none" )
            {
                AllianceMissions[MissionId].alert = "pending";
            }
        });

        localStorage.setItem( "AllianceVehicleAlert-MissionList", JSON.stringify(AllianceMissions) );
    }

//  - --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
//  -
//  -           Action List
//  -
//  - --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

    function openMissions()
    {
        let AllianceMissions = JSON.parse( localStorage.getItem("AllianceVehicleAlert-MissionList") );
        var MissionWindows   = $("#alliance-vehicle-alert").find(".ava-mission-window");
        
        if( AllianceMissions == null)
        {
            AllianceMissions = {};
        }
        
        $.each(AllianceMissions, function(MissionId, MissionDetails)
        {
            var foundFreeMissionWindow = false;
            
            for( var missionWindowIndex = 0; missionWindowIndex < MissionWindows.length; missionWindowIndex++ )
            {
                if( MissionWindows.eq(missionWindowIndex).attr("data-mission") == "none" )
                {
                    foundFreeMissionWindow = missionWindowIndex;
                }
            }
            
            if( foundFreeMissionWindow !== false && MissionDetails.state == "green" && MissionDetails.alert == "none" )
            {
                MissionWindows.eq(foundFreeMissionWindow).attr("data-mission", MissionId);
                MissionWindows.eq(foundFreeMissionWindow).find("iframe").attr("src", `https://www.leitstellenspiel.de/missions/${MissionId}`);
                
                AllianceMissions[MissionId].alert = "done";
                
                setTimeout( function()
                {
                    MissionWindows.eq(foundFreeMissionWindow).attr("data-mission", "none");
                    MissionWindows.eq(foundFreeMissionWindow).find("iframe").attr("src", ``);
                }, 5000);
            }
        });
        
        localStorage.setItem( "AllianceVehicleAlert-MissionList", JSON.stringify(AllianceMissions) );
    }
