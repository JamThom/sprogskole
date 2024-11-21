import { Pool } from 'pg';

const pool = new Pool({
  user: 'your_db_user',
  host: 'your_db_host',
  database: 'your_db_name',
  password: 'your_db_password',
  port: 5432,
});

export const getTranslationsByGroupId = async (translationGroupId: string) => {
  const client = await pool.connect();
  try {
    const res = await client.query('SELECT * FROM translations WHERE group_id = $1', [translationGroupId]);
    return res.rows;
  } finally {
    client.release();
  }
};