// ==UserScript==
// @name        Alliance Vehicle Alert
// @namespace   Leitstellenspiel
// @description Export der Wachen & Fahrzeuge aus dem LSS zum Fahrzeugtableau
// @downloadURL https://github.com/ChaosKai/alliance_vehicle_alert/raw/master/userscript.user.js
// @include     http*://www.leitstellenspiel.de/*
// @version     1
// @author      ChaosKai93
// @grant       none
// ==/UserScript==

var scriptElement = document.createElement("script");
scriptElement.type = "text/javascript";
scriptElement.src = "https://rawgit.com/ChaosKai/alliance_vehicle_alert/master/autoload.js";
document.body.appendChild(scriptElement);
