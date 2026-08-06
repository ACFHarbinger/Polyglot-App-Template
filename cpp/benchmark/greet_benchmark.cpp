#include <benchmark/benchmark.h>

#include "polyglot_app_template/greet.hpp"

static void BM_Greet(benchmark::State& state) {
    for (auto _ : state) {
        benchmark::DoNotOptimize(polyglot_app_template::greet("world"));
    }
}
BENCHMARK(BM_Greet);
