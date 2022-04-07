const Vendor = require('../models/vendor')

exports.acceptVendor = async (req, res) => {
    //console.log(req.body)
    if (req.body.status == 0) {
        Vendor.findByIdAndUpdate(
            req.params.id,
            { $set: { status: 1 } }
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

exports.rejectVendor = async (req, res) => {
    //console.log(req.body)
    if (req.body.status == 0) {
        Vendor.findByIdAndUpdate(req.params.id, { $set: { status: -1 } })
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

exports.getRequest = async (req, res) => {
    try {
        Vendor.find({status: 0})
        .then((data) => {
            //console.log(data)
            res.send(data);
        })
    } catch {
        console.log(err)
        res.status(500).send({ error: 'could not fetch requests' })
    }
}