import { db } from "../dbconfig";

const LeftControler = {
  getLeft: async (req, res, next) => {
    try {
      const { from, LeftJoin } = req.body;
      console.log(from, LeftJoin);
      if (from === "topic" && LeftJoin === "author") {
        const sql = `SELECT * FROM topic LEFT JOIN author ON topic.author_id = author.aid;`;
        db.query(sql, (error, results) => {
          if (error) {
            throw new Error(error);
          }

          res.status(200).json(results);
        });
      } else if (from == "author" && LeftJoin === "profile") {
        const sql = `SELECT * FROM author LEFT JOIN profile ON author.profile_id = profile.pid;`;
        db.query(sql, (error, results) => {
          if (error) {
            throw new Error(error);
          }

          res.status(200).json(results);
        });
      }
    } catch (error) {
      next(error);
    }
  },
};

export { LeftControler };
