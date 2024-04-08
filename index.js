const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {

  const responseObj = {
    success: true,
    code: 200,
    message: 'The System is UP',
  };
  res.status(200).json(responseObj);
  
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
