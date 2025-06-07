# Supabase Instructions

As understood by absolute Supabase novice: Charlie

## Install Supabase CLI

No idea how on windows, but for me this was real simple. Good luck!
I think you also need Docker? that should be easy too

## Starting Supabase

From the root of the project (one folder up from this file), run:

```bash
supabase start
```

This will start the Supabase local development environment, including the database and other services.
At this point, I'm not 100% sure if it will automatically create the database schema or not.

## The Joys of Supabase

Go to the Supabase dashboard at [http://localhost:54323](http://localhost:54323) to see the database and other services running. Play around there and hopefully you'll see why this seems better than just using Postgres directly and having to write SQL all the time.

## Creating the Database Schema

If the schema is not created automatically, you can run the following command to reset it at any time. This will drop the existing database and create a new one with the schema defined in all the migrations (we get to that next):

```bash
supabase db reset
```

## Creating Migrations

> A migration is a file that describes changes to the database schema. Each migration is applied in order to build the database schema incrementally as we develop it. Essentially making it easy for us to both have separate databases that are in sync.

If you make any changes to the schema, create a new migration to capture those changes. The easiest way to do this is to run:

```bash
supabase db diff -f {name-of-migration}
```

This will create a new migration file in the `supabase/migrations` directory with the specified name. Make sure to commit this file to version control.

Then, run the above `supabase db reset` command to check all the migrations worked. If they didn't, you just lost all that work!

## Seeding the Database

Its helpful to have some data there when you reset every time someone makes a migration. This is in the `supabase/seed.sql` file. This is run each time you reset the database automatically. You might need to adjust it if you change relevant parts of the schema.
