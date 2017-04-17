/* dfgsdfgdg
 */
/*jshint strict:false */
/* jshint node: true */
"use strict";
// Pedimos la memoria usada
var mem = process.memoryUsage();
// Calcularlo en Kb
var memKb = {
    rss: parseInt(mem.rss / 1024),
    heapTotal: parseInt(mem.heapTotal / 1024),
    heapUsed: parseInt(mem.heapUsed / 1024),
    external: parseInt(mem.external / 1024),
};
primeraFuncion();

function primeraFuncion() {
    console.log(memKb);
    // process.exit(1);
    process.chdir("../");
}

function segundaFuncion() {
    console.log(process.cwd());
    // Información del entorno de usario
    console.log(process.env);
}

function terceraFuncion() {
    primeraFuncion();
    segundaFuncion();

    // Tiempo de uso de la CPU
    var startUsage = process.cpuUsage();

    var now = Date.now();
    while (Date.now() - now < 500);
    // Tiempo pasado en micro segundos
    console.log(process.cpuUsage(startUsage));
}
terceraFuncion();
//-------------------
"use strict";
// Pedimos la memoria usada
let mem = process.memoryUsage();
// Calcularlo en Kb
let memKb = {
    rss: parseInt(mem.rss / 1024),
    heapTotal: parseInt(mem.heapTotal / 1024), //Tamañp de la pila
    heapUsed: parseInt(mem.heapUsed / 1024), //Tamaño de la pila usada
    external: parseInt(mem.external / 1024),
}

function primeraFuncion() {
    console.log(memKb);
    // process.exit(1);
    process.chdir("../");
}

function segundaFuncion() {
    console.log(process.cwd()); //Directorio actual usado
    var unVariablePorsterior = "unVariablePorsterior";
    // Información del entorno de usario
    console.log(process.env);
}

function terceraFuncion() {
    primeraFuncion();
    segundaFuncion();

    // Tiempo de uso de la CPU
    const startUsage = process.cpuUsage(); //Uso de cpi

    const now = Date.now();
    while (Date.now() - now < 500);
    // Tiempo pasado en micro segundos
    console.log(process.cpuUsage(startUsage)); //Tiempo que lleva de ejecucion del proceso
}
terceraFuncion();
//-------------------
/*jshint strict:false */
/* jshint node: true */
"use strict";
// Pedimos la memoria usada
var mem = process.memoryUsage();
// Calcularlo en Kb
var memKb = {
    rss: parseInt(mem.rss / 1024),
    heapTotal: parseInt(mem.heapTotal / 1024),
    heapUsed: parseInt(mem.heapUsed / 1024),
    external: parseInt(mem.external / 1024),
};

function primeraFuncion() {
    console.log(memKb);
    // process.exit(1);
    process.chdir("../");
}

function segundaFuncion() {
    console.log(process.cwd());
    // Información del entorno de usario
    console.log(process.env);
}

function terceraFuncion() {
    primeraFuncion();
    segundaFuncion();

    // Tiempo de uso de la CPU
    var startUsage = process.cpuUsage();

    var now = Date.now();
    while (Date.now() - now < 500);
    // Tiempo pasado en micro segundos
    console.log(process.cpuUsage(startUsage));
}
terceraFuncion();
//-------------------
/*!
 * jQuery Migrate - v1.2.1 - 2013-05-08
 * https://github.com/jquery/jquery-migrate
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors; Licensed MIT
 */
