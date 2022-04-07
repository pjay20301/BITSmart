const Vendor = require('../models/vendor')

exports.approveVendor = async (req, res) => {
    if (req.status == false) {
        const _id = req.params.id
        console.log(_id)
        User.findByIdAndUpdate(
            req.params.id,
            { $set: { status: true } },
        )
        .then((data) => {
            if (!data) {
                return res.status(404).send({
                    message: `Cannot approve the vendor request`,
                })
            } else {
                return res.send(data)
            }
        })
        .catch((err) => {
            return res.status(500).send({
                message: err,
            })
        })
    }
}