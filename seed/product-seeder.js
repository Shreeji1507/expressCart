var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping', {useNewUrlParser: true});
// mongoose.connect('mongodb+srv://dbShreeji:dbShreejiPassword@cluster0-1qsgc.mongodb.net/test?retryWrites=true', {useNewUrlParser: true});
Product.collection.deleteMany({});

var products = [
    new Product({
        imagePath: 'https://assets.adidas.com/images/h_600,f_auto,q_auto:sensitive,fl_lossy/dc826405d02142428e7ea97301256d81_9366/Ultraboost_Shoes_Grey_F36156_01_standard.jpg',
        title: "Adidas Ultraboosts",
        description: "Response Shoes Made For Long Runs On City Streets",
        price: 250
    }),
    new Product({
        imagePath: 'https://o.aolcdn.com/images/dims?quality=85&image_uri=https%3A%2F%2Fs.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F1f526ac0a181c4e73cee1b53b5d10a8%2F206322332%2FHarryPotter_HogwartsMystery_Key_Art.jpg&client=amp-blogside-v2&signature=9742f37de5015eef7cc3fa644fd57e64bb75ce1e',
        title: "Hogwarts Mystery",
        description: "The latest Harry Potter mobile game puts Hogwarts in your pocket",
        price: 50
    }),
    new Product({
        imagePath: 'https://s2.gaming-cdn.com/images/products/2467/orig/the-division-2-cover.jpg',
        title: "The Division 2",
        description: "Tom Clancy's The Division 2 is an online action role-playing video game developed by Massive Entertainment and published by Ubisoft.",
        price: 79.99
    }),
    new Product({
        imagePath: 'https://pmcfootwearnews.files.wordpress.com/2018/12/BS3022386_100_PR_A-e1545671248234.jpg?w=700&h=437&crop=1',
        title: "Curry 6",
        description: "Stephen Curry's new shoes by Under Armour",
        price: 130
    }),
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/71E4jqPPemL._SY355_.jpg',
        title: "Herschel Little America",
        description: "Herschel's Signature Backpack",
        price: 130
    }),
    new Product({
        imagePath: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/M/RX/MRXJ2/MRXJ2?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1551489675083',
        title: "Apple Airpods",
        description: "Apple's signature wireless headphones.",
        price: 230
    }),
    new Product({
        imagePath: 'https://www.nintendo.com/switch/assets/images/switch/buy-now/bundle_color_console.jpg',
        title: "Nintendo Switch",
        description: "The famous Nintendo Switch, allowing you to play anywhere, whether you are at home or on the go. You can enjoy all of the latest Nintendo games wherever you are",
        price: 380
    }),
    new Product({
        imagePath: 'https://cdn.vox-cdn.com/thumbor/w-Q-EY2bJUU9GJFsAqBVYKGvusE=/0x0:950x623/1200x800/filters:focal(399x236:551x388)/cdn.vox-cdn.com/uploads/chorus_image/image/59946211/Xbox_One_X_Screenshot_05.0.jpg',
        title: "Xbox One X",
        description: "Microsoft's most powerful console, perhaps the most powerful console on the market right now. Allows gaming up to 4K, and at 60 fps. Enjoy the best games at the best quality possible",
        price: 600
    }),
    new Product({
        imagePath: 'https://images.samsung.com/is/image/samsung/ca-ru7100-un75ru7100fxzc-frontblack-151332552?$PD_GALLERY_L_JPG$',
        title: "75\" UHD 4K Smart TV",
        description: "Samsung's gorgeous 75 inch 4K Smart TV",
        price: 2000
    }),
    new Product({
        imagePath: 'https://media.playstation.com/is/image/SCEA/playstation-4-pro-vertical-product-shot-01-us-21sep18?$native_t$',
        title: "PS4 Pro",
        description: "Sony's most powerful console. Competes directly with the Xbox One X, allows gaming up to 4K all at a cheaper price.",
        price: 400
    }),
    new Product({
        imagePath: 'https://www.flightclub.com/media/catalog/product/0/1/011920_1.jpg',
        title: "Air Jordan 6",
        description: "The 6th edition of Michael Jordan's famous shoes.",
        price: 240
    }),
    new Product({
        imagePath: 'https://multimedia.bbycastatic.ca/multimedia/products/1500x1500/107/10733/10733536.jpg',
        title: "Casio 88 Key Digital Piano",
        description: "This 88-key Casio CDP135CS digital piano blends Grand Piano acoustics with the compact size of an electronic keyboard, making it perfect for anyone without the space for a full-size piano.",
        price: 500
    }),
    new Product({
        imagePath: 'https://multimedia.bbycastatic.ca/multimedia/products/1500x1500/104/10449/10449542.jpg',
        title: "Yamaha Acoustic Guitar",
        description: "A scalloped bracing design enhances the low- and mid-range tones of the Yamaha FG800M acoustic guitar",
        price: 250
    }),
    new Product({
        imagePath: 'https://file-cdn.scdkey.com/product/20180918201754_scdk.jpg',
        title: "Call of Duty: Black Ops 4",
        description: "Call of Duty: Black Ops 4 is a multiplayer first-person shooter developed by Treyarch and published by Activision",
        price: 79.99
    }),
    new Product({
        imagePath: 'https://store.ubi.com/dw/image/v2/ABBS_PRD/on/demandware.static/-/Sites-masterCatalog/default/dw504db9d0/images/large/5afda5f788a7e34d25b5012f.jpg?sw=220&sh=440&sm=fit',
        title: "Assassin's Creed: Odyssey",
        description: "Assassin's Creed Odyssey is an action role-playing video game developed by Ubisoft Quebec and published by Ubisoft.",
        price: 79.99
    }),
    new Product({
        imagePath: 'https://images.giant-bicycles.com/b_white,c_pad,h_400,q_80/dlptzraok4vi9di1wdb1/MY19-Escape-3_Color-A.jpg',
        title: "Bike On Sale!",
        description: "8 Gear Bike, very nice",
        price: 500
    }),
    new Product({
        imagePath: 'https://www.hardwareheaven.com/wp-content/uploads/2018/01/header-1-932x402.jpg',
        title: "Asus ROG G703",
        description: "G703 is a beast with the power to take on today’s gaming desktops, thanks to its factory-overclocked 8th Generation Intel® Core™ i9 processor and NVIDIA® GeForce RTX™ 2080 graphics",
        price: 2500
    }),
    new Product({
        imagePath: 'https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/boje6kvctxfjbenvymkj/sportswear-windrunner-jacket-z3TqLr9y.jpg',
        title: "Nike Windbreaker",
        description: "Windbreaker by Nike",
        price: 140
    }),
    new Product({
        imagePath: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/bc4bf38f8ef048d29b81a6a600afcd3c_9366/Essentials_Track_Jacket_Black_BR1024_21_model.jpg',
        title: "Adidas Trackjacket",
        description: "Trackjacket by Adidas",
        price: 140
    }),
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/819rrT1T3pL._SL1500_.jpg',
        title: "Razer Blackwidow Chroma",
        description: "Mechanical Keyboard by Razer, featuring their custom green switches",
        price: 180
    }),
    new Product({
        imagePath: 'https://www.logitechg.com/content/dam/gaming/en/products/g502-hero/g502-hero-intro.png.imgw.1888.1888.png',
        title: "Logitech G502",
        description: "Logitech Gaming mouse",
        price: 130
    }),
    new Product({
        imagePath: 'https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/d285610e30664900b857a7fa00ed0201_9366/Superstar_Shoes_White_C77124_01_standard.jpg',
        title: "Adidas Shoes",
        description: "The full grain leather upper makes these trainers comfortable and soft on your feet.",
        price: 100
    }),
    new Product({
        imagePath: 'https://c.static-nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/vhmvl5yhkuqimodshp6f/sportswear-joggers-4VTnJoJo.jpg',
        title: "Nike Joggers",
        description: "The Nike Sportswear Men's Joggers are made with soft, French terry fabric for all-day comfort without sacrificing style.",
        price: 90
    }),
    new Product({
        imagePath: 'https://s7d4.scene7.com/is/image/JCPenney/a358b39f-4cb9-11e8-b45f-253aca273a2b.jpg?wid=350&hei=350&op_usm=.4,.8,0,0&resmode=sharp2',
        title: "Nike Dri-Fit Shirt",
        description: "Nike T-Shirt made with Dri-Fit technology",
        price: 40
    }),
    
];

var done = 0; 
for (var i =0; i < products.length; i++)
{
    products[i].save(function(err, result){
        done++;
        if (done === products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}
