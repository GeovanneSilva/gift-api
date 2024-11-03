import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const data = {
  "Cozinha": [
    { "item": "Jogo de talheres", "disabled": false },
    { "item": "Jogo de prato", "disabled": false },
    { "item": "Jogo de copo", "disabled": false },
    { "item": "Jogo de canecas", "disabled": false },
    { "item": "Kit de facas", "disabled": false },
    { "item": "Kit tigelas", "disabled": false },
    { "item": "Tábua de cortar carne", "disabled": false },
    { "item": "Jogo de panelas", "disabled": false },
    { "item": "Jogo de frigideiras", "disabled": false },
    { "item": "Garrafa de café", "disabled": false },
    { "item": "Escorredor de macarrão", "disabled": false },
    { "item": "Escorredor de arroz", "disabled": false },
    { "item": "Porta tempero", "disabled": false }
  ],
  "Cama, Mesa e Banho": [
    { "item": "Jogo de cama", "disabled": false },
    { "item": "Jogo de lençóis", "disabled": false },
    { "item": "Jogo de toalhas", "disabled": false }
  ],
  "Área de serviço": [
    { "item": "Mop", "disabled": false },
    { "item": "Pano de chão / flanela", "disabled": false },
    { "item": "Varal", "disabled": false },
    { "item": "Tapete", "disabled": false }
  ],
  "Eletrodomésticos": [
    { "item": "Air fryer", "disabled": false },
    { "item": "Liquidificador", "disabled": false },
    { "item": "Sanduicheira", "disabled": false },
    { "item": "Mini processador", "disabled": false },
    { "item": "Cafeteira", "disabled": false },
    { "item": "Aspirador", "disabled": false },
    { "item": "Batedeira", "disabled": false },
    { "item": "Ferro de passar", "disabled": false }
  ],
  "Banheiro": [
    { "item": "Cesto de roupas", "disabled": false },
    { "item": "Kit de banheiro", "disabled": false },
    { "item": "Tapete", "disabled": false },
    { "item": "Lixeira", "disabled": false }
  ]
};

async function main() {
  for (const [categoryName, items] of Object.entries(data)) {
    const category = await prisma.category.create({
      data: {
        name: categoryName,
        items: {
          create: items,
        },
      },
    });
    console.log(`Created category ${categoryName}`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
