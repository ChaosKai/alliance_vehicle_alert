//  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
//  -
//  -           Fahrzeugtableau - Autoloader
//  -
//  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

        var AllianceVehicleAlert_Branch = "beta-1";

//      -
//      -           Google Font
//      -

        var styleElement = document.createElement("link");
        styleElement.rel = "stylesheet";
        styleElement.href = "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700";
        document.body.appendChild(styleElement);
                
//      -
//      -           User Interface
//      -
        
        if (window.location.pathname === "/" || window.location.pathname === "/#")
        {
            var scriptElement = document.createElement("script");
            scriptElement.type = "text/javascript";
            scriptElement.src = "https://rawgit.com/ChaosKai/alliance_vehicle_alert/" + AllianceVehicleAlert_Branch + "/scripts/user-interface.js";
            document.body.appendChild(scriptElement);
                
            var styleElement = document.createElement("link");
            styleElement.rel = "stylesheet";
            styleElement.href = "https://rawgit.com/ChaosKai/alliance_vehicle_alert/" + AllianceVehicleAlert_Branch + "/styles/user-interface.css";
            document.head.appendChild(styleElement);
        }

//      -
//      -           Mission Catcher
//      -
        
        if (window.location.pathname === "/" || window.location.pathname === "/#")
        {
            var scriptElement = document.createElement("script");
            scriptElement.type = "text/javascript";
            scriptElement.src = "https://rawgit.com/ChaosKai/alliance_vehicle_alert/" + AllianceVehicleAlert_Branch + "/scripts/mission-catcher.js";
            document.body.appendChild(scriptElement);
        }
        
//      -
//      -           Vehicle Alert
//      -
        
        if (window.location.pathname.indexOf("/missions/") !== -1)
        {
            var scriptElement = document.createElement("script");
            scriptElement.type = "text/javascript";
            scriptElement.src = "https://rawgit.com/ChaosKai/alliance_vehicle_alert/" + AllianceVehicleAlert_Branch + "/scripts/vehicle-alert.js";
            document.body.appendChild(scriptElement);
        }
        
//      -
//      -           Allowed Vehicle Types
//      -

        var AllianceVehicleAlert_AllowedVehicleTypes = [
            "MTW",
            "FuStw",
            "LF 20",
            "LF 20/16",
            "HLF 20",
            "TLF 16/25"
        ]
