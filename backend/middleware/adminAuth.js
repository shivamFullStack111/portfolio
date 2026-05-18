const adminAuth = (req, res, next) => {
  try {
    const secret = req.headers["x-admin-secret"];

    if (secret !== process.env.ADMIN_SECRET) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = adminAuth;
