from rethinkdb import r

r.connect('localhost', 28015).repl()
r.db_create('cosmic-retro').run()

# Table creation
r.db('cosmic-retro').table_create('feedbacks').run()
