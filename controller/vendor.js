const Vendor = require('../models/vendor')
const Product = require('../models/product')
const cloudinary = require('cloudinary');
var mongoose = require('mongoose');

exports.signUp = async (req, res) => {
    if (req.body.name == '' || req.body.address == '' || req.body.phone == '' || req.body.shopName == '') {
        res.status(400).json({ message: 'No field can be empty!' })
        return
    }
    try {
        const newVendor = new Vendor({
            name: req.body.name,
            shopName: req.body.shopName,
            address: req.body.address,
            phone: req.body.phone,
            uid: req.params.id,
        })
        const publicVendor = {
            _id: newVendor._id,
            name: newVendor.name,
            shopName: newVendor.shopName,
            adderess: newVendor.address,
            phone: newVendor.phone,
            status: newVendor.status
        }
        newVendor
        .save(newVendor)
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).send({ error: 'Vendor registeration failed' })
        })
    } catch (error) {
        console.log(error)
        return res.status(200).send({ error: 'Phone number taken' })
    }
}

exports.create = async (req, res) => {
    if(req.body.name == '' || req.body.price == '' || req.body.description == '' || req.body.stock == '') {
        res.status(400).json({ message: 'No field can be empty!' })
        return
    }
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        const newProduct = new Product({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            stock: req.body.stock,
            image: {
                public_id: result.public_id,
                url: result.secure_url
            },
            vendor: req.params.id
        })
        newProduct
            .save(newProduct)
            .then((data) => {
            res.send(data)
            })
            .catch((err) => {
            console.log(err)
            res.status(500).send({ error: 'Product creation failed' })
            })
        } catch (error) {
            return res.status(200).send(error)
        }
}

exports.view = async(req, res) => {
    console.log(req.params.id)
    Product.find( {vendor: mongoose.Types.ObjectId(req.params.id)} ).then((data) => {
        if(!data) {
            return res.status(200).json({
                success: false,
                message: 'No data available'
            });
        }
        //gfs.openDownloadStreamByName(req.params.filename).pipe(res);
         console.log(data)
        res.status(200).json({
            success: true,
            data
        });
    })
}

exports.allv = async(req, res) => {
    Vendor.find({}).then((data) => {
        if(!data) {
            return res.status(200).json({
                success: false,
                message: 'No data available'
            });
        }
        //gfs.openDownloadStreamByName(req.params.filename).pipe(res);
        // console.log(data)
        res.status(200).json({
            success: true,
            data
        });
    })
}

exports.getvp = async(req, res) => {
    try {
         Vendor.findOne( {uid: req.params.id} ).then((data) => {
             if(!data) {
                 return res.status(404).send({
                     message: `cannot find user by id ${req.params.id}`
                 })
             } else {
                 //console.log(data.role)
                 return res.send(data)
             }
         })
     } catch(e) {
         return res.status(500).send(e)
     }
 }
