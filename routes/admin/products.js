// require statement for outside libraries
const express = require('express');
const { validationResult } = require('express-validator');
const multer = require('multer');

// require other files from this project
const productsRepo = require('../../repositories/products');
const { requirePrice, requireTitle } = require('./validators');
const { requireAuth } = require('./middlewares');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.get('/admin/products', requireAuth, async (req, res) => {
    const products = await productsRepo.getAll();

    if (products === undefined || products.length == 0) {
        return res.redirect('/admin/products/new');
    }

    if (products[14]) {
        const title1 = products[0].title;
        const title2 = products[1].title;
        const title3 = products[2].title;
        const title4 = products[3].title;
        const title5 = products[4].title;
        const title6 = products[5].title;
        const title7 = products[6].title;
        const title8 = products[7].title;
        const title9 = products[8].title;
        const title10 = products[9].title;
        const title11 = products[10].title;
        const title12 = products[11].title;
        const title13 = products[12].title;
        const title14 = products[13].title;
        const title15 = products[14].title;

        const price1 = products[0].price;
        const price2 = products[1].price;
        const price3 = products[2].price;
        const price4 = products[3].price;
        const price5 = products[4].price;
        const price6 = products[5].price;
        const price7 = products[6].price;
        const price8 = products[7].price;
        const price9 = products[8].price;
        const price10 = products[9].price;
        const price11 = products[10].price;
        const price12 = products[11].price;
        const price13 = products[12].price;
        const price14 = products[13].price;
        const price15 = products[14].price;

        const id1 = products[0].id;
        const id2 = products[1].id;
        const id3 = products[2].id;
        const id4 = products[3].id;
        const id5 = products[4].id;
        const id6 = products[5].id;
        const id7 = products[6].id;
        const id8 = products[7].id;
        const id9 = products[8].id;
        const id10 = products[9].id;
        const id11 = products[10].id;
        const id12 = products[11].id;
        const id13 = products[12].id;
        const id14 = products[13].id;
        const id15 = products[14].id;

        return res.render('admin', {
            title1,
            title2,
            title3,
            title4,
            title5,
            title6,
            title7,
            title8,
            title9,
            title10,
            title11,
            title12,
            title13,
            title14,
            title15,
            price1,
            price2,
            price3,
            price4,
            price5,
            price6,
            price7,
            price8,
            price9,
            price10,
            price11,
            price12,
            price13,
            price14,
            price15,
            id1,
            id2,
            id3,
            id4,
            id5,
            id6,
            id7,
            id8,
            id9,
            id10,
            id11,
            id12,
            id13,
            id14,
            id15,
        });
    }
    if (products[13]) {
        const title1 = products[0].title;
        const title2 = products[1].title;
        const title3 = products[2].title;
        const title4 = products[3].title;
        const title5 = products[4].title;
        const title6 = products[5].title;
        const title7 = products[6].title;
        const title8 = products[7].title;
        const title9 = products[8].title;
        const title10 = products[9].title;
        const title11 = products[10].title;
        const title12 = products[11].title;
        const title13 = products[12].title;
        const title14 = products[13].title;

        const price1 = products[0].price;
        const price2 = products[1].price;
        const price3 = products[2].price;
        const price4 = products[3].price;
        const price5 = products[4].price;
        const price6 = products[5].price;
        const price7 = products[6].price;
        const price8 = products[7].price;
        const price9 = products[8].price;
        const price10 = products[9].price;
        const price11 = products[10].price;
        const price12 = products[11].price;
        const price13 = products[12].price;
        const price14 = products[13].price;

        const id1 = products[0].id;
        const id2 = products[1].id;
        const id3 = products[2].id;
        const id4 = products[3].id;
        const id5 = products[4].id;
        const id6 = products[5].id;
        const id7 = products[6].id;
        const id8 = products[7].id;
        const id9 = products[8].id;
        const id10 = products[9].id;
        const id11 = products[10].id;
        const id12 = products[11].id;
        const id13 = products[12].id;
        const id14 = products[13].id;

        return res.render('admin', {
            title1,
            title2,
            title3,
            title4,
            title5,
            title6,
            title7,
            title8,
            title9,
            title10,
            title11,
            title12,
            title13,
            title14,
            price1,
            price2,
            price3,
            price4,
            price5,
            price6,
            price7,
            price8,
            price9,
            price10,
            price11,
            price12,
            price13,
            price14,
            id1,
            id2,
            id3,
            id4,
            id5,
            id6,
            id7,
            id8,
            id9,
            id10,
            id11,
            id12,
            id13,
            id14,
        });
    }
    if (products[12]) {
        const title1 = products[0].title;
        const title2 = products[1].title;
        const title3 = products[2].title;
        const title4 = products[3].title;
        const title5 = products[4].title;
        const title6 = products[5].title;
        const title7 = products[6].title;
        const title8 = products[7].title;
        const title9 = products[8].title;
        const title10 = products[9].title;
        const title11 = products[10].title;
        const title12 = products[11].title;
        const title13 = products[12].title;

        const price1 = products[0].price;
        const price2 = products[1].price;
        const price3 = products[2].price;
        const price4 = products[3].price;
        const price5 = products[4].price;
        const price6 = products[5].price;
        const price7 = products[6].price;
        const price8 = products[7].price;
        const price9 = products[8].price;
        const price10 = products[9].price;
        const price11 = products[10].price;
        const price12 = products[11].price;
        const price13 = products[12].price;

        const id1 = products[0].id;
        const id2 = products[1].id;
        const id3 = products[2].id;
        const id4 = products[3].id;
        const id5 = products[4].id;
        const id6 = products[5].id;
        const id7 = products[6].id;
        const id8 = products[7].id;
        const id9 = products[8].id;
        const id10 = products[9].id;
        const id11 = products[10].id;
        const id12 = products[11].id;
        const id13 = products[12].id;

        return res.render('admin', {
            title1,
            title2,
            title3,
            title4,
            title5,
            title6,
            title7,
            title8,
            title9,
            title10,
            title11,
            title12,
            title13,
            price1,
            price2,
            price3,
            price4,
            price5,
            price6,
            price7,
            price8,
            price9,
            price10,
            price11,
            price12,
            price13,
            id1,
            id2,
            id3,
            id4,
            id5,
            id6,
            id7,
            id8,
            id9,
            id10,
            id11,
            id12,
            id13,
        });
    }
    if (products[11]) {
        const title1 = products[0].title;
        const title2 = products[1].title;
        const title3 = products[2].title;
        const title4 = products[3].title;
        const title5 = products[4].title;
        const title6 = products[5].title;
        const title7 = products[6].title;
        const title8 = products[7].title;
        const title9 = products[8].title;
        const title10 = products[9].title;
        const title11 = products[10].title;
        const title12 = products[11].title;

        const price1 = products[0].price;
        const price2 = products[1].price;
        const price3 = products[2].price;
        const price4 = products[3].price;
        const price5 = products[4].price;
        const price6 = products[5].price;
        const price7 = products[6].price;
        const price8 = products[7].price;
        const price9 = products[8].price;
        const price10 = products[9].price;
        const price11 = products[10].price;
        const price12 = products[11].price;

        const id1 = products[0].id;
        const id2 = products[1].id;
        const id3 = products[2].id;
        const id4 = products[3].id;
        const id5 = products[4].id;
        const id6 = products[5].id;
        const id7 = products[6].id;
        const id8 = products[7].id;
        const id9 = products[8].id;
        const id10 = products[9].id;
        const id11 = products[10].id;
        const id12 = products[11].id;

        return res.render('admin', {
            title1,
            title2,
            title3,
            title4,
            title5,
            title6,
            title7,
            title8,
            title9,
            title10,
            title11,
            title12,
            price1,
            price2,
            price3,
            price4,
            price5,
            price6,
            price7,
            price8,
            price9,
            price10,
            price11,
            price12,
            id1,
            id2,
            id3,
            id4,
            id5,
            id6,
            id7,
            id8,
            id9,
            id10,
            id11,
            id12,
        });
    }
    if (products[10]) {
        const title1 = products[0].title;
        const title2 = products[1].title;
        const title3 = products[2].title;
        const title4 = products[3].title;
        const title5 = products[4].title;
        const title6 = products[5].title;
        const title7 = products[6].title;
        const title8 = products[7].title;
        const title9 = products[8].title;
        const title10 = products[9].title;
        const title11 = products[10].title;

        const price1 = products[0].price;
        const price2 = products[1].price;
        const price3 = products[2].price;
        const price4 = products[3].price;
        const price5 = products[4].price;
        const price6 = products[5].price;
        const price7 = products[6].price;
        const price8 = products[7].price;
        const price9 = products[8].price;
        const price10 = products[9].price;
        const price11 = products[10].price;

        const id1 = products[0].id;
        const id2 = products[1].id;
        const id3 = products[2].id;
        const id4 = products[3].id;
        const id5 = products[4].id;
        const id6 = products[5].id;
        const id7 = products[6].id;
        const id8 = products[7].id;
        const id9 = products[8].id;
        const id10 = products[9].id;
        const id11 = products[10].id;

        return res.render('admin', {
            title1,
            title2,
            title3,
            title4,
            title5,
            title6,
            title7,
            title8,
            title9,
            title10,
            title11,
            price1,
            price2,
            price3,
            price4,
            price5,
            price6,
            price7,
            price8,
            price9,
            price10,
            price11,
            id1,
            id2,
            id3,
            id4,
            id5,
            id6,
            id7,
            id8,
            id9,
            id10,
            id11,
        });
    }
    if (products[9]) {
        const title1 = products[0].title;
        const title2 = products[1].title;
        const title3 = products[2].title;
        const title4 = products[3].title;
        const title5 = products[4].title;
        const title6 = products[5].title;
        const title7 = products[6].title;
        const title8 = products[7].title;
        const title9 = products[8].title;
        const title10 = products[9].title;

        const price1 = products[0].price;
        const price2 = products[1].price;
        const price3 = products[2].price;
        const price4 = products[3].price;
        const price5 = products[4].price;
        const price6 = products[5].price;
        const price7 = products[6].price;
        const price8 = products[7].price;
        const price9 = products[8].price;
        const price10 = products[9].price;

        const id1 = products[0].id;
        const id2 = products[1].id;
        const id3 = products[2].id;
        const id4 = products[3].id;
        const id5 = products[4].id;
        const id6 = products[5].id;
        const id7 = products[6].id;
        const id8 = products[7].id;
        const id9 = products[8].id;
        const id10 = products[9].id;

        return res.render('admin', {
            title1,
            title2,
            title3,
            title4,
            title5,
            title6,
            title7,
            title8,
            title9,
            title10,
            price1,
            price2,
            price3,
            price4,
            price5,
            price6,
            price7,
            price8,
            price9,
            price10,
            id1,
            id2,
            id3,
            id4,
            id5,
            id6,
            id7,
            id8,
            id9,
            id10,
        });
    }
    if (products[8]) {
        const title1 = products[0].title;
        const title2 = products[1].title;
        const title3 = products[2].title;
        const title4 = products[3].title;
        const title5 = products[4].title;
        const title6 = products[5].title;
        const title7 = products[6].title;
        const title8 = products[7].title;
        const title9 = products[8].title;

        const price1 = products[0].price;
        const price2 = products[1].price;
        const price3 = products[2].price;
        const price4 = products[3].price;
        const price5 = products[4].price;
        const price6 = products[5].price;
        const price7 = products[6].price;
        const price8 = products[7].price;
        const price9 = products[8].price;

        const id1 = products[0].id;
        const id2 = products[1].id;
        const id3 = products[2].id;
        const id4 = products[3].id;
        const id5 = products[4].id;
        const id6 = products[5].id;
        const id7 = products[6].id;
        const id8 = products[7].id;
        const id9 = products[8].id;

        return res.render('admin', {
            title1,
            title2,
            title3,
            title4,
            title5,
            title6,
            title7,
            title8,
            title9,
            price1,
            price2,
            price3,
            price4,
            price5,
            price6,
            price7,
            price8,
            price9,
            id1,
            id2,
            id3,
            id4,
            id5,
            id6,
            id7,
            id8,
            id9,
        });
    }
    if (products[7]) {
        const title1 = products[0].title;
        const title2 = products[1].title;
        const title3 = products[2].title;
        const title4 = products[3].title;
        const title5 = products[4].title;
        const title6 = products[5].title;
        const title7 = products[6].title;
        const title8 = products[7].title;

        const price1 = products[0].price;
        const price2 = products[1].price;
        const price3 = products[2].price;
        const price4 = products[3].price;
        const price5 = products[4].price;
        const price6 = products[5].price;
        const price7 = products[6].price;
        const price8 = products[7].price;

        const id1 = products[0].id;
        const id2 = products[1].id;
        const id3 = products[2].id;
        const id4 = products[3].id;
        const id5 = products[4].id;
        const id6 = products[5].id;
        const id7 = products[6].id;
        const id8 = products[7].id;

        return res.render('admin', {
            title1,
            title2,
            title3,
            title4,
            title5,
            title6,
            title7,
            title8,
            price1,
            price2,
            price3,
            price4,
            price5,
            price6,
            price7,
            price8,
            id1,
            id2,
            id3,
            id4,
            id5,
            id6,
            id7,
            id8,
        });
    }
    if (products[6]) {
        const title1 = products[0].title;
        const title2 = products[1].title;
        const title3 = products[2].title;
        const title4 = products[3].title;
        const title5 = products[4].title;
        const title6 = products[5].title;
        const title7 = products[6].title;

        const price1 = products[0].price;
        const price2 = products[1].price;
        const price3 = products[2].price;
        const price4 = products[3].price;
        const price5 = products[4].price;
        const price6 = products[5].price;
        const price7 = products[6].price;

        const id1 = products[0].id;
        const id2 = products[1].id;
        const id3 = products[2].id;
        const id4 = products[3].id;
        const id5 = products[4].id;
        const id6 = products[5].id;
        const id7 = products[6].id;

        return res.render('admin', {
            title1,
            title2,
            title3,
            title4,
            title5,
            title6,
            title7,
            price1,
            price2,
            price3,
            price4,
            price5,
            price6,
            price7,
            id1,
            id2,
            id3,
            id4,
            id5,
            id6,
            id7,
        });
    }
    if (products[5]) {
        const title1 = products[0].title;
        const title2 = products[1].title;
        const title3 = products[2].title;
        const title4 = products[3].title;
        const title5 = products[4].title;
        const title6 = products[5].title;

        const price1 = products[0].price;
        const price2 = products[1].price;
        const price3 = products[2].price;
        const price4 = products[3].price;
        const price5 = products[4].price;
        const price6 = products[5].price;

        const id1 = products[0].id;
        const id2 = products[1].id;
        const id3 = products[2].id;
        const id4 = products[3].id;
        const id5 = products[4].id;
        const id6 = products[5].id;

        return res.render('admin', {
            title1,
            title2,
            title3,
            title4,
            title5,
            title6,
            price1,
            price2,
            price3,
            price4,
            price5,
            price6,
            id1,
            id2,
            id3,
            id4,
            id5,
            id6,
        });
    }
    if (products[4]) {
        const title1 = products[0].title;
        const title2 = products[1].title;
        const title3 = products[2].title;
        const title4 = products[3].title;
        const title5 = products[4].title;

        const price1 = products[0].price;
        const price2 = products[1].price;
        const price3 = products[2].price;
        const price4 = products[3].price;
        const price5 = products[4].price;

        const id1 = products[0].id;
        const id2 = products[1].id;
        const id3 = products[2].id;
        const id4 = products[3].id;
        const id5 = products[4].id;

        return res.render('admin', {
            title1,
            title2,
            title3,
            title4,
            title5,
            price1,
            price2,
            price3,
            price4,
            price5,
            id1,
            id2,
            id3,
            id4,
            id5,
        });
    }
    if (products[3]) {
        const title1 = products[0].title;
        const title2 = products[1].title;
        const title3 = products[2].title;
        const title4 = products[3].title;

        const price1 = products[0].price;
        const price2 = products[1].price;
        const price3 = products[2].price;
        const price4 = products[3].price;

        const id1 = products[0].id;
        const id2 = products[1].id;
        const id3 = products[2].id;
        const id4 = products[3].id;

        return res.render('admin', {
            title1,
            title2,
            title3,
            title4,
            price1,
            price2,
            price3,
            price4,
            id1,
            id2,
            id3,
            id4,
        });
    }
    if (products[2]) {
        const title1 = products[0].title;
        const title2 = products[1].title;
        const title3 = products[2].title;

        const price1 = products[0].price;
        const price2 = products[1].price;
        const price3 = products[2].price;

        const id1 = products[0].id;
        const id2 = products[1].id;
        const id3 = products[2].id;

        return res.render('admin', {
            title1,
            title2,
            title3,
            price1,
            price2,
            price3,
            id1,
            id2,
            id3,
        });
    }
    if (products[1]) {
        const title1 = products[0].title;
        const title2 = products[1].title;

        const price1 = products[0].price;
        const price2 = products[1].price;

        const id1 = products[0].id;
        const id2 = products[1].id;

        return res.render('admin', {
            title1,
            title2,
            price1,
            price2,
            id1,
            id2,
        });
    }
    if (products[0]) {
        const title1 = products[0].title;
        const price1 = products[0].price;
        const id1 = products[0].id;

        return res.render('admin', {
            title1,
            price1,
            id1,
        });
    }
});

