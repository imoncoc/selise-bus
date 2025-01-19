import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface TBus {
  id: string;
  name: string;
  busNo: string;
  seats: TSeat[];
}

export interface TSeat {
  id: string;
  number: string;
  isBooked: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  // private busesSubject = new BehaviorSubject<TBus[]>
  buses: TBus[] = [
    {
      id: '1',
      name: 'Shamoli',
      busNo: 'S098',
      seats: [
        { id: 'A1', number: 'A1', isBooked: false },
        { id: 'A2', number: 'A2', isBooked: false },
        { id: 'A3', number: 'A3', isBooked: false },
        { id: 'B1', number: 'B1', isBooked: false },
        { id: 'B2', number: 'B2', isBooked: false },
        { id: 'B3', number: 'B3', isBooked: false },
        { id: 'C1', number: 'C1', isBooked: false },
        { id: 'C2', number: 'C2', isBooked: false },
        { id: 'C3', number: 'C3', isBooked: false },
        { id: 'D1', number: 'D1', isBooked: false },
        { id: 'D2', number: 'D2', isBooked: false },
        { id: 'D3', number: 'D3', isBooked: false },
        { id: 'E1', number: 'E1', isBooked: false },
        { id: 'E2', number: 'E2', isBooked: false },
        { id: 'E3', number: 'E3', isBooked: false },
      ],
    },
    {
      id: '2',
      name: 'Green Line',
      busNo: 'GL123',
      seats: [
        { id: 'A1', number: 'A1', isBooked: false },
        { id: 'A2', number: 'A2', isBooked: false },
        { id: 'A3', number: 'A3', isBooked: false },
        { id: 'B1', number: 'B1', isBooked: false },
        { id: 'B2', number: 'B2', isBooked: false },
        { id: 'B3', number: 'B3', isBooked: false },
        { id: 'C1', number: 'C1', isBooked: false },
        { id: 'C2', number: 'C2', isBooked: false },
        { id: 'C3', number: 'C3', isBooked: false },
        { id: 'D1', number: 'D1', isBooked: false },
        { id: 'D2', number: 'D2', isBooked: false },
        { id: 'D3', number: 'D3', isBooked: false },
        { id: 'E1', number: 'E1', isBooked: false },
        { id: 'E2', number: 'E2', isBooked: false },
        { id: 'E3', number: 'E3', isBooked: false },
      ],
    },
    {
      id: '3',
      name: 'Hanif',
      busNo: 'H456',
      seats: [
        { id: 'A1', number: 'A1', isBooked: false },
        { id: 'A2', number: 'A2', isBooked: false },
        { id: 'A3', number: 'A3', isBooked: false },
        { id: 'B1', number: 'B1', isBooked: false },
        { id: 'B2', number: 'B2', isBooked: false },
        { id: 'B3', number: 'B3', isBooked: false },
        { id: 'C1', number: 'C1', isBooked: false },
        { id: 'C2', number: 'C2', isBooked: false },
        { id: 'C3', number: 'C3', isBooked: false },
        { id: 'D1', number: 'D1', isBooked: false },
        { id: 'D2', number: 'D2', isBooked: false },
        { id: 'D3', number: 'D3', isBooked: false },
        { id: 'E1', number: 'E1', isBooked: false },
        { id: 'E2', number: 'E2', isBooked: false },
        { id: 'E3', number: 'E3', isBooked: false },
      ],
    },
    {
      id: '4',
      name: 'Ena',
      busNo: 'E789',
      seats: [
        { id: 'A1', number: 'A1', isBooked: false },
        { id: 'A2', number: 'A2', isBooked: false },
        { id: 'A3', number: 'A3', isBooked: false },
        { id: 'B1', number: 'B1', isBooked: false },
        { id: 'B2', number: 'B2', isBooked: false },
        { id: 'B3', number: 'B3', isBooked: false },
        { id: 'C1', number: 'C1', isBooked: false },
        { id: 'C2', number: 'C2', isBooked: false },
        { id: 'C3', number: 'C3', isBooked: false },
        { id: 'D1', number: 'D1', isBooked: false },
        { id: 'D2', number: 'D2', isBooked: false },
        { id: 'D3', number: 'D3', isBooked: false },
        { id: 'E1', number: 'E1', isBooked: false },
        { id: 'E2', number: 'E2', isBooked: false },
        { id: 'E3', number: 'E3', isBooked: false },
      ],
    },
    {
      id: '5',
      name: 'Desh Travels',
      busNo: 'DT321',
      seats: [
        { id: 'A1', number: 'A1', isBooked: false },
        { id: 'A2', number: 'A2', isBooked: false },
        { id: 'A3', number: 'A3', isBooked: false },
        { id: 'B1', number: 'B1', isBooked: false },
        { id: 'B2', number: 'B2', isBooked: false },
        { id: 'B3', number: 'B3', isBooked: false },
        { id: 'C1', number: 'C1', isBooked: false },
        { id: 'C2', number: 'C2', isBooked: false },
        { id: 'C3', number: 'C3', isBooked: false },
        { id: 'D1', number: 'D1', isBooked: false },
        { id: 'D2', number: 'D2', isBooked: false },
        { id: 'D3', number: 'D3', isBooked: false },
        { id: 'E1', number: 'E1', isBooked: false },
        { id: 'E2', number: 'E2', isBooked: false },
        { id: 'E3', number: 'E3', isBooked: false },
      ],
    },
    {
      id: '6',
      name: 'Royal Coach',
      busNo: 'RC654',
      seats: [
        { id: 'A1', number: 'A1', isBooked: false },
        { id: 'A2', number: 'A2', isBooked: false },
        { id: 'A3', number: 'A3', isBooked: false },
        { id: 'B1', number: 'B1', isBooked: false },
        { id: 'B2', number: 'B2', isBooked: false },
        { id: 'B3', number: 'B3', isBooked: false },
        { id: 'C1', number: 'C1', isBooked: false },
        { id: 'C2', number: 'C2', isBooked: false },
        { id: 'C3', number: 'C3', isBooked: false },
        { id: 'D1', number: 'D1', isBooked: false },
        { id: 'D2', number: 'D2', isBooked: false },
        { id: 'D3', number: 'D3', isBooked: false },
        { id: 'E1', number: 'E1', isBooked: false },
        { id: 'E2', number: 'E2', isBooked: false },
        { id: 'E3', number: 'E3', isBooked: false },
      ],
    },
  ];

