/**
 * Author: Mr.B
 * Date: 2017/7/7-17:20
 * Last Modified by: Nokey
 */
'use strict';

const path = require('path'),
      vendor_path = path.resolve(__dirname, '../vendor');

module.exports = {
    alias: {
        /**
         * Metronic-v4.1.0 Theme Plugins( PS: some plugins may be installed by npm, please check package.json!!! )
         */
        // Theme js & css
        "metronic": path.resolve(vendor_path, 'global/scripts/metronic.js'),
        "admin-layout": path.resolve(vendor_path, 'admin/layout4/scripts/layout.js'),
        "admin-quick-sidebar": path.resolve(vendor_path, 'admin/layout4/scripts/quick-sidebar.js'),
        "admin-demo": path.resolve(vendor_path, 'admin/layout4/scripts/demo.js'),
        "admin-index": path.resolve(vendor_path, 'admin/pages/scripts/index.js'),
        "admin-tasks": path.resolve(vendor_path, 'admin/pages/scripts/tasks.js'),
        "admin-tasks-style": path.resolve(vendor_path, 'admin/pages/css/tasks.css'),
        "admin-layout-style": path.resolve(vendor_path, 'admin/layout4/css/layout.css'),
        "admin-light-style": path.resolve(vendor_path, 'admin/layout4/css/themes/light.css'),
        "admin-spin": path.resolve(vendor_path, 'admin/pages/scripts/spin.js'),
        "admin-components-pickers": path.resolve(vendor_path, 'admin/pages/scripts/components-pickers.js'),

        // Global CSS
        "plugins-style": path.resolve(vendor_path, 'global/css/plugins.css'),
        "font-awesome": path.resolve(vendor_path, 'global/plugins/font-awesome/css/font-awesome.css'),
        "components-rounded-style": path.resolve(vendor_path, 'global/css/components-rounded.css'),
        "simple-line-icons-style": path.resolve(vendor_path, 'global/plugins/simple-line-icons/simple-line-icons.min.css'),

        // Fullcalendar
        "fullcalendar": path.resolve(vendor_path, 'global/plugins/fullcalendar/fullcalendar.min.js'),
        "fullcalendar-style": path.resolve(vendor_path, 'global/plugins/fullcalendar/fullcalendar.min.css'),

        // jQuery-UI
        "jquery-ui": path.resolve(vendor_path, 'global/plugins/jquery-ui/jquery-ui.min.js'),
        "jquery-ui-style": path.resolve(vendor_path, 'global/plugins/jquery-ui/jquery-ui.min.css'),

        // Bootstrap
        "bootstrap": path.resolve(vendor_path, 'bootstrap/js/bootstrap.js'),
        "bootstrap-style": path.resolve(vendor_path, 'bootstrap/css/bootstrap.css'),
        "bootstrap-datetimepicker": path.resolve(vendor_path, 'bootstrap-datetimepicker/js/bootstrap-datetimepicker.js'),
        "bootstrap-datetimepicker-style": path.resolve(vendor_path, 'bootstrap-datetimepicker/css/bootstrap-datetimepicker.css'),
        "bootstrap-modalmanager": path.resolve(vendor_path, 'global/plugins/bootstrap-modal/js/bootstrap-modalmanager.js'),
        "bootstrap-modal": path.resolve(vendor_path, 'global/plugins/bootstrap-modal/js/bootstrap-modal.js'),
        "bootstrap-modal-bs3-style": path.resolve(vendor_path, 'global/plugins/bootstrap-modal/css/bootstrap-modal-bs3patch.css'),
        "bootstrap-modal-style": path.resolve(vendor_path, 'global/plugins/bootstrap-modal/css/bootstrap-modal.css'),
        "bootstrap-hover-dropdown": path.resolve(vendor_path, 'global/plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js'),
        "bootstrap-toastr": path.resolve(vendor_path, 'global/plugins/bootstrap-toastr/toastr.min.js'),
        "bootstrap-toastr-style": path.resolve(vendor_path, 'global/plugins/bootstrap-toastr/toastr.min.css'),
        "bootstrap-fileinput": path.resolve(vendor_path, 'global/plugins/bootstrap-fileinput-4.3.3/js/fileinput.min.js'),
        "bootstrap-fileinput-style": path.resolve(vendor_path, 'global/plugins/bootstrap-fileinput-4.3.3/css/fileinput.min.css'),
        "bootstrap-switch": path.resolve(vendor_path, 'global/plugins/bootstrap-switch/js/bootstrap-switch.min.js'),
        "bootstrap-switch-style": path.resolve(vendor_path, 'global/plugins/bootstrap-switch/css/bootstrap-switch.min.css'),

        // jQuery plugins
        "jquery-slimscroll": path.resolve(vendor_path, 'global/plugins/jquery-slimscroll/jquery.slimscroll.min.js'),
        "jquery.blockui": path.resolve(vendor_path, 'global/plugins/jquery.blockui.min.js'),
        "jquery.cokie": path.resolve(vendor_path, 'global/plugins/jquery.cokie.min.js'),
        "uniform": path.resolve(vendor_path, 'global/plugins/uniform/jquery.uniform.min.js'),
        "uniform-style": path.resolve(vendor_path, 'global/plugins/uniform/css/uniform.default.css'),

        // JStree
        "jstree": path.resolve(vendor_path, 'jsTree/dist/jstree.js'),
        "jstree-style": path.resolve(vendor_path, 'jsTree/dist/themes/default/style.min.css'),

        // Datatable
        "jquery-dataTables": path.resolve(vendor_path, 'global/plugins/datatables/media/js/jquery.dataTables.min.js'),
        "bootstrap-dataTables": path.resolve(vendor_path, 'global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.js'),
        "dataTables-style": path.resolve(vendor_path, 'global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.css'),

        /**
         * Custom Plugins
         */
        // UMEditor
        "umeditor-config": path.resolve(vendor_path, 'umeditor/umeditor.config.js'),
        "umeditor": path.resolve(vendor_path, 'umeditor/umeditor.min.js'),
        "umeditor-en": path.resolve(vendor_path, 'umeditor/lang/en/en.js'),
        "umeditor-style": path.resolve(vendor_path, 'umeditor/themes/default/css/umeditor.css'),

        // Article Diff
        "jquery.codemirror": path.resolve(vendor_path, 'global/plugins/jquery-diff/codemirror.min.js'),
        "diff-codemirror-style": path.resolve(vendor_path, 'global/plugins/jquery-diff/css/codemirror.css'),
        "jquery.mergely": path.resolve(vendor_path, 'global/plugins/jquery-diff/mergely.min.js'),
        "diff-mergely-style": path.resolve(vendor_path, 'global/plugins/jquery-diff/css/mergely.css'),
        "diff_match_patch": path.resolve(vendor_path, 'global/plugins/diff_match_patch.js'),

        // Sina Emotion
        "sina-emotion": path.resolve(vendor_path, 'global/plugins/sina-emotion/jquery-sinaEmotion-2.1.0.min.js'),
        "sina-emotion-style": path.resolve(vendor_path, 'global/plugins/sina-emotion/jquery-sinaEmotion-2.1.0.min.css'),

        // JWplayer
        "jwplayer": path.resolve(vendor_path, 'jwplayer/jwplayer.js')
    },

    extensions: ['.js', '.styl', '.css', '.jpg', '.gif', '.png'],

    modules: [
        path.resolve('./src/resources/stylus'),
        path.resolve('./src/resources/modules'),
        path.resolve('./src/resources/images'),
        path.resolve('./node_modules')
    ]
};