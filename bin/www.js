const app = require("../app");
const port = 3000;

app.listen(port, () => {
    console.log(`서버 연결 ${port}포트`);
});