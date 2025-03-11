import { Umzug, SequelizeStorage } from "umzug";
import db from "./db";
const sequelize = db.sequelize;
const migrator = new Umzug({
  migrations: {
    glob: [`${__dirname}/migrations/*.*`, { cwd: process.cwd() }],
  },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: console,
});
export async function up(): Promise<void> {
  console.log(
    `Current Working Directory For Migration:${process.cwd()}. Current Path ${__dirname}`
  );
  try {
    const pendingMigrations = await migrator.pending();
    if (pendingMigrations.length === 0) {
      console.log("No pending migrations found!!!");
      return;
    }
    console.log("Migrating the following files:");
    for (const migration of pendingMigrations) {
      console.log(migration.name);
    }
    await migrator.up();
    console.log("Migrations completed successfully.");
  } catch (error: any) {
    console.error("Error while migrating");
    console.error(error.message);
    // await down();
  }
}
export async function down(): Promise<void> {
  try {
    const executedMigrations = await migrator.executed();
    if (executedMigrations.length === 0) {
      console.log("No executed migrations found to downgrade.");
      return;
    }
    console.log("Reverting the following migrations:");
    for (const migration of executedMigrations) {
      console.log(migration.name);
    }
    await migrator.down({ to: 0 });
    console.log("Successfully reverted all migrations.");
  } catch (error) {
    console.error("Error during migration revert:", error);
  }
}
