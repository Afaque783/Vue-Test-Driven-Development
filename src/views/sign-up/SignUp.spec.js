const { render, screen } = require("@testing-library/vue");
import { expect, it } from 'vitest';
// const { describe, it, expect } = require("vitest");
import SignUp from './SignUp.vue'


describe('Sign Up', () => {
    it('has Sign Up header', () => {
        render(SignUp)
        const header = screen.getByRole('heading', { name:'Sign Up' })
        expect(header).toBeInTheDocument()
    })

    // it('Has UserName Input', () => {
    //     const {container } = render(SignUp)
    //     expect(container.querySelector('input')).toBeInTheDocument()
    // });

    it('Has UserName Input', () => {
        render(SignUp)
        expect(screen.queryByLabelText('Username')).toBeInTheDocument()
    });

    it('Has E-mail Input', () => {
        render(SignUp)
        expect(screen.queryByLabelText('E-mail')).toBeInTheDocument()
    });

    it('Has Password Repeat Input', () => {
        render(SignUp)
        expect(screen.queryByLabelText('Password Repeat')).toBeInTheDocument()
    });

    it('Has Password Type For Password Input', () => {
        render(SignUp)
        expect(screen.queryByLabelText('Password')).toHaveAttribute('type', 'password')
    });

    it('Has Sign Up Button', () => {
        render(SignUp)
        const button = screen.getByRole('button', { name:'Sign Up' })
        expect(button).toBeInTheDocument()
    });

    it('Disable The Button Initially', () => {
        render(SignUp)
        expect(screen.getByRole('button', {name: 'Sign Up'})).toBeDisabled()
    });

})