const { createConnection } = require('typeorm');

async function startDatabase() {
  try {
    await createConnection();
    console.log('--- Connected to the database successfully');
  } catch (error) {
    console.log('--- Error connecting to database', error);
  }
}

module.exports = { startDatabase };
