import 'regenerator-runtime/runtime'
import React from 'react';
import App from '../App';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'


describe('<App />', () => {

  const setup = () => {
    const utils = render(<App />);
    const button = utils.queryByText('change');
    return {
      button,
      ...utils
    }
  }

  it('should render welcome message', () => {
    const app = setup();
    expect(app.getByText('Hello world!')).toBeInTheDocument();
  });

  it('should change message onButton Click', async () => {
    const app = setup();

    fireEvent.click(app.button);

    await waitFor(() => {
      expect(app.queryByText('Hello world!')).not.toBeInTheDocument();
      expect(app.getByText(/world!/)).toBeInTheDocument();
    });

  });

});