const { validateAddProduct } = require('../validator/product.validator');
const { resSuccess, resError } = require('../utils/response');
const Product = require('../models/product');
const Category = require('../models/category');
const SuccessConstant = require('../constants/success.constant');

async function addProduct(req, res) {
    const valid = await validateAddProduct(req)
    if (valid.status) {
        return res.status(409).send(resError(valid.error, 409));
    }
    if (req.file) {
        let productData = {
            ...req.body,
            product_image: req.file.path,
        }
        const addProduct = await Product.create(productData);
        if (addProduct) {
            return res.send(resSuccess(SuccessConstant.PRODUCT_CREATED, 200, {}));
        }
    }
}

async function getProductById(req, res) {
    const { id } = req.params;
    const dataValues = await Product.findAll({
        where: {
            deletedAt: null,
            category_id: id
        }
    })
    if (dataValues.length) {
        return res.send(resSuccess(SuccessConstant.PRODUCTS_GET, 200, dataValues));
    }
    else {
        return res.send(resSuccess(SuccessConstant.PRODUCTS_NOTFOUND, 200, {}));
    }
}

async function getAllProductsOfRestaurant(req, res) {
    const { id } = req.params;
    const categoryData = await Category.findAll({
        where: {
            deletedAt: null,
            restaurant_id: id
        }
    })
    const categoriesIds = categoryData.map(item => item.dataValues.id)
    const productsData = await Product.findAll({
        where: {
            deletedAt: null,
            category_id: categoriesIds
        }
    })
    if (productsData.length) {
        return res.send(resSuccess(SuccessConstant.PRODUCTS_GET, 200, productsData));
    }
    else {
        return res.send(resSuccess(SuccessConstant.PRODUCTS_NOTFOUND, 200, {}));
    }
}

module.exports = {
    addProduct,
    getProductById,
    getAllProductsOfRestaurant
}