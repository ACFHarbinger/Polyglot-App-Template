//! Polyglot-App-Template Rust module.

/// Returns a greeting for `name`.
pub fn greet(name: &str) -> String {
    format!("Hello, {name}!")
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn greet_returns_expected_message() {
        assert_eq!(greet("Polyglot-App-Template"), "Hello, Polyglot-App-Template!");
    }

    #[test]
    fn greet_handles_default_case() {
        assert_eq!(greet("world"), "Hello, world!");
    }
}
