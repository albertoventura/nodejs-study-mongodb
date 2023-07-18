const { Router } = require('express');
const router = Router();

const userController = require('../controllers/user.controller');

router.get('/', userController.getAll);
router.get('/:id', userController.getById);
router.post('/create', userController.create);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);


module.exports = router;