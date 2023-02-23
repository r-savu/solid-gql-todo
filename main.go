package main

import (
	"context"
	"flag"
	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/jackc/pgx/v4/pgxpool"
	"gqlapi/graph"
	"gqlapi/sqlc"
	"log"
	"net/http"
)

const defaultPort = "8080"
const defaultDB = "postgres://postgres:postgres@localhost:5438/postgres?sslmode=disable"

func main() {
	var (
		port, db string
	)
	flag.StringVar(&port, "port", defaultPort, "server port")
	flag.StringVar(&db, "db", defaultDB, "database connection string")
	flag.Parse()

	dbPool, err := pgxpool.Connect(context.Background(), db)
	if err != nil {
		log.Fatalf("Unable to connect to database: %v\n", err)
	}

	gqlCfg := graph.Config{Resolvers: &graph.Resolver{Store: sqlc.New(dbPool)}}
	srv := handler.NewDefaultServer(graph.NewExecutableSchema(gqlCfg))

	http.Handle("/", playground.Handler("GraphQL playground", "/query"))
	http.Handle("/query", srv)

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
