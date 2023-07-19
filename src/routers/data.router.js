const { Router } = require('express');
const router = Router();
const upload = require('../middleware/multer');
const dataController = require('../controllers/data.controller');

router.get("/", dataController.getAll);
router.post("/", upload.single("file"), dataController.create);
router.delete("/:id", dataController.delete);

module.exports = router;