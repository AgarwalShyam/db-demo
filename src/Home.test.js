import { render, screen, waitFor } from '@testing-library/react';
import Home from './Home'



const response = [
    {
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "Desciption 1"
    },
    {
      id: 2,
      title: "qui est esse",
      body: "Desciption 2"
    }
]

describe('Home Page Component', () => {
    test('renders home page', () => {
        render(<Home />);
        const linkElement = screen.getByText('This is Home Page');
        expect(linkElement).toBeInTheDocument();
    });
    test('renders post data table', async () => {
        jest.spyOn(global, 'fetch').mockResolvedValue({
            json: jest.fn().mockResolvedValue(response)
        });
        render(<Home />);
        await waitFor(() => screen.getByText('This is post Table'));
        // screen.debug();
        const linkElement = screen.getByText('This is post Table');
        expect(screen.getByTestId('poststable')).toBeInTheDocument();
        expect(linkElement).toBeInTheDocument();
    });
})

