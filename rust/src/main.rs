use polyglot_app_template_rust::greet;

fn main() {
    let name = std::env::args().nth(1).unwrap_or_else(|| "world".to_string());
    println!("{}", greet(&name));
}
