var root = this,
    proc = Npm.require('child_process');

root.Nginx = _.extend({
    reload: function() {
        proc.exec('/etc/init.d/nginx reload');
    }
}, Npm.require('nginx-conf'));
