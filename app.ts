import app from './src/api/app';

// eslint-disable-next-line no-process-env
const port = process.env.SERVER_PORT;

const server = app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Template NodeJS app listening at http://localhost:${port}`);
});

export default server;
