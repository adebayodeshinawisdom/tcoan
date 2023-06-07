import nextConnect from 'next-connect';
import path from 'path'
import multer from 'multer'



const storage = multer.diskStorage({
    destination(req, file, cb){
        cb(null, './public/images')
    },
    filename(req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
    }
})

function checkFileType(file, cb){
    const filetypes = /jpg|jpeg|png/
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
    const mimetype = filetypes.test(file.mimetype)

    if(extname && mimetype){
        return cb(null, true)
    }else{
        cb('image only')
    }
}

const upload = multer({
    storage,
    fileFilter: function(req, file, cb){
        checkFileType(file, cb)
    }
})

const apiRoute = nextConnect({
    onError(error, req, res) {
      res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
    },
    onNoMatch(req, res) {
      res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },
  });

apiRoute.use(upload.array('image', 4));

apiRoute.use(upload.single('image'));

apiRoute.post((req, res)=> {
    res.send(`/${req.file.path}`)
})
apiRoute.post((req, res)=> {
    res.send(`/${req.files.path}`)
})


export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};