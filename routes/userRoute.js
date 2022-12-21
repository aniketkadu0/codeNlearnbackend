const router = require("express").Router();
const userController = require("../controllers/userController");
const blogController = require("../controllers/blogController");
const mailController = require("../controllers/mailController");

const { verifyUser } = require("../middleware/verifyToken");
const { verifyClient } = require("../middleware/verifyClient");

router.get("/",verifyUser, userController.getAllUsers);
router.get("/getuser",verifyUser, userController.getUser);
router.post("/signup", userController.signUp);
router.post("/login", userController.logIn);
router.patch('/:userId', userController.updateUser);
router.delete('/:userId', userController.deleteUser);
router.get('/data', verifyUser, userController.data);
router.post('/addblog',verifyClient,blogController.addblog);
router.get('/getdata',verifyClient,blogController.getData);
router.get('/getblog',verifyClient,blogController.getBlog);
router.post('/updateblog',verifyClient,blogController.updateblog);
router.post('/updateviews',verifyClient,blogController.updateviews);
router.post('/updatelikes',verifyClient,blogController.updatelikes);
router.post('/addcomment',verifyClient,blogController.addComment,mailController.mailer);

module.exports = router;

