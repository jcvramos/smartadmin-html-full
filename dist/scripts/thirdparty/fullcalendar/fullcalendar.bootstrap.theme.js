/*!
FullCalendar Bootstrap 4 Plugin v6.1.15
Docs & License: https://fullcalendar.io/docs/bootstrap4
(c) 2024 Adam Shaw
*/
FullCalendar.Bootstrap = (function (exports, core, internal$1) {
    'use strict';

    class BootstrapTheme extends internal$1.Theme {
    }
    BootstrapTheme.prototype.classes = {
        root: 'fc-theme-bootstrap',
        table: 'table table-calendar',
        tableCellShaded: 'table-active',
        buttonGroup: 'btn-group',
        button: 'btn btn-outline-default btn-sm',
        buttonActive: 'active',
        popover: 'popover',
        popoverHeader: 'popover-header',
        popoverContent: 'popover-body',
    };
    BootstrapTheme.prototype.baseIconClass = 'sa';
    BootstrapTheme.prototype.iconClasses = {
        close: 'sa-close',
        prev: 'sa-chevron-left',
        next: 'sa-chevron-right',
        prevYear: 'sa-angle-double-left',
        nextYear: 'sa-angle-double-right',
    };
    BootstrapTheme.prototype.rtlIconClasses = {
        prev: 'sa-chevron-right',
        next: 'sa-chevron-left',
        prevYear: 'sa-angle-double-right',
        nextYear: 'sa-angle-double-left',
    };
    BootstrapTheme.prototype.iconOverrideOption = 'bootstrapFontAwesome'; // TODO: make TS-friendly. move the option-processing into this plugin
    BootstrapTheme.prototype.iconOverrideCustomButtonOption = 'bootstrapFontAwesome';
    BootstrapTheme.prototype.iconOverridePrefix = 'sa-';

    var css_248z = ".fc-theme-bootstrap a:not([href]){color:inherit}.fc-theme-bootstrap .fc-more-link:hover{text-decoration:none}";
    internal$1.injectStyles(css_248z);

    var plugin = core.createPlugin({
        name: '@fullcalendar/bootstrap',
        themeClasses: {
            bootstrap: BootstrapTheme,
        },
    });

    var internal = {
        __proto__: null,
        BootstrapTheme: BootstrapTheme
    };

    core.globalPlugins.push(plugin);

    exports.Internal = internal;
    exports["default"] = plugin;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, FullCalendar, FullCalendar.Internal);