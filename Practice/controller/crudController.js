import { db } from "../src/dbconfig";

const crudController = {
  getMovielist: async (req, res, next) => {
    try {
      const sql = `SELECT * FROM movietest.movie;`;
      await db.query(sql, (error, results) => {
        if (error) {
          throw new Error(error);
        }
        res.status(200).json(results);
      });
    } catch (error) {
      next(error);
    }
  },
};

export { crudController };
