const express = require('express');
const loanRoutes = require('./routes/loanRoutes');
require("./config/mongoose")

const app = express();
app.use(express.json());



app.use('/api', loanRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
