import App from './app'

const PORT = process.env.PORT || process.env.DEV_PORT;

App.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})