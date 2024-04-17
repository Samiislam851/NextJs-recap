import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { render, screen } from "@testing-library/react"
import SlideForm from "../SlideForm"

describe('Slide form component', () => {
    const setIsFormOpenMock = jest.fn()

    it('renders correctly', () => {
        render(<SlideForm setIsFormOpen={() => { }} isFormOpen={true} />)
        const h3 = screen.getByText('Role Name')
        expect(h3).toBeInTheDocument()
    })

    it('toggles form visibility when cancel button is clicked', async () => {

        render(<SlideForm setIsFormOpen={setIsFormOpenMock} isFormOpen={true} />)
        await userEvent.click(screen.getByRole('button', { name: 'Cancel' }));
        expect(setIsFormOpenMock).toHaveBeenCalledTimes(1)
    })

    it('Adds new role when add more button is clicked ', async () => {
        render(<SlideForm setIsFormOpen={setIsFormOpenMock} isFormOpen={true} />)
        await userEvent.click(screen.getByTestId('add-more-button'))

        expect(screen.getAllByRole('text-box')).toHaveLength(4)
    })


    it('submits form with valid data', async () => {
        const mockSubmit = jest.fn();
        render(<SlideForm setIsFormOpen={setIsFormOpenMock} isFormOpen={true} />);

        // Simulate user input
        await userEvent.type(screen.getByLabelText('Role Name'), 'Test name');
        await userEvent.type(screen.getByLabelText('Role Details'), 'Test Details');
        await userEvent.click(screen.getByText('Create'));

        // Expect the submit handler provided by react-hook-form to be called with the expected data
        expect(mockSubmit).toHaveBeenCalledWith({ roles: [{ name: 'Test name', details: 'Test Details' }] });
    });




    test('Deletes role for clicking the delete icon', async () => {
        render(<SlideForm setIsFormOpen={setIsFormOpenMock} isFormOpen={true} />)

        await userEvent.click(screen.getByTestId('add-more-button')) // Add one more role
        expect(screen.getAllByRole('text-box')).toHaveLength(4)
        await userEvent.click(screen.getAllByTestId('delete-button')[0])
        expect(screen.getAllByRole('text-box')).toHaveLength(2)
    })
})