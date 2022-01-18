## Express.js + PlanetScale example

Example Express.js/Node app using PlanetScale.

## Prerequisites

- Install [Node.js](https://nodejs.org/en/download/)
- Install the [PlanetScale CLI](https://github.com/planetscale/cli)
- Authenticate the CLI with the following command:

```bash
pscale auth login
```

## Set up the database

1. Create a new database with the following command:

```bash
pscale database create <DATABASE_NAME>
```

2. Open the `pscale` MySQL shell by running:

```bash
pscale shell <DATABASE_NAME> <BRANCH_NAME>
```

You may need to [install the MySQL command line client](https://docs.planetscale.com/reference/planetscale-environment-setup) if you haven't already.

A branch, `main`, was automatically created when you created your database, so you can use that for `BRANCH_NAME`.

4. Once in the MySQL shell, create a `users` table:

```sql
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `email` varchar(255) NOT NULL,
  `first_name` varchar(255),
  `last_name` varchar(255)
);
```

5. Add a record to it:

```sql
INSERT INTO `users` (id, email, first_name, last_name)
VALUES  (1, 'hp@example.com', 'Harry', 'Potter');
```

6. Verify it was added by running:

```sql
select * from users;
```

## Set up the Express sample app

Next, clone and set up the Express sample application.

1. Clone this repository:

```bash
git clone https://github.com/planetscale/express-example.git
```

3. Run `cd express-sample`.
4. Run `npm install` to install the dependencies.

## Connect to PlanetScale with Express.js

There are two ways to connect to PlanetScale: Client certificates through the CLI or with a username and password.

### Using client certificates

This is a great option if you're frequently creating new branches and don't want to have to manage a lot of passwords. You won't have to deal with any certificates yourself, as PlanetScale handles it for you.

1. Use the CLI to create a connection to your database and start the app with the following command:

```bash
pscale connect <DATABASE_NAME> main --execute 'node app.js'
```

> Running pscale connect with the `--execute` flag will pass a `DATABASE_URL` to the Node application, enabling it to connect to PlanetScale. Don't forget to look in `app.js` to see how the `DATABASE_URL` is used.

Go to [http://localhost:3000](http://localhost:3000) to see the data from your `users` table.

Congratulations! You successfully connected your Node.js and Express.js application to a PlanetScale database.

### Using a Connection String

There are 2 ways to generate a new password from which you can derive your connection string.

1. The PlanetScale UI as documented [here](https://docs.planetscale.com/concepts/connection-strings#creating-a-password)
2. The PlanetScale CLI with the following command:

```bash
pscale password create <DATABASE_NAME> main <PASSWORD_NAME>
```

Make sure you save this information, as you won't be able to see the password again.

After generating your password, you can find the following attributes in the console output from the previous step:

- Name (same as `<PASSWORD_NAME>` from above)
- Username
- Access Host URL
- Role
- Plain Text (password)

You can derive your connection string with the following format.

```text
mysql://<USERNAME>:<PLAIN_TEXT_PASSWORD>@<ACCESS_HOST_URL>/<DATABASE_NAME>?ssl={"rejectUnauthorized":true}
```

Make a copy of the `.env.example` file as `.env` and update the `DATABASE_URL` property with your connection string.

Lastly, run the app with the following command.

```bash
node app.js
```

Navigate to [http://localhost:3000](http://localhost:3000) to see the data from your `users` table.

Congratulations! You successfully connected your Node.js and Express.js application to a PlanetScale database.