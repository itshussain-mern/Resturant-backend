const {validateAddCategory} = require('../validator/category.validator')
const { resSuccess, resError } = require('../utils/response');
const Category = require('../models/category')
const SuccessConstant = require('../constants/success.constant');

async function addCategory(req, res) {
    const valid = await validateAddCategory(req)
    if (valid.status) {
        return res.status(409).send(resError(valid.error, 409));
    }
    if (req.file) {
        let categoryData = {
            ...req.body,
            category_image: req.file.path,
        }
        const addCategory = await Category.create(categoryData);
        if (addCategory) {
            return res.send(resSuccess(SuccessConstant.CATEGORY_CREATED, 200, {}));
        }
    }
}
async function getCategoryById(req, res) {
    const { id } = req.params;
    const dataValues = await Category.findAll({
        where: {
            approved: 1,
            deletedAt: null,
            restaurant_id: id
        }
    })
    if (dataValues.length) {
        return res.send(resSuccess(SuccessConstant.CATEGORY_GET, 200, dataValues));
    }
    else {
        return res.send(resSuccess(SuccessConstant.CATEGORY_NOTFOUND, 200, {}));
    }
}

module.exports = {
    addCategory,
    getCategoryById
}