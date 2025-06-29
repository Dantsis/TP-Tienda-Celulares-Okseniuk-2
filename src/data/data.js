import iphone from '../assets/iphone.jpg';
import samsung from '../assets/samsung.jpg';
import xiaomi from '../assets/xiaomi.jpg';
import motorola from '../assets/motorola.png';


export const marcas = [
 { id: 1, nombre: 'Apple' },
 { id: 2, nombre: 'Samsung' },
 { id: 3, nombre: 'Xiaomi' },
 { id: 4, nombre: 'Motorola' }
];

export const celulares = [
  {
    id: 1,
    nombre: 'iPhone 14 Pro',
    descripcion: 'Pantalla Super Retina XDR, chip A16 Bionic, cámara de 48 MP',
    precio: 1299,
    marcaId: 1,
    fotos: [iphone]
  },
  {
    id: 2,
    nombre: 'Samsung Galaxy S23',
    descripcion: 'Pantalla AMOLED 6.1", Snapdragon 8 Gen 2, cámara triple',
    precio: 999,
    marcaId: 2,
    fotos: [samsung]
  },
  {
    id: 3,
    nombre: 'Xiaomi 13 Pro',
    descripcion: 'Pantalla AMOLED 6.73", cámara Leica, carga rápida 120W',
    precio: 899,
    marcaId: 3,
    fotos: [xiaomi]
  },
  {
    id: 4,
    nombre: 'Motorola Edge 40',
    descripcion: 'Pantalla pOLED, MediaTek Dimensity 8020, resistente al agua',
    precio: 699,
    marcaId: 4,
    fotos: [motorola]
  }
];

