const { render, screen } = require("@testing-library/vue");
// const { describe, it, expect } = require("vitest");
import SignUp from './SignUp.vue'


describe('Sign Up', () => {
    it('has Sign Up header', () => {
        render(SignUp)
        const header = screen.getByRole('heading', { name:'Sign Up' })
        expect(header).toBeInTheDocument()
    })
})