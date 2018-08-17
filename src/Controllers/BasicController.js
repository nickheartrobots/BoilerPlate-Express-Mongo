const BasicController = {};

BasicController.get = (req, res) => {
    res.status(200).json({
        message: "Hello World!"
    })
};

BasicController.post = (req, res) => {
    res.status(200).json({
        data: req.body
    })
};

export default BasicController