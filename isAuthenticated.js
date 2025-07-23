import jwt from "jsonwebtoken";

const isAuthenticated = (req, res, next) => {
    try {
        let token = req.cookies.token;

        if (!token && req.headers.authorization?.startsWith("Bearer ")) {
            token = req.headers.authorization.split(" ")[1];
        }
        if (!token) {
        return res.status(401).json({
            message: "Unauthorized",
            success: false,
        });
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if (!decode) {
        return res.status(401).json({
            message: "Unauthorized",
            success: false,
        });
    }

    req.id = decode.UserId;
    next();
} catch (error) {
    console.log(error);
    return res.status(500).json({
        message: "Internal server error",
        success: false,
    });
}
};

export default isAuthenticated;
