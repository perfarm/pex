require('dotenv').config()

const { ServicesClient } = require('@google-cloud/appengine-admin');

const credentials = require('./app-engine.json');

const { FIREBASE_PROJECT_ID } = process.env;

const client = new ServicesClient({ credentials });

async function listVersions() {
  const [versions] = await client.listServices({ parent: 'apps/atomic-agro' });
  console.info(versions);
}
async function createService() {
  const [versions] = await client.updateService({ name: 'perfarm-experience' });
  console.info(versions);
}
createService();