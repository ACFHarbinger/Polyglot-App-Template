#include "polyglot_app_template/greet.hpp"

#include <gtest/gtest.h>

TEST(Greet, ReturnsExpectedMessage) {
    EXPECT_EQ(polyglot_app_template::greet("Polyglot-App-Template"), "Hello, Polyglot-App-Template!");
}

TEST(Greet, HandlesDefaultCase) {
    EXPECT_EQ(polyglot_app_template::greet("world"), "Hello, world!");
}
