use axum::{routing::get, Router};

#[tokio::main]
async fn main() {
    // build our application with a route
    let app = Router::new().route("/analytics", get(analytics_handler));

    println!("Starting API server...");
    // run it
    axum::Server::bind(&"127.0.0.1:5174".parse().unwrap())
        .serve(app.into_make_service())
        .await
        .unwrap();
}

async fn analytics_handler() {
    println!("API working");
}
