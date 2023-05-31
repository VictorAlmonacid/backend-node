import pkg from 'mssql';
const { ConnectionPool, sql } = pkg;

const config = {
  user: 'admin',
  password: 'PepilnIntra2023!',
  server: 'mssql-128323-0.cloudclusters.net',
  database: 'AzaPortalSeguridad',
  port: 18326,
  options: {
    trustServerCertificate: true
  }
};

const poolPromise = new ConnectionPool(config).connect();

export { poolPromise, sql };