router.get('/admin/products/new', requireAuth, (req, res) => {
    res.render('newproducts');
});

router.post(
    '/admin/products/new',
    requireAuth,
    upload.single('image'),
    [requireTitle, requirePrice],
    async (req, res) => {
        const errors = validationResult(req);

        const { title, price } = req.body;

        if (!errors.isEmpty()) {
            if (errors.errors[0].param === 'title') {
                if (errors.errors[1]) {
                    res.render('newproducts', {
                        errorsTitle: errors.errors[0].msg,
                        errorsPrice: errors.errors[1].msg,
                    });
                } else {
                    res.render('newproducts', {
                        errorsTitle: errors.errors[0].msg,
                    });
                }
            } else if (errors.errors[0].param === 'price') {
                res.render('newproducts', {
                    errorsPrice: errors.errors[0].msg,
                });
            }
        } else {
            if (req.file) {
                const image = req.file.buffer.toString('base64');
                await productsRepo.create({ title, price, image });
            } else {
                await productsRepo.create({ title, price });
            }

            res.redirect('/admin/products');
        }
    }
);

router.get('/admin/products/*/edit', requireAuth, async (req, res) => {
    // console.log(req.params[0]);
    const product = await productsRepo.getOne(req.params[0]);

    if (!product) {
        return res.send('Product has likely been deleted from our inventory.');
    }

    res.render('edit', {
        title: product.title,
        price: product.price,
        image: product.image,
    });
});

