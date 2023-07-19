const { Router } = require('express');
const router = Router();
const upload = require('../middleware/multer');
const dataController = require('../controllers/data.controller');

router.get("/", dataController.getAll);
router.get("/:id", dataController.getById);
router.post("/", upload.single("file"), dataController.create);
router.put("/:id", upload.single("file"), dataController.update);
router.delete("/:id", dataController.delete);

module.exports = router;