import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
  age: number;
  role: 'admin' | 'user' | 'moderator';
  createdAt: string;
  phone: string;
  address: string;
}

@Component({
  selector: 'app-hello-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Hello-work.component.html',
  styleUrl: './Hello-work.component.css',
})
export class HelloWorkComponent {
  users: User[] = [
    {
      id: 1,
      name: 'Ana García',
      email: 'ana.garcia@example.com',
      isActive: true,
      age: 29,
      role: 'admin',
      createdAt: '2023-08-15T10:30:00Z',
      phone: '+34 600 123 456',
      address: 'Calle Mayor 12, Madrid',
    },
    {
      id: 2,
      name: 'Carlos Ruiz',
      email: 'carlos.ruiz@example.com',
      isActive: false,
      age: 35,
      role: 'user',
      createdAt: '2022-11-10T09:00:00Z',
      phone: '+34 611 234 567',
      address: 'Av. Libertad 45, Barcelona',
    },
    {
      id: 3,
      name: 'Lucía Fernández',
      email: 'lucia.fernandez@example.com',
      isActive: true,
      age: 26,
      role: 'moderator',
      createdAt: '2024-01-20T13:45:00Z',
      phone: '+34 622 345 678',
      address: 'Calle Sol 8, Valencia',
    },
    {
      id: 4,
      name: 'Marcos López',
      email: 'marcos.lopez@example.com',
      isActive: true,
      age: 31,
      role: 'user',
      createdAt: '2021-06-18T15:20:00Z',
      phone: '+34 633 456 789',
      address: 'Calle Luna 33, Sevilla',
    },
    {
      id: 5,
      name: 'Sofía Martínez',
      email: 'sofia.martinez@example.com',
      isActive: false,
      age: 24,
      role: 'user',
      createdAt: '2023-03-10T12:10:00Z',
      phone: '+34 644 567 890',
      address: 'Plaza Nueva 5, Granada',
    },
    {
      id: 6,
      name: 'Diego Torres',
      email: 'diego.torres@example.com',
      isActive: true,
      age: 38,
      role: 'moderator',
      createdAt: '2020-09-01T08:00:00Z',
      phone: '+34 655 678 901',
      address: 'Av. de la Paz 22, Málaga',
    },
    {
      id: 7,
      name: 'Valentina Castro',
      email: 'valentina.castro@example.com',
      isActive: true,
      age: 28,
      role: 'admin',
      createdAt: '2022-12-05T17:50:00Z',
      phone: '+34 666 789 012',
      address: 'Calle Jardines 14, Bilbao',
    },
    {
      id: 8,
      name: 'Julián Herrera',
      email: 'julian.herrera@example.com',
      isActive: false,
      age: 33,
      role: 'user',
      createdAt: '2021-07-22T14:40:00Z',
      phone: '+34 677 890 123',
      address: 'Paseo del Río 19, Zaragoza',
    },
    {
      id: 9,
      name: 'Camila Rojas',
      email: 'camila.rojas@example.com',
      isActive: true,
      age: 30,
      role: 'user',
      createdAt: '2023-04-30T11:05:00Z',
      phone: '+34 688 901 234',
      address: 'Calle del Mar 7, Alicante',
    },
    {
      id: 10,
      name: 'Mateo Vargas',
      email: 'mateo.vargas@example.com',
      isActive: true,
      age: 27,
      role: 'moderator',
      createdAt: '2022-10-13T16:25:00Z',
      phone: '+34 699 012 345',
      address: 'Av. Central 88, Murcia',
    },
  ];
}
