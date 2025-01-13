import { render } from '@testing-library/react';
import Users from '.';

describe('User', () => {
  test('renders TestComponent', () => {
    const { getByText } = render(<Users />);
    expect(getByText(/Hello, Jest!/i)).toBeInTheDocument();
  });
});
