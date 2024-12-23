import Jwt from "jsonwebtoken";

export const adminLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
      const adminId = process.env.ADMINLOGIN;
      const adminPassword = process.env.ADMINPASSWORD;
      if (email == adminId) {
        if (adminPassword == password) {
          const token = Jwt.sign(
            {
              role: "admin",
            },
            process.env.ADMIN_SECRET,
            {
              expiresIn: "12h",
            }
          );
          const admin = { name: "Gala-Admin" };
          return res
            .status(200)
            .json({ admin, token, message: "Login Verified" });
        } else {
          return res.status(403).json({ message: "Incorrect Password" });
        }
      } else {
        return res.status(401).json({ message: "Incorrect Login ID" });
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ status: "Internal Server Error" });
    }
  };