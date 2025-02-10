import App from 'main';

App()
  .then(() => {
    console.log('Successful API execution');
  })
  .catch((e) => {
    console.error(e);
  });
