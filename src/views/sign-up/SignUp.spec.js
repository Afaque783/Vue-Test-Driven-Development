vi.mock('axios')

const { render, screen } = require("@testing-library/vue");
import { describe, expect, it, vi } from 'vitest';
// const { describe, it, expect } = require("vitest");
import SignUp from './SignUp.vue'
import userEvent from '@testing-library/user-event';
import axios from 'axios';


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

    describe('When user sets same value for password inputs', () => {
        it('Enables Button', async () => {
            const user = userEvent.setup()
            render(SignUp)
            const passwordInput = screen.getByLabelText('Password')
            const passwordRepeatInput = screen.getByLabelText('Password Repeat')
            await user.type(passwordInput,'P4ssword')
            await user.type(passwordRepeatInput,'P4ssword')
            expect(screen.getByRole('button', {name:'Sign Up'})).toBeEnabled()
        });
    })
    describe('when user submits form', () => {
        it('Sends username, email, password to the backend', async () => {
            const user = userEvent.setup()
            render(SignUp)
            const usernameInput = screen.getByLabelText('Username')
            const emailInput = screen.getByLabelText('E-mail')
            const passwordInput = screen.getByLabelText('Password')
            const passwordRepeatInput = screen.getByLabelText('Password Repeat')
            await user.type(usernameInput, 'user1')
            await user.type(emailInput,'user1@gmail.com')
            await user.type(passwordInput,'P4ssword')
            await user.type(passwordRepeatInput,'P4ssword')
            const button = screen.getByRole('button', {name:'Sign Up'});
            await user.click(button)
            expect(axios.post).toHaveBeenCalledWith('/api/v1/users', {
                username: 'user1',
                email:'user1@gmail.com',
                password: 'P4ssword'
            })
        });
    })
})