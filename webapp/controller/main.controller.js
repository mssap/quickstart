sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageToast) {
        "use strict";

        return Controller.extend("bosch.co.quickstart.controller.main", {
            onInit: function () {

            },
            onPress: function () {
                MessageToast.show("Hello World!");
            }
        });
    });
