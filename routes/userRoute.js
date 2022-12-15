const router = require("express").Router();
const userController = require("../controllers/userController");
const blogController = require("../controllers/blogController");

const { verifyUser } = require("../middleware/verifyToken");
const { verifyClient } = require("../middleware/verifyClient");

router.get("/",verifyUser, userController.getAllUsers);
router.post("/signup", userController.signUp);
router.post("/login", userController.logIn);
router.patch('/:userId', userController.updateUser);
router.delete('/:userId', userController.deleteUser);
router.get('/data', verifyUser, userController.data);
router.post('/addblog',verifyClient,blogController.addblog);
router.get('/getdata',verifyClient,blogController.getData);
router.post('/updateblog',verifyClient,blogController.updateblog);
router.post('/updateviews',verifyClient,blogController.updateviews);

module.exports = router;

