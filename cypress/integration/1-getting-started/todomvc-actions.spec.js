///<reference types="cypress"   />

const { TodoPage } = require("../../page-objects/TodoPage")

describe('todo actions', () => {
    const todoPage = new TodoPage()

    beforeEach(() => {
        todoPage.navigate()
        todoPage.addTodo('Clean room')
    })

    it('should add a new todo to the list', () => {

        todoPage.validateTodoText(0,'Clean room')
        // cy.get('label').should("have.text", "Clean room")

        cy.get('.toggle').should('not.be.checked')
    })

    it('should mark todo as complete', () => {
        cy.get('.toggle').click()
        cy.get('label').should('have.css', 'text-decoration-line', 'line-through')

    })

    it('should clear completed todos', () => {
        cy.get('.toggle').click()
        cy.contains('Clear').click()
        cy.get('.todo-list').should('not.have.descendants', 'li')
    })
})