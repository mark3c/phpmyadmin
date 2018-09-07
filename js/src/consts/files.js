/**
 * List of JS files need to be loaded at the time of initial page load.
 * Eg. For server_privileges.php, server_privileges.js is required
 */

/**
 * @type {Object} files
 */
const PhpToJsFileMapping = {
    global: [
        'error_report',
        'config',
        'navigation',
        'page_settings',
        'shortcuts_handler',
        'functions',
        'indexes',
        'key_handler',
        'cross_framing_protection'
    ],
    server_privileges: ['server_privileges'],
    server_databases: ['server_databases'],
    server_status_advisor: ['server_status_advisor'],
    server_status_processes: ['server_status_processes'],
    server_status_variables: ['server_status_variables'],
    user_password: ['server_privileges'],
    server_plugins: ['server_plugins'],
    server_status_queries: ['server_status_sorter', 'server_status_queries'],
    server_status_monitor: ['server_status_monitor', 'server_status_sorter'],
    server_variables: ['server_variables'],
    server_user_groups: ['server_user_groups'],
    server_replication: ['server_privileges', 'replication'],
    server_export: ['export'],
    server_import: ['import'],
    db_search: ['db_search', 'sql'],
    server_sql: ['sql', 'multi_column_sort'],
    tbl_sql: ['sql', 'multi_column_sort', 'tbl_change'],
    db_sql: ['sql', 'multi_column_sort'],
    sql: ['sql', 'multi_column_sort'],
    db_structure: ['db_structure', 'tbl_change'],
    db_operations: ['db_operations'],
    db_tracking: ['db_tracking'],
    db_central_columns: ['db_central_columns'],
    db_export: ['export'],
    db_import: ['import'],
    tbl_structure: ['tbl_structure'],
    tbl_indexes: [],
    tbl_relation: ['tbl_relation'],
    tbl_replace: ['tbl_change', 'sql'],
    tbl_chart: ['tbl_chart'],
    tbl_operations: ['tbl_operations'],
    tbl_tracking: ['tbl_tracking'],
    tbl_change: ['sql', 'tbl_change'],
    tbl_select: ['sql', 'tbl_change', 'tbl_select'],
    tbl_zoom_select: ['sql', 'tbl_change'],
    tbl_find_replace: ['tbl_find_replace'],
    tbl_import: ['import'],
    tbl_export: ['export']
};

const JsFileList = [
    'server_privileges',
    'server_databases',
    'error_report',
    'navigation',
    'server_status_advisor',
    'server_status_processes',
    'server_status_variables',
    'server_plugins',
    'server_status_sorter',
    'server_status_queries',
    'server_status_monitor',
    'server_variables',
    'server_user_groups',
    'replication',
    'export',
    'import',
    'config',
    'page_settings',
    'shortcuts_handler',
    'db_search',
    'sql',
    'functions',
    'multi_column_sort',
    'db_structure',
    'db_operations',
    'db_tracking',
    'db_central_columns',
    'indexes',
    'tbl_structure',
    'tbl_relation',
    'tbl_chart',
    'tbl_operations',
    'tbl_tracking',
    'tbl_change',
    'tbl_select',
    'tbl_find_replace',
    'key_handler',
    'cross_framing_protection'
];

export {
    PhpToJsFileMapping,
    JsFileList
};
