## Express.js + PlanetScale example

Example Express.js/Node app using PlanetScale.

## Prerequisites

- Install [Node.js](https://nodejs.org/en/download/)
- Install the [PlanetScale CLI](https://github.com/planetscale/cli)
- Authenticate the CLI with the following command

```bash
pscale auth login
```

## Set up the example Node.js app

1. Create a new database with the following command:

```bash
pscale database create <YOUR_DB_NAME>
```

2. Clone this repository:

```bash
git clone https://github.com/planetscale/express-example.git
````

3. Run `cd express-sample`
4. Run `npm install`

## Connect to PlanetScale with Express.js

### 1. Using `pscale connect`

Use the CLI to create a connection to your database and start the app with the following command:

```bash
pscale connect <YOUR_DB_NAME> main --execute 'node app.js'
```

> Running pscale connect with the `--execute` flag will pass a DATABASE_URL to the node application, enabling it to connect to PlanetScale. Don't forget to look in app.js to see how the DATABASE_URL is used.

Congratulations! You successfully connected your Node.js and Express.js application to a PlanetScale database.

### 2. Using a Connection String

There are 2 ways to generate a new password from which you can derive your connection string.

1. The PlanetScale UI as documented [here](https://docs.planetscale.com/concepts/connection-strings#creating-a-password)
2. The PlanetScale CLI with the following command

```bash
pscale password create <YOUR_DB_NAME> main <YOUR_PASSWORD_NAME>
```

After generating your password, you should find the following attributes.

- Name (same as `<YOUR_PASSWORD_NAME>` from above)
- Username
- Access Host URL
- Role
- Plain Text (password)

You can derive your connection string with the following format.

```text
mysql://<USERNAME>:<PLAIN_TEXT_PASSWORD>@<ACCESS_HOST_URL>/<YOUR_DB_NAME>?ssl=true
```

Make a copy of the `.env.example` file as `.env` and update the `DATABASE_URL` property with your connection string.

Lastly, run the app with the following command.

```bash
node app.js
```

Congratulations! You successfully connected your Node.js and Express.js application to a PlanetScale database.