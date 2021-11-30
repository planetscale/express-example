## Express.js + PlanetScale example

Example Express.js/Node app using PlanetScale.

## Usage

### Setup your database

Install the [PlanetScale CLI](https://planetscale.com/cli). Then, run the following command to log in.

```bash
pscale auth login
```

Create a new database.

```bash
pscale database create <YOUR_DB_NAME>
```

### Running the example app

#### 1. Setup the project

Clone the repository.

```bash
git clone https://github.com/planetscale/express-example.git
````

Change into the application directory.

```bash
cd express-example
```

Install dependencies.

```bash
npm install
```

#### 2. Create a new password and connection string

You can create a new password in the PlanetScale UI as documented [here](https://docs.planetscale.com/concepts/connection-strings#creating-a-password), or you can use the CLI.

```bash
pscale password create <YOUR_DB_NAME> main <YOUR_PASSWORD_NAME>
```

Then, create your connection string with the following format.

```
mysql://<USERNAME>:<PLAIN_TEXT_PASSWORD>@<ACCESS_HOST_URL>/<YOUR_DB_NAME>?ssl=true
```

#### 3. Update environment variables

Make a copy of the `.env.example` file as `.env` and update the `DATABASE_URL` property with your connection string

#### 4. Run the application.

```bash
node app.js
```

