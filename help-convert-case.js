'use strict';

var dust = require('dustjs-helpers');

(function (dust) {

    dust.helpers.convert = function (chunk, context, bodies, params) {

        var str = dust.helpers.tap(params.str,chunk,context);
        var kase = params.case;

        switch(kase) {
            case "upper":
                str = str.toUpperCase();
                break;
            case "lower":
                str = str.toLowerCase();
                break;
            case "cap":
                str = str.charAt(0).toUpperCase() + str.slice(1);
                break;
        }

        return chunk.write(str);
    };

})(dust);