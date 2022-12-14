const router = require("express").Router();
const userController = require("../controllers/userController");
const blogController = require("../controllers/blogController");

const { verifyUser } = require("../middleware/verifyToken");
const { imageUpload }  = require("../middleware/imageUpload");

router.get("/",verifyUser, userController.getAllUsers);

router.post("/signup", userController.signUp);

router.post("/login", userController.logIn);

router.patch('/:userId', userController.updateUser);

router.delete('/:userId', userController.deleteUser);

router.get('/data', verifyUser, userController.data);

router.post('/addblog',blogController.addblog);

router.get('/getdata',blogController.getData);

router.post('/updateblog',blogController.updateblog);

router.post('/uploadImage', imageUpload.single('image'), blogController.uploadImage)

router.post('/uploadBulkImage', imageUpload.array('images', 10), blogController.uploadBulkImage)

module.exports = router;

