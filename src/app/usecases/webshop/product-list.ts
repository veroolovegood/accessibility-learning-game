export interface ColorWithImage {
  image: string;
  color: string;
}

export interface Product {
  uniqueName: string;
  name: string;
  regularPrice: number;
  reducedPrice: number;
  colors: ColorWithImage[];
}

export const productList: Product[] = [
  {
    uniqueName: 'shorts',
    name: 'Kurze Hose',
    regularPrice: 49.99,
    reducedPrice: 34.99,
    colors: [
      {
        image: 'jeans_lightyellow.png',
        color: '#FEDC9C'
      },
      {
        image: 'jeans_lightblue.png',
        color: '#AFFCF6'
      },
      {
        image: 'jeans_lightred.png',
        color: '#FC8383'
      },
      {
        image: 'jeans_darkgreen.png',
        color: '#687B3D'
      }
    ]
  } as Product,
  {
    uniqueName: 'shirt',
    name: 'T-Shirt',
    regularPrice: 29.99,
    reducedPrice: 12.99,
    colors: [
      {
        image: 'shirt_blue.png',
        color: '#555DFF'
      },
      {
        image: 'shirt_orange.png',
        color: '#FF7700'
      },
      {
        image: 'shirt_lightyellow.png',
        color: '#FFE8B7'
      },
      {
        image: 'shirt_pink.png',
        color: '#FF008C'
      }
    ]
  } as Product
];

