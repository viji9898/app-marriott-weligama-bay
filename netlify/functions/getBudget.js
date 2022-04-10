const faunadb = require("faunadb");
const q = faunadb.query;
require("dotenv").config();

exports.handler = async (event, context) => {
  const client = new faunadb.Client({
    secret: process.env.FAUNA_SECRET_KEY,
  });

  return client
    .query(
      q.Map(
        q.Paginate(q.Match(q.Index("budget_all"))),
        q.Lambda("budget", {
          budgetId: q.Select(["ref", "id"], q.Get(q.Var("budget"))),
          key: q.Select(["data", "key"], q.Get(q.Var("budget"))),
          description: q.Select(
            ["data", "description"],
            q.Get(q.Var("budget"))
          ),
          usd: q.Select(["data", "usd"], q.Get(q.Var("budget"))),
          lkr: q.Select(["data", "lkr"], q.Get(q.Var("budget"))),
          breakdown: q.Select(["data", "breakdown"], q.Get(q.Var("budget"))),
        })
      )
    )
    .then((response) => {
      console.log("success", response);
      return {
        statusCode: 200,
        body: JSON.stringify(response),
      };
    })
    .catch((error) => {
      console.log("error", error);
      return {
        statusCode: 400,
        body: JSON.stringify(error),
      };
    });
};
