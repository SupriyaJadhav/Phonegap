/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
/**
 * Created by supriya on 2/9/15.
 */
var flag=0;
var cnt=0;
$(document).ready(function()
{
    $(".list").click(function () {

        var vis1=$(".listMenu").css("visibility");

        if(vis1=="hidden") {
            $(".listMenu").css("visibility", "visible");
            //$(".lstMenu").css({"transition","width 5s"});
            $(".listMenu").animate({width: '90%'});
        }
        else
        {

            //$(".listMenu").animate({transition:"width 5s",width:"0%"});
            $(".listMenu").css({visibility:"hidden"});
        }

    });


    $(".user").click(function(){
        var vis2=$(".userMenu").css("visibility");
        if(vis2=="hidden") {
            $(".userMenu").css("visibility", "visible");
            $(".userMenu").animate({width: '70%'});
        }
        else
        {

            //$(".userMenu").animate({width: '70%'});
            $(".userMenu").css({visibility:"hidden"});

        }

    });

    $(".plusBtn").click(function(){
        var vis3=$(".starInfo").css("visibility");
        if(vis3=="hidden")
        {
            $(".starInfo").css("visibility", "visible");
            $(".plusBtn .glyphicon").removeClass(" glyphicon-plus").addClass("glyphicon-remove");
        }
        else
        {
            $(".starInfo").css("visibility", "hidden");
            $(".plusBtn .glyphicon").removeClass(" glyphicon-remove").addClass("glyphicon-plus");
        }
    });

});

