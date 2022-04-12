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
  addMovie: async (req, res, next) => {
    try {
      const { title, person, genre, runningtime } = req.body;
      const movie_id = req.params.movie_id;
      // INSERT INTO movietest.movie (movie_id, title, person, genre, runningtime) VALUES(7, "스파이더맨 노웨이홈", "톰 홀랜드", "액션", 148);
      const sql = `INSERT INTO movietest.movie (movie_id, title, person, genre, runningtime) 
                   VALUES(${movie_id}, "${title}", "${person}", "${genre}", ${runningtime})`;
      await db.query(sql, (error, results) => {
        if (error) {
          throw new Error(error);
        }
        res.status(200).json({
          results,
        });
      });
    } catch (error) {
      next(error);
    }
  },

  deleteMovie: async (req, res, next) => {
    try {
      const movie_id = req.params.movie_id;
      // DELETE FROM movietest.movie WHERE movie_id=6;
      const sql = `DELETE FROM movietest.movie WHERE movie_id=${movie_id};`;
      db.query(sql, (error, results) => {
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
