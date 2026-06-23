const exprss = require('express');
const cors = require('cors');
const app = express();
const port=3000;

app.use(cors());
app.use(exprss.json());


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

