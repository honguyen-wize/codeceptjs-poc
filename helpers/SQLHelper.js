const Helper = require('@codeceptjs/helper');
const sql = require('mssql');

require('dotenv').config()

const dbconfig = {
  user: process.env.LEGACYDB_USER,          
  password: process.env.LEGACYDB_PASSWORD,      
  server: process.env.LEGACYDB_HOST,             
  database: process.env.LEGACYDB_SCHEMA,           
  connectionTimeout: 60000,
  requestTimeout: 60000,
  options: {
    encrypt: false,               
    port: parseInt(process.env.LEGACYDB_PORT),                   
    enableArithAbort: true,
    instanceName: process.env.LEGACYDB_INSTANCE            
  },
}

class SQLHelper extends Helper {
  async getJanusPersonRecord(){
    try {
      const query = `SELECT TOP 1 * FROM tblPerson (NOLOCK) WHERE Source IN ('bismarcktribune', 'chippewa', 'beatricedailysun', 'columbustelegram', 'fremonttribune')`
      let pool = await sql.connect(dbconfig)
      const result = await pool.query(query)
      // console.log('SQL result:', result.recordset[0])
      return result.recordset[0]
    } catch (err) {
      console.log('SQL error', err)
      throw err
    } finally {
      await sql.close()
    }
  }
}

module.exports = SQLHelper;
