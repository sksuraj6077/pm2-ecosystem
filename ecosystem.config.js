module.exports = {
  apps: [
    {
      name: 'my-app',
      script: './app.js',
      log_file: './logs/my-app.log',
      out_file: './logs/my-app-out.log',
      error_file: './logs/my-app-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      env: {
        NODE_ENV: 'production',
      },
      // Log rotation settings
      exec_mode: 'cluster',
      instances: 'max',
      max_memory_restart: '300M',
      out_log: './logs/my-app-out.log',
      error_log: './logs/my-app-error.log',
      merge_logs: true,
      log_rotate: {
        max_size: '10M', // Maximum size of a log file
        retain: '7d', // Retain logs for 7 days
        compress: true, // Compress rotated logs
      },
    },
  ],
};
