// require statement for outside libraries
const express = require('express');

// require other files from this project
const cartsRepo = require('../repositories/carts');
const productsRepo = require('../repositories/products');

const router = express.Router();

router.post('/cart/products', async (req, res) => {
    let cart;
    if (!req.session.cartId) {
        cart = await cartsRepo.create({ items: [] });
        req.session.cartId = cart.id;
    } else {
        cart = await cartsRepo.getOne(req.session.cartId);
    }

    try {
        const existingItem = cart.items.find(
            (item) => item.id === req.body.productId
        );

        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.items.push({ id: req.body.productId, quantity: 1 });
        }

        await cartsRepo.update(cart.id, {
            items: cart.items,
        });
    } catch {
        cart = await cartsRepo.create({ items: [] });
        req.session.cartId = cart.id;
    }

    res.redirect('/cart');
});

router.get('/cart', async (req, res) => {
    if (!req.session.cartId) {
        return res.redirect('/');
    }

    const cart = await cartsRepo.getOne(req.session.cartId);

    if (
        cart === undefined ||
        cart.items === undefined ||
        cart.items.length == 0
    ) {
        return res.redirect('/');
    }

    if (cart.items[9]) {
        const id2 = await productsRepo.getOne(cart.items[1].id);
        const id3 = await productsRepo.getOne(cart.items[2].id);
        const id4 = await productsRepo.getOne(cart.items[3].id);
        const id5 = await productsRepo.getOne(cart.items[4].id);
        const id6 = await productsRepo.getOne(cart.items[5].id);
        const id7 = await productsRepo.getOne(cart.items[6].id);
        const id8 = await productsRepo.getOne(cart.items[7].id);
        const id9 = await productsRepo.getOne(cart.items[8].id);
        const id10 = await productsRepo.getOne(cart.items[9].id);

        const quantity1 = cart.items[0].quantity;
        const quantity2 = cart.items[1].quantity;
        const quantity3 = cart.items[2].quantity;
        const quantity4 = cart.items[3].quantity;
        const quantity5 = cart.items[4].quantity;
        const quantity6 = cart.items[5].quantity;
        const quantity7 = cart.items[6].quantity;
        const quantity8 = cart.items[7].quantity;
        const quantity9 = cart.items[8].quantity;
        const quantity10 = cart.items[9].quantity;

        return res.render('cart', {
            id1: id1.id,
            id2: id2.id,
            id3: id3.id,
            id4: id4.id,
            id5: id5.id,
            id6: id6.id,
            id7: id7.id,
            id8: id8.id,
            id9: id9.id,
            id10: id10.id,
            title1: id1.title,
            title2: id2.title,
            title3: id3.title,
            title4: id4.title,
            title5: id5.title,
            title6: id6.title,
            title7: id7.title,
            title8: id8.title,
            title9: id9.title,
            title10: id10.title,
            price1: id1.price,
            price2: id2.price,
            price3: id3.price,
            price4: id4.price,
            price5: id5.price,
            price6: id6.price,
            price7: id7.price,
            price8: id8.price,
            price9: id9.price,
            price10: id10.price,
            quantity1,
            quantity2,
            quantity3,
            quantity4,
            quantity5,
            quantity6,
            quantity7,
            quantity8,
            quantity9,
            quantity10,
            total1: (id1.price * quantity1).toFixed(2),
            total2: (id2.price * quantity2).toFixed(2),
            total3: (id3.price * quantity3).toFixed(2),
            total4: (id4.price * quantity4).toFixed(2),
            total5: (id5.price * quantity5).toFixed(2),
            total6: (id6.price * quantity6).toFixed(2),
            total7: (id7.price * quantity7).toFixed(2),
            total8: (id8.price * quantity8).toFixed(2),
            total9: (id9.price * quantity9).toFixed(2),
            total10: (id10.price * quantity10).toFixed(2),
            subtotal: (
                id1.price * quantity1 +
                id2.price * quantity2 +
                id3.price * quantity3 +
                id4.price * quantity4 +
                id5.price * quantity5 +
                id6.price * quantity6 +
                id7.price * quantity7 +
                id8.price * quantity8 +
                id9.price * quantity9 +
                id10.price * quantity10
            ).toFixed(2),
        });
    }
    if (cart.items[8]) {
        const id1 = await productsRepo.getOne(cart.items[0].id);
        const id2 = await productsRepo.getOne(cart.items[1].id);
        const id3 = await productsRepo.getOne(cart.items[2].id);
        const id4 = await productsRepo.getOne(cart.items[3].id);
        const id5 = await productsRepo.getOne(cart.items[4].id);
        const id6 = await productsRepo.getOne(cart.items[5].id);
        const id7 = await productsRepo.getOne(cart.items[6].id);
        const id8 = await productsRepo.getOne(cart.items[7].id);
        const id9 = await productsRepo.getOne(cart.items[8].id);

        const quantity1 = cart.items[0].quantity;
        const quantity2 = cart.items[1].quantity;
        const quantity3 = cart.items[2].quantity;
        const quantity4 = cart.items[3].quantity;
        const quantity5 = cart.items[4].quantity;
        const quantity6 = cart.items[5].quantity;
        const quantity7 = cart.items[6].quantity;
        const quantity8 = cart.items[7].quantity;
        const quantity9 = cart.items[8].quantity;

        return res.render('cart', {
            id1: id1.id,
            id2: id2.id,
            id3: id3.id,
            id4: id4.id,
            id5: id5.id,
            id6: id6.id,
            id7: id7.id,
            id8: id8.id,
            id9: id9.id,
            title1: id1.title,
            title2: id2.title,
            title3: id3.title,
            title4: id4.title,
            title5: id5.title,
            title6: id6.title,
            title7: id7.title,
            title8: id8.title,
            title9: id9.title,
            price1: id1.price,
            price2: id2.price,
            price3: id3.price,
            price4: id4.price,
            price5: id5.price,
            price6: id6.price,
            price7: id7.price,
            price8: id8.price,
            price9: id9.price,
            quantity1,
            quantity2,
            quantity3,
            quantity4,
            quantity5,
            quantity6,
            quantity7,
            quantity8,
            quantity9,
            total1: (id1.price * quantity1).toFixed(2),
            total2: (id2.price * quantity2).toFixed(2),
            total3: (id3.price * quantity3).toFixed(2),
            total4: (id4.price * quantity4).toFixed(2),
            total5: (id5.price * quantity5).toFixed(2),
            total6: (id6.price * quantity6).toFixed(2),
            total7: (id7.price * quantity7).toFixed(2),
            total8: (id8.price * quantity8).toFixed(2),
            total9: (id9.price * quantity9).toFixed(2),
            subtotal: (
                id1.price * quantity1 +
                id2.price * quantity2 +
                id3.price * quantity3 +
                id4.price * quantity4 +
                id5.price * quantity5 +
                id6.price * quantity6 +
                id7.price * quantity7 +
                id8.price * quantity8 +
                id9.price * quantity9
            ).toFixed(2),
        });
    }
    if (cart.items[7]) {
        const id1 = await productsRepo.getOne(cart.items[0].id);
        const id2 = await productsRepo.getOne(cart.items[1].id);
        const id3 = await productsRepo.getOne(cart.items[2].id);
        const id4 = await productsRepo.getOne(cart.items[3].id);
        const id5 = await productsRepo.getOne(cart.items[4].id);
        const id6 = await productsRepo.getOne(cart.items[5].id);
        const id7 = await productsRepo.getOne(cart.items[6].id);
        const id8 = await productsRepo.getOne(cart.items[7].id);

        const quantity1 = cart.items[0].quantity;
        const quantity2 = cart.items[1].quantity;
        const quantity3 = cart.items[2].quantity;
        const quantity4 = cart.items[3].quantity;
        const quantity5 = cart.items[4].quantity;
        const quantity6 = cart.items[5].quantity;
        const quantity7 = cart.items[6].quantity;
        const quantity8 = cart.items[7].quantity;

        return res.render('cart', {
            id1: id1.id,
            id2: id2.id,
            id3: id3.id,
            id4: id4.id,
            id5: id5.id,
            id6: id6.id,
            id7: id7.id,
            id8: id8.id,
            title1: id1.title,
            title2: id2.title,
            title3: id3.title,
            title4: id4.title,
            title5: id5.title,
            title6: id6.title,
            title7: id7.title,
            title8: id8.title,
            price1: id1.price,
            price2: id2.price,
            price3: id3.price,
            price4: id4.price,
            price5: id5.price,
            price6: id6.price,
            price7: id7.price,
            price8: id8.price,
            quantity1,
            quantity2,
            quantity3,
            quantity4,
            quantity5,
            quantity6,
            quantity7,
            quantity8,
            total1: (id1.price * quantity1).toFixed(2),
            total2: (id2.price * quantity2).toFixed(2),
            total3: (id3.price * quantity3).toFixed(2),
            total4: (id4.price * quantity4).toFixed(2),
            total5: (id5.price * quantity5).toFixed(2),
            total6: (id6.price * quantity6).toFixed(2),
            total7: (id7.price * quantity7).toFixed(2),
            total8: (id8.price * quantity8).toFixed(2),
            subtotal: (
                id1.price * quantity1 +
                id2.price * quantity2 +
                id3.price * quantity3 +
                id4.price * quantity4 +
                id5.price * quantity5 +
                id6.price * quantity6 +
                id7.price * quantity7 +
                id8.price * quantity8
            ).toFixed(2),
        });
    }
    if (cart.items[6]) {
        const id1 = await productsRepo.getOne(cart.items[0].id);
        const id2 = await productsRepo.getOne(cart.items[1].id);
        const id3 = await productsRepo.getOne(cart.items[2].id);
        const id4 = await productsRepo.getOne(cart.items[3].id);
        const id5 = await productsRepo.getOne(cart.items[4].id);
        const id6 = await productsRepo.getOne(cart.items[5].id);
        const id7 = await productsRepo.getOne(cart.items[6].id);

        const quantity1 = cart.items[0].quantity;
        const quantity2 = cart.items[1].quantity;
        const quantity3 = cart.items[2].quantity;
        const quantity4 = cart.items[3].quantity;
        const quantity5 = cart.items[4].quantity;
        const quantity6 = cart.items[5].quantity;
        const quantity7 = cart.items[6].quantity;

        return res.render('cart', {
            id1: id1.id,
            id2: id2.id,
            id3: id3.id,
            id4: id4.id,
            id5: id5.id,
            id6: id6.id,
            id7: id7.id,
            title1: id1.title,
            title2: id2.title,
            title3: id3.title,
            title4: id4.title,
            title5: id5.title,
            title6: id6.title,
            title7: id7.title,
            price1: id1.price,
            price2: id2.price,
            price3: id3.price,
            price4: id4.price,
            price5: id5.price,
            price6: id6.price,
            price7: id7.price,
            quantity1,
            quantity2,
            quantity3,
            quantity4,
            quantity5,
            quantity6,
            quantity7,
            total1: (id1.price * quantity1).toFixed(2),
            total2: (id2.price * quantity2).toFixed(2),
            total3: (id3.price * quantity3).toFixed(2),
            total4: (id4.price * quantity4).toFixed(2),
            total5: (id5.price * quantity5).toFixed(2),
            total6: (id6.price * quantity6).toFixed(2),
            total7: (id7.price * quantity7).toFixed(2),
            subtotal: (
                id1.price * quantity1 +
                id2.price * quantity2 +
                id3.price * quantity3 +
                id4.price * quantity4 +
                id5.price * quantity5 +
                id6.price * quantity6 +
                id7.price * quantity7
            ).toFixed(2),
        });
    }
    if (cart.items[5]) {
        const id1 = await productsRepo.getOne(cart.items[0].id);
        const id2 = await productsRepo.getOne(cart.items[1].id);
        const id3 = await productsRepo.getOne(cart.items[2].id);
        const id4 = await productsRepo.getOne(cart.items[3].id);
        const id5 = await productsRepo.getOne(cart.items[4].id);
        const id6 = await productsRepo.getOne(cart.items[5].id);

        const quantity1 = cart.items[0].quantity;
        const quantity2 = cart.items[1].quantity;
        const quantity3 = cart.items[2].quantity;
        const quantity4 = cart.items[3].quantity;
        const quantity5 = cart.items[4].quantity;
        const quantity6 = cart.items[5].quantity;

        return res.render('cart', {
            id1: id1.id,
            id2: id2.id,
            id3: id3.id,
            id4: id4.id,
            id5: id5.id,
            id6: id6.id,
            title1: id1.title,
            title2: id2.title,
            title3: id3.title,
            title4: id4.title,
            title5: id5.title,
            title6: id6.title,
            price1: id1.price,
            price2: id2.price,
            price3: id3.price,
            price4: id4.price,
            price5: id5.price,
            price6: id6.price,
            quantity1,
            quantity2,
            quantity3,
            quantity4,
            quantity5,
            quantity6,
            total1: (id1.price * quantity1).toFixed(2),
            total2: (id2.price * quantity2).toFixed(2),
            total3: (id3.price * quantity3).toFixed(2),
            total4: (id4.price * quantity4).toFixed(2),
            total5: (id5.price * quantity5).toFixed(2),
            total6: (id6.price * quantity6).toFixed(2),
            subtotal: (
                id1.price * quantity1 +
                id2.price * quantity2 +
                id3.price * quantity3 +
                id4.price * quantity4 +
                id5.price * quantity5 +
                id6.price * quantity6
            ).toFixed(2),
        });
    }
    if (cart.items[4]) {
        const id1 = await productsRepo.getOne(cart.items[0].id);
        const id2 = await productsRepo.getOne(cart.items[1].id);
        const id3 = await productsRepo.getOne(cart.items[2].id);
        const id4 = await productsRepo.getOne(cart.items[3].id);
        const id5 = await productsRepo.getOne(cart.items[4].id);

        const quantity1 = cart.items[0].quantity;
        const quantity2 = cart.items[1].quantity;
        const quantity3 = cart.items[2].quantity;
        const quantity4 = cart.items[3].quantity;
        const quantity5 = cart.items[4].quantity;

        return res.render('cart', {
            id1: id1.id,
            id2: id2.id,
            id3: id3.id,
            id4: id4.id,
            id5: id5.id,
            title1: id1.title,
            title2: id2.title,
            title3: id3.title,
            title4: id4.title,
            title5: id5.title,
            price1: id1.price,
            price2: id2.price,
            price3: id3.price,
            price4: id4.price,
            price5: id5.price,
            quantity1,
            quantity2,
            quantity3,
            quantity4,
            quantity5,
            total1: (id1.price * quantity1).toFixed(2),
            total2: (id2.price * quantity2).toFixed(2),
            total3: (id3.price * quantity3).toFixed(2),
            total4: (id4.price * quantity4).toFixed(2),
            total5: (id5.price * quantity5).toFixed(2),
            subtotal: (
                id1.price * quantity1 +
                id2.price * quantity2 +
                id3.price * quantity3 +
                id4.price * quantity4 +
                id5.price * quantity5
            ).toFixed(2),
        });
    }
    if (cart.items[3]) {
        const id1 = await productsRepo.getOne(cart.items[0].id);
        const id2 = await productsRepo.getOne(cart.items[1].id);
        const id3 = await productsRepo.getOne(cart.items[2].id);
        const id4 = await productsRepo.getOne(cart.items[3].id);

        const quantity1 = cart.items[0].quantity;
        const quantity2 = cart.items[1].quantity;
        const quantity3 = cart.items[2].quantity;
        const quantity4 = cart.items[3].quantity;

        return res.render('cart', {
            id1: id1.id,
            id2: id2.id,
            id3: id3.id,
            id4: id4.id,
            title1: id1.title,
            title2: id2.title,
            title3: id3.title,
            title4: id4.title,
            price1: id1.price,
            price2: id2.price,
            price3: id3.price,
            price4: id4.price,
            quantity1,
            quantity2,
            quantity3,
            quantity4,
            total1: (id1.price * quantity1).toFixed(2),
            total2: (id2.price * quantity2).toFixed(2),
            total3: (id3.price * quantity3).toFixed(2),
            total4: (id4.price * quantity4).toFixed(2),
            subtotal: (
                id1.price * quantity1 +
                id2.price * quantity2 +
                id3.price * quantity3 +
                id4.price * quantity4
            ).toFixed(2),
        });
    }
    if (cart.items[2]) {
        const id1 = await productsRepo.getOne(cart.items[0].id);
        const id2 = await productsRepo.getOne(cart.items[1].id);
        const id3 = await productsRepo.getOne(cart.items[2].id);

        const quantity1 = cart.items[0].quantity;
        const quantity2 = cart.items[1].quantity;
        const quantity3 = cart.items[2].quantity;

        return res.render('cart', {
            id1: id1.id,
            id2: id2.id,
            id3: id3.id,
            title1: id1.title,
            title2: id2.title,
            title3: id3.title,
            price1: id1.price,
            price2: id2.price,
            price3: id3.price,
            quantity1,
            quantity2,
            quantity3,
            total1: (id1.price * quantity1).toFixed(2),
            total2: (id2.price * quantity2).toFixed(2),
            total3: (id3.price * quantity3).toFixed(2),
            subtotal: (
                id1.price * quantity1 +
                id2.price * quantity2 +
                id3.price * quantity3
            ).toFixed(2),
        });
    }
    if (cart.items[1]) {
        const id1 = await productsRepo.getOne(cart.items[0].id);
        const id2 = await productsRepo.getOne(cart.items[1].id);

        const quantity1 = cart.items[0].quantity;
        const quantity2 = cart.items[1].quantity;

        return res.render('cart', {
            id1: id1.id,
            id2: id2.id,
            title1: id1.title,
            title2: id2.title,
            price1: id1.price,
            price2: id2.price,
            quantity1,
            quantity2,
            total1: (id1.price * quantity1).toFixed(2),
            total2: (id2.price * quantity2).toFixed(2),
            subtotal: (id1.price * quantity1 + id2.price * quantity2).toFixed(
                2
            ),
        });
    }
    if (cart.items[0]) {
        const id1 = await productsRepo.getOne(cart.items[0].id);

        const quantity1 = cart.items[0].quantity;

        return res.render('cart', {
            id1: id1.id,
            title1: id1.title,
            price1: id1.price,
            quantity1,
            total1: (id1.price * quantity1).toFixed(2),
            subtotal: (id1.price * quantity1).toFixed(2),
        });
    }
});

router.post('/cart/products/delete', async (req, res) => {
    const { itemId } = req.body;
    const cart = await cartsRepo.getOne(req.session.cartId);

    const items = cart.items.filter((item) => item.id !== itemId);

    await cartsRepo.update(req.session.cartId, { items });

    res.redirect('/cart');
});

module.exports = router;