(function(jQuery, window, undefined) {
    // See http://bugs.jquery.com/ticket/13335
    // "use strict";

    var warnedAbout = {};
    // List of warnings already given; public read only
    jQuery.migrateWarnings = [];

    // Set to true to prevent console output; migrateWarnings still maintained
    // jQuery.migrateMute = false;

    // Show a message on the console so devs know we're active
    if (!jQuery.migrateMute && window.console && window.console.log) {
        window.console.log("JQMIGRATE: Logging is active");
    }

    // Set to false to disable traces that appear with warnings
    if (jQuery.migrateTrace === undefined) {
        jQuery.migrateTrace = true;
    }

    // Forget any warnings we've already given; public
    jQuery.migrateReset = function() {
        warnedAbout = {};
        jQuery.migrateWarnings.length = 0;
    };

    function migrateWarn(msg) {
        var console = window.console;
        if (!warnedAbout[msg]) {
            warnedAbout[msg] = true;
            jQuery.migrateWarnings.push(msg);
            if (console && console.warn && !jQuery.migrateMute) {
                console.warn("JQMIGRATE: " + msg);
                if (jQuery.migrateTrace && console.trace) {
                    console.trace();
                }
            }
        }
    }

    function migrateWarnProp(obj, prop, value, msg) {
        if (Object.defineProperty) {
            // On ES5 browsers (non-oldIE), warn if the code tries to get prop;
            // allow property to be overwritten in case some other plugin wants it
            try {
                Object.defineProperty(obj, prop, {
                    configurable: true,
                    enumerable: true,
                    get: function() {
                        migrateWarn(msg);
                        return value;
                    },
                    set: function(newValue) {
                        migrateWarn(msg);
                        value = newValue;
                    }
                });
                return;
            } catch (err) {
                // IE8 is a dope about Object.defineProperty, can't warn there
            }
        }

        // Non-ES5 (or broken) browser; just set the property
        jQuery._definePropertyBroken = true;
        obj[prop] = value;
    }

    if (document.compatMode === "BackCompat") {
        // jQuery has never supported or tested Quirks Mode
        migrateWarn("jQuery is not compatible with Quirks Mode");
    }


    var attrFn = jQuery("<input/>", { size: 1 }).attr("size") && jQuery.attrFn,
        oldAttr = jQuery.attr,
        valueAttrGet = jQuery.attrHooks.value && jQuery.attrHooks.value.get ||
        function() { return null; },
        valueAttrSet = jQuery.attrHooks.value && jQuery.attrHooks.value.set ||
        function() { return undefined; },
        rnoType = /^(?:input|button)$/i,
        rnoAttrNodeType = /^[238]$/,
        rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        ruseDefault = /^(?:checked|selected)$/i;

    // jQuery.attrFn
    migrateWarnProp(jQuery, "attrFn", attrFn || {}, "jQuery.attrFn is deprecated");

    jQuery.attr = function(elem, name, value, pass) {
        var lowerName = name.toLowerCase(),
            nType = elem && elem.nodeType;

        if (pass) {
            // Since pass is used internally, we only warn for new jQuery
            // versions where there isn't a pass arg in the formal params
            if (oldAttr.length < 4) {
                migrateWarn("jQuery.fn.attr( props, pass ) is deprecated");
            }
            if (elem && !rnoAttrNodeType.test(nType) &&
                (attrFn ? name in attrFn : jQuery.isFunction(jQuery.fn[name]))) {
                return jQuery(elem)[name](value);
            }
        }

        // Warn if user tries to set `type`, since it breaks on IE 6/7/8; by checking
        // for disconnected elements we don't warn on $( "<button>", { type: "button" } ).
        if (name === "type" && value !== undefined && rnoType.test(elem.nodeName) && elem.parentNode) {
            migrateWarn("Can't change the 'type' of an input or button in IE 6/7/8");
        }

        // Restore boolHook for boolean property/attribute synchronization
        if (!jQuery.attrHooks[lowerName] && rboolean.test(lowerName)) {
            jQuery.attrHooks[lowerName] = {
                get: function(elem, name) {
                    // Align boolean attributes with corresponding properties
                    // Fall back to attribute presence where some booleans are not supported
                    var attrNode,
                        property = jQuery.prop(elem, name);
                    return property === true || typeof property !== "boolean" &&
                        (attrNode = elem.getAttributeNode(name)) && attrNode.nodeValue !== false ?

                        name.toLowerCase() :
                        undefined;
                },
                set: function(elem, value, name) {
                    var propName;
                    if (value === false) {
                        // Remove boolean attributes when set to false
                        jQuery.removeAttr(elem, name);
                    } else {
                        // value is true since we know at this point it's type boolean and not false
                        // Set boolean attributes to the same name and set the DOM property
                        propName = jQuery.propFix[name] || name;
                        if (propName in elem) {
                            // Only set the IDL specifically if it already exists on the element
                            elem[propName] = true;
                        }

                        elem.setAttribute(name, name.toLowerCase());
                    }
                    return name;
                }
            };

            // Warn only for attributes that can remain distinct from their properties post-1.9
            if (ruseDefault.test(lowerName)) {
                migrateWarn("jQuery.fn.attr('" + lowerName + "') may use property instead of attribute");
            }
        }

        return oldAttr.call(jQuery, elem, name, value);
    };

    // attrHooks: value
    jQuery.attrHooks.value = {
        get: function(elem, name) {
            var nodeName = (elem.nodeName || "").toLowerCase();
            if (nodeName === "button") {
                return valueAttrGet.apply(this, arguments);
            }
            if (nodeName !== "input" && nodeName !== "option") {
                migrateWarn("jQuery.fn.attr('value') no longer gets properties");
            }
            return name in elem ?
                elem.value :
                null;
        },
        set: function(elem, value) {
            var nodeName = (elem.nodeName || "").toLowerCase();
            if (nodeName === "button") {
                return valueAttrSet.apply(this, arguments);
            }
            if (nodeName !== "input" && nodeName !== "option") {
                migrateWarn("jQuery.fn.attr('value', val) no longer sets properties");
            }
            // Does not return so that setAttribute is also used
            elem.value = value;
        }
    };


    var matched, browser,
        oldInit = jQuery.fn.init,
        oldParseJSON = jQuery.parseJSON,
        // Note: XSS check is done below after string is trimmed
        rquickExpr = /^([^<]*)(<[\w\W]+>)([^>]*)$/;

    // $(html) "looks like html" rule change
    jQuery.fn.init = function(selector, context, rootjQuery) {
        var match;

        if (selector && typeof selector === "string" && !jQuery.isPlainObject(context) &&
            (match = rquickExpr.exec(jQuery.trim(selector))) && match[0]) {
            // This is an HTML string according to the "old" rules; is it still?
            if (selector.charAt(0) !== "<") {
                migrateWarn("$(html) HTML strings must start with '<' character");
            }
            if (match[3]) {
                migrateWarn("$(html) HTML text after last tag is ignored");
            }
            // Consistently reject any HTML-like string starting with a hash (#9521)
            // Note that this may break jQuery 1.6.x code that otherwise would work.
            if (match[0].charAt(0) === "#") {
                migrateWarn("HTML string cannot start with a '#' character");
                jQuery.error("JQMIGRATE: Invalid selector string (XSS)");
            }
            // Now process using loose rules; let pre-1.8 play too
            if (context && context.context) {
                // jQuery object as context; parseHTML expects a DOM object
                context = context.context;
            }
            if (jQuery.parseHTML) {
                return oldInit.call(this, jQuery.parseHTML(match[2], context, true),
                    context, rootjQuery);
            }
        }
        return oldInit.apply(this, arguments);
    };
    jQuery.fn.init.prototype = jQuery.fn;

    // Let $.parseJSON(falsy_value) return null
    jQuery.parseJSON = function(json) {
        if (!json && json !== null) {
            migrateWarn("jQuery.parseJSON requires a valid JSON string");
            return null;
        }
        return oldParseJSON.apply(this, arguments);
    };

    jQuery.uaMatch = function(ua) {
        ua = ua.toLowerCase();

        var match = /(chrome)[ \/]([\w.]+)/.exec(ua) ||
            /(webkit)[ \/]([\w.]+)/.exec(ua) ||
            /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
            /(msie) ([\w.]+)/.exec(ua) ||
            ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];

        return {
            browser: match[1] || "",
            version: match[2] || "0"
        };
    };

    // Don't clobber any existing jQuery.browser in case it's different
    if (!jQuery.browser) {
        matched = jQuery.uaMatch(navigator.userAgent);
        browser = {};

        if (matched.browser) {
            browser[matched.browser] = true;
            browser.version = matched.version;
        }

        // Chrome is Webkit, but Webkit is also Safari.
        if (browser.chrome) {
            browser.webkit = true;
        } else if (browser.webkit) {
            browser.safari = true;
        }

        jQuery.browser = browser;
    }

    // Warn if the code tries to get jQuery.browser
    migrateWarnProp(jQuery, "browser", jQuery.browser, "jQuery.browser is deprecated");

    jQuery.sub = function() {
        function jQuerySub(selector, context) {
            return new jQuerySub.fn.init(selector, context);
        }
        jQuery.extend(true, jQuerySub, this);
        jQuerySub.superclass = this;
        jQuerySub.fn = jQuerySub.prototype = this();
        jQuerySub.fn.constructor = jQuerySub;
        jQuerySub.sub = this.sub;
        jQuerySub.fn.init = function init(selector, context) {
            if (context && context instanceof jQuery && !(context instanceof jQuerySub)) {
                context = jQuerySub(context);
            }

            return jQuery.fn.init.call(this, selector, context, rootjQuerySub);
        };
        jQuerySub.fn.init.prototype = jQuerySub.fn;
        var rootjQuerySub = jQuerySub(document);
        migrateWarn("jQuery.sub() is deprecated");
        return jQuerySub;
    };


    // Ensure that $.ajax gets the new parseJSON defined in core.js
    jQuery.ajaxSetup({
        converters: {
            "text json": jQuery.parseJSON
        }
    });


    var oldFnData = jQuery.fn.data;

    jQuery.fn.data = function(name) {
        var ret, evt,
            elem = this[0];

        // Handles 1.7 which has this behavior and 1.8 which doesn't
        if (elem && name === "events" && arguments.length === 1) {
            ret = jQuery.data(elem, name);
            evt = jQuery._data(elem, name);
            if ((ret === undefined || ret === evt) && evt !== undefined) {
                migrateWarn("Use of jQuery.fn.data('events') is deprecated");
                return evt;
            }
        }
        return oldFnData.apply(this, arguments);
    };


    var rscriptType = /\/(java|ecma)script/i,
        oldSelf = jQuery.fn.andSelf || jQuery.fn.addBack;

    jQuery.fn.andSelf = function() {
        migrateWarn("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()");
        return oldSelf.apply(this, arguments);
    };

    // Since jQuery.clean is used internally on older versions, we only shim if it's missing
    if (!jQuery.clean) {
        jQuery.clean = function(elems, context, fragment, scripts) {
            // Set context per 1.8 logic
            context = context || document;
            context = !context.nodeType && context[0] || context;
            context = context.ownerDocument || context;

            migrateWarn("jQuery.clean() is deprecated");

            var i, elem, handleScript, jsTags,
                ret = [];

            jQuery.merge(ret, jQuery.buildFragment(elems, context).childNodes);

            // Complex logic lifted directly from jQuery 1.8
            if (fragment) {
                // Special handling of each script element
                handleScript = function(elem) {
                    // Check if we consider it executable
                    if (!elem.type || rscriptType.test(elem.type)) {
                        // Detach the script and store it in the scripts array (if provided) or the fragment
                        // Return truthy to indicate that it has been handled
                        return scripts ?
                            scripts.push(elem.parentNode ? elem.parentNode.removeChild(elem) : elem) :
                            fragment.appendChild(elem);
                    }
                };

                for (i = 0;
                    (elem = ret[i]) != null; i++) {
                    // Check if we're done after handling an executable script
                    if (!(jQuery.nodeName(elem, "script") && handleScript(elem))) {
                        // Append to fragment and handle embedded scripts
                        fragment.appendChild(elem);
                        if (typeof elem.getElementsByTagName !== "undefined") {
                            // handleScript alters the DOM, so use jQuery.merge to ensure snapshot iteration
                            jsTags = jQuery.grep(jQuery.merge([], elem.getElementsByTagName("script")), handleScript);

                            // Splice the scripts into ret after their former ancestor and advance our index beyond them
                            ret.splice.apply(ret, [i + 1, 0].concat(jsTags));
                            i += jsTags.length;
                        }
                    }
                }
            }

            return ret;
        };
    }

    var eventAdd = jQuery.event.add,
        eventRemove = jQuery.event.remove,
        eventTrigger = jQuery.event.trigger,
        oldToggle = jQuery.fn.toggle,
        oldLive = jQuery.fn.live,
        oldDie = jQuery.fn.die,
        ajaxEvents = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
        rajaxEvent = new RegExp("\\b(?:" + ajaxEvents + ")\\b"),
        rhoverHack = /(?:^|\s)hover(\.\S+|)\b/,
        hoverHack = function(events) {
            if (typeof(events) !== "string" || jQuery.event.special.hover) {
                return events;
            }
            if (rhoverHack.test(events)) {
                migrateWarn("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'");
            }
            return events && events.replace(rhoverHack, "mouseenter$1 mouseleave$1");
        };

    // Event props removed in 1.9, put them back if needed; no practical way to warn them
    if (jQuery.event.props && jQuery.event.props[0] !== "attrChange") {
        jQuery.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement");
    }

    // Undocumented jQuery.event.handle was "deprecated" in jQuery 1.7
    if (jQuery.event.dispatch) {
        migrateWarnProp(jQuery.event, "handle", jQuery.event.dispatch, "jQuery.event.handle is undocumented and deprecated");
    }

    // Support for 'hover' pseudo-event and ajax event warnings
    jQuery.event.add = function(elem, types, handler, data, selector) {
        if (elem !== document && rajaxEvent.test(types)) {
            migrateWarn("AJAX events should be attached to document: " + types);
        }
        eventAdd.call(this, elem, hoverHack(types || ""), handler, data, selector);
    };
    jQuery.event.remove = function(elem, types, handler, selector, mappedTypes) {
        eventRemove.call(this, elem, hoverHack(types) || "", handler, selector, mappedTypes);
    };

    jQuery.fn.error = function() {
        var args = Array.prototype.slice.call(arguments, 0);
        migrateWarn("jQuery.fn.error() is deprecated");
        args.splice(0, 0, "error");
        if (arguments.length) {
            return this.bind.apply(this, args);
        }
        // error event should not bubble to window, although it does pre-1.7
        this.triggerHandler.apply(this, args);
        return this;
    };

    jQuery.fn.toggle = function(fn, fn2) {

        // Don't mess with animation or css toggles
        if (!jQuery.isFunction(fn) || !jQuery.isFunction(fn2)) {
            return oldToggle.apply(this, arguments);
        }
        migrateWarn("jQuery.fn.toggle(handler, handler...) is deprecated");

        // Save reference to arguments for access in closure
        var args = arguments,
            guid = fn.guid || jQuery.guid++,
            i = 0,
            toggler = function(event) {
                // Figure out which function to execute
                var lastToggle = (jQuery._data(this, "lastToggle" + fn.guid) || 0) % i;
                jQuery._data(this, "lastToggle" + fn.guid, lastToggle + 1);

                // Make sure that clicks stop
                event.preventDefault();

                // and execute the function
                return args[lastToggle].apply(this, arguments) || false;
            };

        // link all the functions, so any of them can unbind this click handler
        toggler.guid = guid;
        while (i < args.length) {
            args[i++].guid = guid;
        }

        return this.click(toggler);
    };

    jQuery.fn.live = function(types, data, fn) {
        migrateWarn("jQuery.fn.live() is deprecated");
        if (oldLive) {
            return oldLive.apply(this, arguments);
        }
        jQuery(this.context).on(types, this.selector, data, fn);
        return this;
    };

    jQuery.fn.die = function(types, fn) {
        migrateWarn("jQuery.fn.die() is deprecated");
        if (oldDie) {
            return oldDie.apply(this, arguments);
        }
        jQuery(this.context).off(types, this.selector || "**", fn);
        return this;
    };

    // Turn global events into document-triggered events
    jQuery.event.trigger = function(event, data, elem, onlyHandlers) {
        if (!elem && !rajaxEvent.test(event)) {
            migrateWarn("Global events are undocumented and deprecated");
        }
        return eventTrigger.call(this, event, data, elem || document, onlyHandlers);
    };
    jQuery.each(ajaxEvents.split("|"),
        function(_, name) {
            jQuery.event.special[name] = {
                setup: function() {
                    var elem = this;

                    // The document needs no shimming; must be !== for oldIE
                    if (elem !== document) {
                        jQuery.event.add(document, name + "." + jQuery.guid, function() {
                            jQuery.event.trigger(name, null, elem, true);
                        });
                        jQuery._data(this, name, jQuery.guid++);
                    }
                    return false;
                },
                teardown: function() {
                    if (this !== document) {
                        jQuery.event.remove(document, name + "." + jQuery._data(this, name));
                    }
                    return false;
                }
            };
        }
    );


})(jQuery, window);
//-------------------
!function(a,b,c){function d(c){var d=b.console;f[c]||(f[c]=!0,a.migrateWarnings.push(c),d&&d.warn&&!a.migrateMute&&(d.warn("JQMIGRATE: "+c),a.migrateTrace&&d.trace&&d.trace()))}function e(b,c,e,f){if(Object.defineProperty)try{return void Object.defineProperty(b,c,{configurable:!0,enumerable:!0,get:function(){return d(f),e},set:function(a){d(f),e=a}})}catch(a){}a._definePropertyBroken=!0,b[c]=e}var f={};a.migrateWarnings=[],!a.migrateMute&&b.console&&b.console.log&&b.console.log("JQMIGRATE: Logging is active"),void 0===a.migrateTrace&&(a.migrateTrace=!0),a.migrateReset=function(){f={},a.migrateWarnings.length=0},"BackCompat"===document.compatMode&&d("jQuery is not compatible with Quirks Mode");var g=a("<input/>",{size:1}).attr("size")&&a.attrFn,h=a.attr,i=a.attrHooks.value&&a.attrHooks.value.get||function(){return null},j=a.attrHooks.value&&a.attrHooks.value.set||function(){},k=/^(?:input|button)$/i,l=/^[238]$/,m=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,n=/^(?:checked|selected)$/i;e(a,"attrFn",g||{},"jQuery.attrFn is deprecated"),a.attr=function(b,c,e,f){var i=c.toLowerCase(),j=b&&b.nodeType;return f&&(h.length<4&&d("jQuery.fn.attr( props, pass ) is deprecated"),b&&!l.test(j)&&(g?c in g:a.isFunction(a.fn[c])))?a(b)[c](e):("type"===c&&void 0!==e&&k.test(b.nodeName)&&b.parentNode&&d("Can't change the 'type' of an input or button in IE 6/7/8"),!a.attrHooks[i]&&m.test(i)&&(a.attrHooks[i]={get:function(b,c){var d,e=a.prop(b,c);return!0===e||"boolean"!=typeof e&&(d=b.getAttributeNode(c))&&!1!==d.nodeValue?c.toLowerCase():void 0},set:function(b,c,d){var e;return!1===c?a.removeAttr(b,d):(e=a.propFix[d]||d,e in b&&(b[e]=!0),b.setAttribute(d,d.toLowerCase())),d}},n.test(i)&&d("jQuery.fn.attr('"+i+"') may use property instead of attribute")),h.call(a,b,c,e))},a.attrHooks.value={get:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?i.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value') no longer gets properties"),b in a?a.value:null)},set:function(a,b){var c=(a.nodeName||"").toLowerCase();if("button"===c)return j.apply(this,arguments);"input"!==c&&"option"!==c&&d("jQuery.fn.attr('value', val) no longer sets properties"),a.value=b}};var o,p,q=a.fn.init,r=a.parseJSON,s=/^([^<]*)(<[\w\W]+>)([^>]*)$/;a.fn.init=function(b,c,e){var f;return b&&"string"==typeof b&&!a.isPlainObject(c)&&(f=s.exec(a.trim(b)))&&f[0]&&("<"!==b.charAt(0)&&d("$(html) HTML strings must start with '<' character"),f[3]&&d("$(html) HTML text after last tag is ignored"),"#"===f[0].charAt(0)&&(d("HTML string cannot start with a '#' character"),a.error("JQMIGRATE: Invalid selector string (XSS)")),c&&c.context&&(c=c.context),a.parseHTML)?q.call(this,a.parseHTML(f[2],c,!0),c,e):q.apply(this,arguments)},a.fn.init.prototype=a.fn,a.parseJSON=function(a){return a||null===a?r.apply(this,arguments):(d("jQuery.parseJSON requires a valid JSON string"),null)},a.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a.browser||(o=a.uaMatch(navigator.userAgent),p={},o.browser&&(p[o.browser]=!0,p.version=o.version),p.chrome?p.webkit=!0:p.webkit&&(p.safari=!0),a.browser=p),e(a,"browser",a.browser,"jQuery.browser is deprecated"),a.sub=function(){function b(a,c){return new b.fn.init(a,c)}a.extend(!0,b,this),b.superclass=this,b.fn=b.prototype=this(),b.fn.constructor=b,b.sub=this.sub,b.fn.init=function(d,e){return e&&e instanceof a&&!(e instanceof b)&&(e=b(e)),a.fn.init.call(this,d,e,c)},b.fn.init.prototype=b.fn;var c=b(document);return d("jQuery.sub() is deprecated"),b},a.ajaxSetup({converters:{"text json":a.parseJSON}});var t=a.fn.data;a.fn.data=function(b){var c,e,f=this[0];return!f||"events"!==b||1!==arguments.length||(c=a.data(f,b),e=a._data(f,b),void 0!==c&&c!==e||void 0===e)?t.apply(this,arguments):(d("Use of jQuery.fn.data('events') is deprecated"),e)};var u=/\/(java|ecma)script/i,v=a.fn.andSelf||a.fn.addBack;a.fn.andSelf=function(){return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),v.apply(this,arguments)},a.clean||(a.clean=function(b,c,e,f){c=c||document,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,d("jQuery.clean() is deprecated");var g,h,i,j,k=[];if(a.merge(k,a.buildFragment(b,c).childNodes),e)for(i=function(a){if(!a.type||u.test(a.type))return f?f.push(a.parentNode?a.parentNode.removeChild(a):a):e.appendChild(a)},g=0;null!=(h=k[g]);g++)a.nodeName(h,"script")&&i(h)||(e.appendChild(h),void 0!==h.getElementsByTagName&&(j=a.grep(a.merge([],h.getElementsByTagName("script")),i),k.splice.apply(k,[g+1,0].concat(j)),g+=j.length));return k});var w=a.event.add,x=a.event.remove,y=a.event.trigger,z=a.fn.toggle,A=a.fn.live,B=a.fn.die,C="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",D=new RegExp("\\b(?:"+C+")\\b"),E=/(?:^|\s)hover(\.\S+|)\b/,F=function(b){return"string"!=typeof b||a.event.special.hover?b:(E.test(b)&&d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),b&&b.replace(E,"mouseenter$1 mouseleave$1"))};a.event.props&&"attrChange"!==a.event.props[0]&&a.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),a.event.dispatch&&e(a.event,"handle",a.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),a.event.add=function(a,b,c,e,f){a!==document&&D.test(b)&&d("AJAX events should be attached to document: "+b),w.call(this,a,F(b||""),c,e,f)},a.event.remove=function(a,b,c,d,e){x.call(this,a,F(b)||"",c,d,e)},a.fn.error=function(){var a=Array.prototype.slice.call(arguments,0);return d("jQuery.fn.error() is deprecated"),a.splice(0,0,"error"),arguments.length?this.bind.apply(this,a):(this.triggerHandler.apply(this,a),this)},a.fn.toggle=function(b,c){if(!a.isFunction(b)||!a.isFunction(c))return z.apply(this,arguments);d("jQuery.fn.toggle(handler, handler...) is deprecated");var e=arguments,f=b.guid||a.guid++,g=0,h=function(c){var d=(a._data(this,"lastToggle"+b.guid)||0)%g;return a._data(this,"lastToggle"+b.guid,d+1),c.preventDefault(),e[d].apply(this,arguments)||!1};for(h.guid=f;g<e.length;)e[g++].guid=f;return this.click(h)},a.fn.live=function(b,c,e){return d("jQuery.fn.live() is deprecated"),A?A.apply(this,arguments):(a(this.context).on(b,this.selector,c,e),this)},a.fn.die=function(b,c){return d("jQuery.fn.die() is deprecated"),B?B.apply(this,arguments):(a(this.context).off(b,this.selector||"**",c),this)},a.event.trigger=function(a,b,c,e){return c||D.test(a)||d("Global events are undocumented and deprecated"),y.call(this,a,b,c||document,e)},a.each(C.split("|"),function(b,c){a.event.special[c]={setup:function(){var b=this;return b!==document&&(a.event.add(document,c+"."+a.guid,function(){a.event.trigger(c,null,b,!0)}),a._data(this,c,a.guid++)),!1},teardown:function(){return this!==document&&a.event.remove(document,c+"."+a._data(this,c)),!1}}})}(jQuery,window);
//-------------------
"use strict";var mem=process.memoryUsage();var memKb={rss:parseInt(mem.rss/1024),heapTotal:parseInt(mem.heapTotal/1024),heapUsed:parseInt(mem.heapUsed/1024),external:parseInt(mem.external/1024)};function primeraFuncion(){console.log(memKb);process.chdir("../")}function segundaFuncion(){console.log(process.cwd());console.log(process.env)}function terceraFuncion(){primeraFuncion();segundaFuncion();var startUsage=process.cpuUsage();var now=Date.now();while(Date.now()-now<500);console.log(process.cpuUsage(startUsage))}terceraFuncion();
//-------------------
module.exports = function(grunt) {

    let configuracion = {
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            min: {
                src: '<%= pkg.name %>.js', //Ponemos que queremos acceder al fichero pkg y a la propiedad name
                dest: '<%= pkg.name%>.min.js' //Este será el fichero destino minificado
            }
        },
        watch: {
            scripts: {
                files: ["./*.js"], //fichero actual donde todos los ficheros que acaben el js
                tasks: ["uglify"], //cada vez que se cambia un fichero se ejecuta la tarea uglify
                options: {
                    spawn: false
                }
            }
        },
        concat: { //Para concatenar ficheros en uno solo
            options: {
                separator: "\n//-------------------\n"
            },
            dist: {
                src: ["./*.js"],
                dest: '<%= pkg.name%>.todo.js'
            }
        }
    };

    grunt.initConfig(configuracion);
    grunt.loadNpmTasks('grunt-contrib-uglify'); //Cargamos el plugin instalado
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('comprime', ['uglify']); //Registramos la tarea 
    //grunt.registerTask('minificar', ['uglify']); //Registramos la tarea minificar y se llama en consola con... //grunt minificar
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('concatenar', ['concat']);

    //Gestion de eventos
    function enUnCambio(accion, rutaFichero, destino) {
        grunt.log.writeln(destino + ": " + rutaFichero + " tiene " + accion);
    }

    grunt.event.on("watch", enUnCambio); //Cuando se ejecuta la tarea watch, se llama a la funcion enUnCambio

    function enConcatenar(accion, rutaFichero, destino) {
        grunt.log.writeln("Se ha concatenado todos los ficheros js");
        grunt.log.writeln(destino + ": " + rutaFichero + " tiene " + accion);
    }

    grunt.event.on("concat", enConcatenar);
};