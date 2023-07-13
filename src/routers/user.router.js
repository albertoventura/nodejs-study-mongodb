const { Router } = require('express');
const router = Router();

const userController = require('../controllers/user.controller');

router.get('/', userController.getAll);
router.get('/:id', userController.getAll);
router.post('/create', userController.getAll);
router.put('/:id', userController.getAll);
router.delete('/:id', userController.getAll);


module.exports = router;