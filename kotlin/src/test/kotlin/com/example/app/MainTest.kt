package com.example.app

import kotlin.test.Test
import kotlin.test.assertEquals

class MainTest {
    @Test
    fun `greet returns expected message`() {
        assertEquals("Hello, Polyglot-App-Template!", greet("Polyglot-App-Template"))
    }

    @Test
    fun `greet handles default case`() {
        assertEquals("Hello, world!", greet("world"))
    }
}