  constructor() {
    this.initializeStorage();
  }

  initializeStorage() {
    const busesInStorage = localStorage.getItem('buses');
    if (!busesInStorage) {
      // If no buses data in localStorage, add the predefined buses
      localStorage.setItem('buses', JSON.stringify(this.buses));
      console.log('Buses added to localStorage');
    } else {
      console.log('Buses already exist in localStorage');
    }
  }

  getBuses() {
    const busesInStorage = localStorage.getItem('buses');
    return busesInStorage ? JSON.parse(busesInStorage) : [];
  }

  updateBuses(updatedBuses: any[]) {
    localStorage.setItem('buses', JSON.stringify(updatedBuses));
  }

  getBusByName(id: string): TBus | undefined {
    return this.getBuses().find((bus: TBus) => bus.id === id);
  }

  // userBooking(busId: string, seatId: string, userDetails: any) {
  //   const buses = this.getBuses();
  //   const bus = buses.find((b: TBus) => b.id === busId);

  //   if (bus) {
  //     const seat = bus.seats.find((s: TSeat) => s.id === seatId);
  //     if (seat && !seat.isBooked) {
  //       // Update seat as booked
  //       seat.isBooked = true;
  //       this.updateBuses(buses); // Save updated buses to localStorage

  //       // Prepare booking data
  //       const bookingData = {
  //         busId: bus.id,
  //         busName: bus.name,
  //         seatId: seat.id,
  //         userDetails,
  //         bookingTime: new Date().toISOString(),
  //       };

  //       // Add booking data to localStorage
  //       const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
  //       bookings.push(bookingData);
  //       localStorage.setItem('bookings', JSON.stringify(bookings));

  //       console.log(`Seat ${seatId} has been booked successfully.`);
  //     } else {
  //       console.log(`Seat ${seatId} is already booked or does not exist.`);
  //     }
  //   } else {
  //     console.log('Bus not found.');
  //   }
  // }

  userBooking(busId: string, seatId: string, userDetails: any) {
    // Retrieve the buses data from localStorage
    const buses = this.getBuses();

    // Find the bus with the specified busId
    const bus = buses.find((b: TBus) => b.id === busId);

    if (bus) {
      // Find the seat with the specified seatId in the selected bus
      const seat = bus.seats.find((s: TSeat) => s.id === seatId);

      if (seat) {
        if (!seat.isBooked) {
          // Mark the seat as booked
          seat.isBooked = true;

          // Save the updated buses data back to localStorage
          this.updateBuses(buses);

          // Prepare booking data
          const bookingData = {
            busId: bus.id,
            busName: bus.name,
            seatId: seat.id,
            userDetails,
            bookingTime: new Date().toISOString(),
          };

          // Add the booking data to the `bookings` key in localStorage
          const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
          bookings.push(bookingData);
          localStorage.setItem('bookings', JSON.stringify(bookings));

          console.log(`Seat ${seatId} has been booked successfully.`);
        } else {
          console.log(`Seat ${seatId} is already booked.`);
        }
      } else {
        console.log('Seat not found.');
      }
    } else {
      console.log('Bus not found.');
    }
  }
}
