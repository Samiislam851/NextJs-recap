import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { render, screen } from "@testing-library/react"
import SlideForm from "../SlideForm"

describe('Slide form component', () => {


    it('renders correctly', () => {
        render(<SlideForm setIsFormOpen={() => { }} isFormOpen={true} />)
        const h3 = screen.getByText('Add Role Profile')
        expect(h3).toBeInTheDocument()
    })

    it('toggles form visibility when cancel button is clicked', async () => {
        const setIsFormOpenMock = jest.fn()
        render(<SlideForm setIsFormOpen={setIsFormOpenMock} isFormOpen={true} />)
        await userEvent.click(screen.getByRole('button', { name: 'Cancel' }));
        expect(setIsFormOpenMock).toHaveBeenCalledTimes(1)
    })


})