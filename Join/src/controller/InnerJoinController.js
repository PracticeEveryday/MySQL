import { db } from "../dbconfig";

const InnerJoinController = {
  getInner: async (req, res, next) => {
    try {
      // SELECT * FROM topic INNER JOIN author ON topic.author_id = author.id;
      const { from, InnerJoin } = req.body;
      console.log(from, InnerJoin);
      const sql = `SELECT * FROM ${from} INNER JOIN ${InnerJoin} ON ${from}.${InnerJoin}_id = ${InnerJoin}.id;`;
      db.query(sql, (error, results) => {
        if (error) throw new Error(error);
        res.status(200).json(results);
      });
    } catch (error) {
      next(error);
    }
  },
};

export { InnerJoinController };
