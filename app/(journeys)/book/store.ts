import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface BookingActions {
    setService: (serviceIdentifier: number) => void;
}

interface BookingState {
    currentService: number | null;
}

const initialState: BookingState = {
    currentService: null,
};


const useBookingStore = create<BookingState & BookingActions>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        setService: (serviceIdentifier) => set(() => ({ currentService: serviceIdentifier })),
      }),
      { name: 'bookingStore' },
    ),
  ),
)

export default useBookingStore;