const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.use(
	"/graphql",
	graphqlHTTP({
		schema,
		graphiql: true,
	})
);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
