
//  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
//  -
//  -           Fahrzeugtableau - User-Interface
//  -
//  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
    
    $(document).ready( function()
    {
        $("#row-main-template").prepand(
            $(`<div id="alliance-vehicle-alert" class="col-sm-12 overview_outer"></div>`)
        );
        
        for( var missionWindowIndex = 1; missionWindowIndex <= 5; missionWindowIndex++ )
        {
            var missionWindow = $(`<div class="ava-mission-window" data-window="${missionWindowIndex}" data-mission="none"></div>`);
            missionWindow.attr("data-window", missionWindowIndex);
            missionWindow.attr("data-mission", "none");
            missionWindow.css("width", (100 / 5)+"%");
            
            missionWindow.append( $("<iframe></iframe>") );
            
            $("#alliance-vehicle-alert").append(missionWindow);
        }
    });
