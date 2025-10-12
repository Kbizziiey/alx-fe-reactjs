import React from 'react' 
import {render, screen, fireEvent} from '@testing-library/react' 
import '@testing-library/jest-dom'
import TododList from '../components/TodoList' 

describe('TodoList Componenet', () => {
    test('initial render - displays demo to-dos', () => {
        render(<TododList/>); 
        expect(screen.getByText('Learn React')).toBeInTheDocument();  
        expect(screen.getByText('Build a To-Do App')).toBeInTheDocument()

    }); 
    test('adding todos', () => {
        render(<TododList/>) 
        fireEvent.change(screen.getByRole('textbox'), {target: {value: 'New Todo'}}); 
        fireEvent.click(screen.getByText('New Todo')).toBeInTheDocument()
    }) 
    test('toggling todos', () => {
        render(<TododList/>) 
        const todoItem = screen.getByText('Learn React'); 
        fireEvent.click(todoItem) 
        expect(todoItem).toHaveStyle('text-decoration: line-through'); 
        fireEvent.click(todoItem); 
        expect(todoItem).not.toHaveStyle('text-decoration: line-through')
    }) 
    test('deleting todos', () => {
        render(<TododList/>) 
        fireEvent.click(screen.getByText('Delete', {selector: 'button'})); 
        expect(screen.queryByText('Learn React')).not.toBeInTheDocument(3)
    })
})