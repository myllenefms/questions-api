import createApp from "./app";

const app = createApp();

app.listen(process.env.PORT, () => {
    console.log(`💡 Server running at port http://localhost:${process.env.PORT}`)
});