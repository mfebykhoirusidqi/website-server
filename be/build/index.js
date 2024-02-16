"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const compression_1 = __importDefault(require("compression"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const path_1 = __importDefault(require("path"));
const multer_1 = __importDefault(require("multer"));
const AuthRoutes_1 = __importDefault(require("./routers/AuthRoutes"));
const SoalRoutes_1 = __importDefault(require("./routers/SoalRoutes"));
const MateriRoutes_1 = __importDefault(require("./routers/MateriRoutes"));
const ImageRoutes_1 = __importDefault(require("./routers/ImageRoutes"));
const Config_1 = require("./config/Config");
const NilaiRoutes_1 = __importDefault(require("./routers/NilaiRoutes"));
mongoose_1.default.set("strictQuery", false);
mongoose_1.default
    .connect(Config_1.Config.mongourl, {
    retryWrites: true,
})
    .then(() => {
    console.log("Mongo connected successfully.");
    startServer();
})
    .catch((error) => {
    console.log(error);
});
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.plugin();
        this.routes();
        dotenv_1.default.config();
    }
    plugin() {
        this.app.use(body_parser_1.default.json());
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use((0, compression_1.default)());
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use(express_1.default.json());
        // this.app.use("/images", express.static(path.join("images"))); //gambar
        this.app.use("/images", function (req, res, next) {
            req.headers["ngrok-skip-browser-warning"] = "true";
            return next();
        }, express_1.default.static(path_1.default.join("images")));
        // this.app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
        this.app.use((0, helmet_1.default)({ contentSecurityPolicy: false }));
        this.app.use((0, multer_1.default)({ storage: fileStorage, fileFilter: fileFilter }).single("image"));
    }
    routes() {
        this.app.get("/", (req, res) => {
            res.send("dari ts");
        });
        this.app.use("/api/v1/auth", AuthRoutes_1.default); //login resgister
        this.app.use("/api/v1/soal", SoalRoutes_1.default); //soal
        this.app.use("/api/v1/materi", MateriRoutes_1.default); //materi
        this.app.use("/api/v1/image", ImageRoutes_1.default); //image
        this.app.use("/api/v1/nilai", NilaiRoutes_1.default); //nilai
    }
}
const fileStorage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "images");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, `${file.fieldname}-${uniqueSuffix}${path_1.default.extname(file.originalname)}`);
    },
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype == "image/png" ||
        file.mimetype == "image/jpg" ||
        file.mimetype == "image/jpeg" ||
        file.mimetype == "video/mp4") {
        cb(null, true);
    }
    else {
        cb(null, false);
    }
};
const startServer = () => {
    const konek = new App().app;
    konek.listen(process.env.DB_PORT, () => {
        console.log(`http:localhost:${process.env.DB_PORT}`);
    });
};
