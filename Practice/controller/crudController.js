import { db } from "../src/dbconfig";

const crudController = {
  getMovielist: async (req, res, next) => {
    try {
      const sql = `SELECT * FROM movie;`;
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

  update: async (req, res, next) => {
    try {
      const movie_id = req.params.movie_id;
      const { title, person, genre, runningtime } = req.body;
      if (title) {
        const sql = `UPDATE movietest.movie SET title = "${title}" WHERE movie_id = ${movie_id};`;
        await db.query(sql, (error, results) => {
          if (error) {
            throw new Error(error);
          }
        });
      }
      if (genre) {
        const sql = `UPDATE movietest.movie SET genre = "${genre}" WHERE movie_id = ${movie_id};`;
        await db.query(sql, (error, results) => {
          if (error) {
            throw new Error(error);
          }
        });
      }
      if (person) {
        const sql = `UPDATE movietest.movie SET person = "${person}" WHERE movie_id = ${movie_id};`;
        await db.query(sql, (error, results) => {
          if (error) {
            throw new Error(error);
          }
        });
      }
      if (runningtime) {
        const sql = `UPDATE movietest.movie SET runningtime = "${runningtime}" WHERE movie_id = ${movie_id};`;
        await db.query(sql, (error, results) => {
          if (error) {
            throw new Error(error);
          }
        });
      }
      const sql = `SELECT * FROM movie WHERE movie_id = ${movie_id};`;
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
