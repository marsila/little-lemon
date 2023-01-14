import { render, screen } from '@testing-library/react';
import BookinForm from './components/BookingForm';

  test('Check if the u initialTimes methods is working as intened ', () => {
    
    const initTimes = jest.fn();
    render(<BookinForm 
            initTimes={initTimes}
          />);

  
    expect(initTimes).toHaveBeenCalledWith({
      occasionDate: '',
      avilableTimes:[]
    });

    

  });

  test('Check if the updateTimes  methods is working as intened ', () => {
    const updateTimes = jest.fn();
    
    render(<BookinForm 
            updateTimes={updateTimes}
            
          />);

  const dateInput = screen.getByLabelText(/Choose date/);
  fireEvent.change(dateInput, { target: { value: data.resDate } });

   

    expect(updateTimes).toHaveBeenCalledWith({
      ...state,
      avilableTimes:["hh:mm","17:00","18:00","19:00","20:00","21:00"]
    });

  });
