import { Pool } from 'pg';

// export default new Pool ({
//     max: 20,
//     connectionString: 'postgres://peaasdcaleuqay:1738bb11d89fbe2937cb3b5c7815a71a9f6e1da71d9b962eda703f88eab6d69b@ec2-34-239-33-57.compute-1.amazonaws.com:5432/dcjbgvdube0ghr',
//     idleTimeoutMillis: 30000
// });

export const pool = new Pool({
    user: 'peaasdcaleuqay',
    host: 'ec2-34-239-33-57.compute-1.amazonaws.com',
    password: '1738bb11d89fbe2937cb3b5c7815a71a9f6e1da71d9b962eda703f88eab6d69b',
    database: 'dcjbgvdube0ghr',
    port: 5432,
    ssl: {
        rejectUnauthorized: false,
      }
})
