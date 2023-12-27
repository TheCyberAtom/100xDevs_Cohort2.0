const express = require("express");
const zod = require("zod");
const app = express();
const port = 3000;

const schema = zod.array(zod.number());

// example of a complex schema using zod
// {
//  email: string
//  password: atleast 8 character
//  country: "IN" or "US"
// }

const schemaExample = zod.object({
  email: zod.string().email(),
  password: zod.string().min(8),
  country: zod.literal("IN").or(zod.literal("US")),
});

app.use(express.json());

app.get("/health-checkup", (req, res) => {
  const kidneys = req.body.kidneys;
  let response = schema.safeParse(kidneys);
  if (!response.success) {
    res.status(411).json({
      msg: "Invalid Input.",
    });
  } else {
    res.send({ response });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
