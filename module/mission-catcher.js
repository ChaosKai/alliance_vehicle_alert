
$(document).ready(function()
{
    setInterval( collectMissions, 1000 );
});


function collectMissions()
{
    var UpdatedMissions = {};

    $("#mission_list_alliance").find(".missionSideBarEntry").each(function()
    {
        var MissionID = $(this).attr("mission_id");
        var MissionType = $(this).attr("mission_type_id");
        var MissionName = $(this).find(".map_position_mover").text().replace("[Verband] ", "");
        var MissionState;

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

        UpdatedMissions[MissionID] = {
            "id":    MissionID,
            "type":  MissionType,
            "state": MissionState,
            "name":  MissionName
        };
    });

    $.each(UpdatedMissions, function(Key, Mission)
    {
        if( typeof AllianceMissions[Mission.id] != "undefined" )
        {
            if( AllianceMissions[Mission.id].state != Mission.state && Mission.state == "green" )
            {
                var notification = new Notification("Einsatz " + Mission.name + " beginnt", { body: "Der Einsatz startet. Schicke schnell ein Fahrzeug." });
            }
        }
    });

    AllianceMissions = UpdatedMissions;
}
