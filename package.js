Package.describe({
    summary: "DataTable - jQuery plugin for sortable, pagable data",
    name: "designveloper:datatables-bootstrap-3",
    version: "0.0.1",
    git: "https://github.com/Designveloper/meteor-datatables-bootstrap-3"
});

Package.on_use(function (api) {
  api.use('jquery@1.0.0', 'client');
  api.use('twbs:bootstrap@3.3.2', 'client');
  api.add_files([
    'lib/datatables.min.js',
    'lib/datatables.min.css',
  ], 'client');
});

Package.on_test( function(api) {
    api.use([
        'j4507:datatables-bootstrap-3',
        'test-helpers',
        'tinytest'
    ], ['client']);

    api.add_files("tests/test.js", ['client']);
});
