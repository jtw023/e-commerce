// require statement for outside libraries
const express = require('express');

// require other files from this project
const productsRepo = require('../repositories/products');

const router = express.Router();

// What to show for the home page
router.get('/', async (req, res) => {
    const products = await productsRepo.getAll();

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

        const image1 = products[0].image;
        const image2 = products[1].image;
        const image3 = products[2].image;
        const image4 = products[3].image;
        const image5 = products[4].image;
        const image6 = products[5].image;
        const image7 = products[6].image;
        const image8 = products[7].image;
        const image9 = products[8].image;
        const image10 = products[9].image;
        const image11 = products[10].image;
        const image12 = products[11].image;
        const image13 = products[12].image;
        const image14 = products[13].image;
        const image15 = products[14].image;

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

        return res.render('index', {
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
            image1,
            image2,
            image3,
            image4,
            image5,
            image6,
            image7,
            image8,
            image9,
            image10,
            image11,
            image12,
            image13,
            image14,
            image15,
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

        const image1 = products[0].image;
        const image2 = products[1].image;
        const image3 = products[2].image;
        const image4 = products[3].image;
        const image5 = products[4].image;
        const image6 = products[5].image;
        const image7 = products[6].image;
        const image8 = products[7].image;
        const image9 = products[8].image;
        const image10 = products[9].image;
        const image11 = products[10].image;
        const image12 = products[11].image;
        const image13 = products[12].image;
        const image14 = products[13].image;

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

        return res.render('index', {
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
            image1,
            image2,
            image3,
            image4,
            image5,
            image6,
            image7,
            image8,
            image9,
            image10,
            image11,
            image12,
            image13,
            image14,
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

        const image1 = products[0].image;
        const image2 = products[1].image;
        const image3 = products[2].image;
        const image4 = products[3].image;
        const image5 = products[4].image;
        const image6 = products[5].image;
        const image7 = products[6].image;
        const image8 = products[7].image;
        const image9 = products[8].image;
        const image10 = products[9].image;
        const image11 = products[10].image;
        const image12 = products[11].image;
        const image13 = products[12].image;

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

        return res.render('index', {
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
            image1,
            image2,
            image3,
            image4,
            image5,
            image6,
            image7,
            image8,
            image9,
            image10,
            image11,
            image12,
            image13,
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

        const image1 = products[0].image;
        const image2 = products[1].image;
        const image3 = products[2].image;
        const image4 = products[3].image;
        const image5 = products[4].image;
        const image6 = products[5].image;
        const image7 = products[6].image;
        const image8 = products[7].image;
        const image9 = products[8].image;
        const image10 = products[9].image;
        const image11 = products[10].image;
        const image12 = products[11].image;

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

        return res.render('index', {
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
            image1,
            image2,
            image3,
            image4,
            image5,
            image6,
            image7,
            image8,
            image9,
            image10,
            image11,
            image12,
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

        const image1 = products[0].image;
        const image2 = products[1].image;
        const image3 = products[2].image;
        const image4 = products[3].image;
        const image5 = products[4].image;
        const image6 = products[5].image;
        const image7 = products[6].image;
        const image8 = products[7].image;
        const image9 = products[8].image;
        const image10 = products[9].image;
        const image11 = products[10].image;

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

        return res.render('index', {
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
            image1,
            image2,
            image3,
            image4,
            image5,
            image6,
            image7,
            image8,
            image9,
            image10,
            image11,
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

        const image1 = products[0].image;
        const image2 = products[1].image;
        const image3 = products[2].image;
        const image4 = products[3].image;
        const image5 = products[4].image;
        const image6 = products[5].image;
        const image7 = products[6].image;
        const image8 = products[7].image;
        const image9 = products[8].image;
        const image10 = products[9].image;

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

        return res.render('index', {
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
            image1,
            image2,
            image3,
            image4,
            image5,
            image6,
            image7,
            image8,
            image9,
            image10,
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

        const image1 = products[0].image;
        const image2 = products[1].image;
        const image3 = products[2].image;
        const image4 = products[3].image;
        const image5 = products[4].image;
        const image6 = products[5].image;
        const image7 = products[6].image;
        const image8 = products[7].image;
        const image9 = products[8].image;

        const id1 = products[0].id;
        const id2 = products[1].id;
        const id3 = products[2].id;
        const id4 = products[3].id;
        const id5 = products[4].id;
        const id6 = products[5].id;
        const id7 = products[6].id;
        const id8 = products[7].id;
        const id9 = products[8].id;

        return res.render('index', {
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
            image1,
            image2,
            image3,
            image4,
            image5,
            image6,
            image7,
            image8,
            image9,
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

        const image1 = products[0].image;
        const image2 = products[1].image;
        const image3 = products[2].image;
        const image4 = products[3].image;
        const image5 = products[4].image;
        const image6 = products[5].image;
        const image7 = products[6].image;
        const image8 = products[7].image;

        const id1 = products[0].id;
        const id2 = products[1].id;
        const id3 = products[2].id;
        const id4 = products[3].id;
        const id5 = products[4].id;
        const id6 = products[5].id;
        const id7 = products[6].id;
        const id8 = products[7].id;

        return res.render('index', {
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
            image1,
            image2,
            image3,
            image4,
            image5,
            image6,
            image7,
            image8,
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

        const image1 = products[0].image;
        const image2 = products[1].image;
        const image3 = products[2].image;
        const image4 = products[3].image;
        const image5 = products[4].image;
        const image6 = products[5].image;
        const image7 = products[6].image;

        const id1 = products[0].id;
        const id2 = products[1].id;
        const id3 = products[2].id;
        const id4 = products[3].id;
        const id5 = products[4].id;
        const id6 = products[5].id;
        const id7 = products[6].id;

        return res.render('index', {
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
            image1,
            image2,
            image3,
            image4,
            image5,
            image6,
            image7,
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

        const image1 = products[0].image;
        const image2 = products[1].image;
        const image3 = products[2].image;
        const image4 = products[3].image;
        const image5 = products[4].image;
        const image6 = products[5].image;

        const id1 = products[0].id;
        const id2 = products[1].id;
        const id3 = products[2].id;
        const id4 = products[3].id;
        const id5 = products[4].id;
        const id6 = products[5].id;

        return res.render('index', {
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
            image1,
            image2,
            image3,
            image4,
            image5,
            image6,
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

        const image1 = products[0].image;
        const image2 = products[1].image;
        const image3 = products[2].image;
        const image4 = products[3].image;
        const image5 = products[4].image;

        const id1 = products[0].id;
        const id2 = products[1].id;
        const id3 = products[2].id;
        const id4 = products[3].id;
        const id5 = products[4].id;

        return res.render('index', {
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
            image1,
            image2,
            image3,
            image4,
            image5,
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

        const image1 = products[0].image;
        const image2 = products[1].image;
        const image3 = products[2].image;
        const image4 = products[3].image;

        const id1 = products[0].id;
        const id2 = products[1].id;
        const id3 = products[2].id;
        const id4 = products[3].id;

        return res.render('index', {
            title1,
            title2,
            title3,
            title4,
            price1,
            price2,
            price3,
            price4,
            image1,
            image2,
            image3,
            image4,
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

        const image1 = products[0].image;
        const image2 = products[1].image;
        const image3 = products[2].image;

        const id1 = products[0].id;
        const id2 = products[1].id;
        const id3 = products[2].id;

        return res.render('index', {
            title1,
            title2,
            title3,
            price1,
            price2,
            price3,
            image1,
            image2,
            image3,
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

        const image1 = products[0].image;
        const image2 = products[1].image;

        const id1 = products[0].id;
        const id2 = products[1].id;

        return res.render('index', {
            title1,
            title2,
            price1,
            price2,
            image1,
            image2,
            id1,
            id2,
        });
    }
    if (products[0]) {
        const title1 = products[0].title;
        const price1 = products[0].price;
        const image1 = products[0].image;
        const id1 = products[0].id;

        return res.render('index', {
            title1,
            price1,
            image1,
            id1,
        });
    }
});

module.exports = router;
