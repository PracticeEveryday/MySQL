import { db } from "../dbconfig";

const LeftControler = {
  getLeft: async (req, res, next) => {
    try {
      //SELECT * FROM author LEFT JOIN profile ON author.profile_id = profile.id;
      //SELECT * FROM topic LEFT JOIN author ON topic.author_id = author.id;
      const { from, LeftJoin } = req.body;
      console.log(from, LeftJoin);
      const sql = `SELECT * FROM ${from} LEFT JOIN ${LeftJoin} ON ${from}.${LeftJoin}_id = ${LeftJoin}.id`;
      db.query(sql, (error, results) => {
        if (error) throw new Error(error);
        res.status(200).json(results);
      });
    } catch (error) {
      next(error);
    }
  },
};

export { LeftControler };