router.post(
    '/admin/products/*/edit',
    requireAuth,
    upload.single('image'),
    [requireTitle, requirePrice],
    async (req, res) => {
        const errors = validationResult(req);
        const changes = req.body;

        const { title, price } = req.body;

        if (!errors.isEmpty()) {
            if (errors.errors[0].param === 'title') {
                if (errors.errors[1]) {
                    res.render('edit', {
                        errorsTitle: errors.errors[0].msg,
                        errorsPrice: errors.errors[1].msg,
                    });
                } else {
                    res.render('edit', {
                        errorsTitle: errors.errors[0].msg,
                    });
                }
            } else if (errors.errors[0].param === 'price') {
                res.render('edit', {
                    errorsPrice: errors.errors[0].msg,
                });
            }
        } else {
            if (req.file) {
                changes.image = req.file.buffer.toString('base64');
                try {
                    await productsRepo.update(req.params[0], changes);
                } catch {
                    return res.render('edit', {
                        error: 'Could not find item.',
                    });
                }
            } else {
                try {
                    await productsRepo.update(req.params[0], changes);
                } catch {
                    return res.render('edit', {
                        error: 'Could not find item.',
                    });
                }
            }

            res.redirect('/admin/products');
        }
    }
);

router.post('/admin/products/*/delete', requireAuth, async (req, res) => {
    await productsRepo.delete(req.params[0]);

    res.redirect('/admin/products');
});

module.exports = router;
