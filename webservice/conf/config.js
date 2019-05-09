module.exports = {
  user: 'MES',
  password: 'Mes2011',
  server: '172.20.100.56', 
  database: 'webehr',
  port:1433,
  options: {
    encrypt: true // Use this if you're on Windows Azure
  },
  pool: {
    min: 0,
    max: 10,
    idleTimeoutMillis: 3000
  },
  vuex:[],
  formtype:{leave:'L'}
}