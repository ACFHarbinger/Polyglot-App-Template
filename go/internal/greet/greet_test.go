package greet

import "testing"

func TestGreet(t *testing.T) {
	cases := []struct {
		name string
		want string
	}{
		{"Polyglot-App-Template", "Hello, Polyglot-App-Template!"},
		{"world", "Hello, world!"},
	}

	for _, tc := range cases {
		if got := Greet(tc.name); got != tc.want {
			t.Errorf("Greet(%q) = %q, want %q", tc.name, got, tc.want)
		}
	}
}

func BenchmarkGreet(b *testing.B) {
	for i := 0; i < b.N; i++ {
		Greet("world")
	}
}
