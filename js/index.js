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
    },
    expandir: function(datos){
        switch(datos){
            case "Pablo":
                window.location.href = "./index2.html"+ '#'+ 'Pablo Sanchez' + '#' + '698745123' + '#' + 'C/ Mayor' + '#'+ '+65º 37\' 20.11\", -52º 23\' 20\"' ;
                break;
            case "Ana":
                window.location.href = "./index2.html"+ '#'+ 'Ana Rodriguez' + '#' + '654987321' + '#' + 'C/ de Arriba' + '#'+ '+5º 41\' 78.11\", +6º 23\' 20\"' ;
                break;
            case "Pedro":
                window.location.href = "./index2.html"+ '#'+ 'Pedro Garcia' + '#' + '632457891' + '#' + 'Avenida Diagonal' + '#'+ '-55º 23\' 7.11\", +26º 65\' 11.2\"' ;
                break;
            case "Maria":
                window.location.href = "./index2.html"+ '#'+ 'Maria Dominguez' + '#' + '985236147' + '#' + 'Paseo de Sorpresa' + '#'+ '-11º 65\' 23.11\", +46º 23\' 20\"' ;
                break;
            
        }
        window.location.href = "./index2.html"+ '#'+datos;
    }
};