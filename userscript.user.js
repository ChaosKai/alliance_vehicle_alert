// ==UserScript==
// @name        Fahrzeugtableau (BETA Channel)
// @namespace   Leitstellenspiel
// @description Export der Wachen & Fahrzeuge aus dem LSS zum Fahrzeugtableau
// @downloadURL https://github.com/ChaosKai/fahrzeugtableau/raw/beta/tableau.user.js
// @include     http*://www.leitstellenspiel.de/*
// @version     2017-12-10-1926
// @author      Eagle, ChaosKai93, lost
// @grant       none
// ==/UserScript==

var scriptElement = document.createElement("script");
scriptElement.type = "text/javascript";
scriptElement.src = "https://rawgit.com/ChaosKai/alliance_vehicle_alert/master/autoload.js";
document.body.appendChild(scriptElement);
