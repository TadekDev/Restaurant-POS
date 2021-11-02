const Foods= [
    {
        type: 'Đặc sản vùng miền',
        SKU:'01',
        image:'/image/banhxeo.jpg',
        name:'Bánh xèo miền tây',
        description: "- 2 cái Bánh Xèo \ - 6 cái bánh tráng \ - Rau, nước mắm, đồ chua ăn kèm" ,
        price:50,
        GIaGoc:40,
        Soluong:2,
        Dangco:0,
        STT:3,
    },
    {
        type: 'Đặc sản vùng miền',
        SKU:'02',
        image:'/image/Bunbohue.jpg',
        name:'Bún bò huế',
        description: "- 100g bò gân \ - 1 giò heo \ - 50g riêu cua\ - Rau, gia vị" ,
        price:50,
        GIaGoc:40,
        Soluong:2,
        Dangco:6,
        STT:1,
    },  
    {
        type: 'Đặc sản vùng miền',
        SKU:'03',
        image:'/image/Ganuong.jpg',
        name:'Gà nướng cơm lam',
        description: "- 1 gà nướng nguyên con 1,2kg -1,5kg \ - 4 ống cơm lam \ - Rau, gia vị" ,
        price:150,
        GIaGoc:100,
        Soluong:2,
        Dangco:1,
        STT:2,
    },
    {
        type: 'Đặc sản vùng miền',
        SKU:'04',
        image:'/image/nemnuong.jpg',
        name:'Nem nướng Nha Trang',
        description: "- 5 cây nem nướng \ - 5 bánh tráng \ - Rau, gia vị các loại" ,
        price:30,
        GIaGoc:20,
        Soluong:2,
        Dangco:5,
        STT:5,
    },    
    {
        type: 'Đặc sản vùng miền',
        SKU:'05',
        image:'/image/Pho.png',
        name:'Phở Hà Nội',
        description: "- 100g bò \ - 200g phở sợi \ - Rau, gia vị" ,
        price:40,
        GIaGoc:30,
        Soluong:2,
        Dangco:0,
        STT:1,
    },  
    {
        type: 'Đặc sản vùng miền',
        SKU:'06',
        image:'/image/Bundau.jpg',
        name:'Bún đậu mắm tôm',
        description: "- 1 phần bún đậu \ - bánh tráng, mắm tôm, rau, gia vị \ -1 viên simgum, 1 ly trà tắc tặng kèm" ,
        price:40,
        GIaGoc:30,
        Soluong:2,
        Dangco:0,
        STT:1,
    },    
    {
        type: 'Bình dân',
        SKU:'07',
        image:'/image/Banhmibokho.jpg',
        name:'Bánh mì bò kho',
        description: "- 1 phần bò kho \ - 2 bánh mì \ - Rau thơm" ,
        price:30, 
        GIaGoc:25,
        Soluong:2,
        Dangco:8,
        STT:4,
    },      
    {
        type: 'Bình dân',
        SKU:'08',
        image:'/image/chaolong.jpg',
        name:'Cháo lòng',
        description: "- 1 phần cháo với lòng heo các loại \ - 1 bánh tráng nướng \ - Rau thơm, gia vị" ,
        price:30,
        GIaGoc:25,
        Soluong:2,
        Dangco:8,
        STT:1,
    },   
    {
        type: 'Bình dân',
        SKU:'09',
        image:'/image/comtam.jpg',
        name:'Cơm tấm',
        description: "- 1 phần cơm \ - 1 sườn nướng \ - 1 trứng chả\ - Bì, tóp mỡ, dưa leo, cà chua\ - Nước mắn, gia vị các loại" ,       
        price:25,
        GIaGoc:20,
        Soluong:2,
        Dangco:6,
        STT:2,
    },        
    {
        type: 'Bình dân',
        SKU:'10',
        image:'/image/mixao.jpg',
        name:'Mì xào hải sản',
        description: "- 200g mì \ - 100g tôm \ -100g thịt\ - Gia vị" ,
        price:20,
        GIaGoc:15,
        Soluong:2,
        Dangco:1,
        STT:3,
    },  
    {
        type: 'Bình dân',
        SKU:'11',
        image:'/image/Xoiga.jpg',
        name:'Xôi gà',
        description: "- 1 phần xôi \ - Gà nướng xe\ - 2 trứng cút chiên" ,
        price:20,
        GIaGoc:15,
        Soluong:2,
        Dangco:1,
        STT:3,
    },   
    {
        type: 'Bình dân',
        SKU:'12',
        image:'/image/Hutieu.jpg',
        name:'Hủ tiếu',
        description: "- Bún sợi \ - Giò\ - Cá viên, bò viên \ - Rau, nước dùng " ,
        price:20,
        GIaGoc:15,
        Soluong:2,
        Dangco:1,
        STT:3,
    },
    {
        type: 'Lẩu',
        SKU:'13',
        image:'/image/Laucaduoi.jpg',
        name:'Lẩu cá đuối',
        description: "- 1 phần lẩu cá đuối + hải sản 2 người ăn \ - 2 phần bún sợi \ - 2 bánh tráng nướng\ - Rau, gia vị" ,
        price:90,
        GIaGoc:60,
        Soluong:2,
        Dangco:3,
        STT:5,
    },     
    {
        type: 'lẩu',
        SKU:'14',
        image:'/image/Laubo.jpg',
        name:'Lẩu bò thập cẩm',
        description: "- 1 phần lẩu đuôi bò 2 người ăn \ - 200g thịt bò thái mỏng \ - Bún, khoai môn, Củ Sen \ - Rau, gia vị" ,
        price:120,
        GIaGoc:100,
        Soluong:2,
        Dangco:3,
        STT:5,
    }, 
    {
        type: 'Lẩu',
        SKU:'15',
        image:'/image/Laucadieuhong.jpg',
        name:'Lẩu cá diêu hồng',
        description: "Nước lẩu có vị ngọt chua nhẹ với Cá Diêu Hồng, thơm, rau chua \ - Bún, rau gia vị ăn kèm" ,
        price:90,
        GIaGoc:70,
        Soluong:2,
        Dangco:3,
        STT:5,
    }, 
    {
        type: 'Lẩu',
        SKU:'16',
        image:'/image/Lauga.jpg',
        name:'Lẩu gà lá giang',
        description: "- 1 phần lẩu 1/2 con gà, lá giang\ - 2 phần bún sợi \ - 2 bánh tráng nướng\ - Rau, gia vị" ,
        price:90,
        GIaGoc:60,
        Soluong:2,
        Dangco:3,
        STT:5,
    }, 
    {
        type: 'Lẩu',
        SKU:'17',
        image:'/image/Lauchay.jpg',
        name:'Lẩu chay',
        description: "- 1 phần lẩu chay 1 người ăn \ - Bún sợi \ - Rau, gia vị \ - Nước tặng kèm" ,
        price:35,
        GIaGoc:25,
        Soluong:2,
        Dangco:3,
        STT:5,
    }, 
    {
        type: 'Lẩu',
        SKU:'18',
        image:'/image/Lautuxuyen.jpg',
        name:'Lẩu Tứ Xuyên',
        description: "- 1 phần lẩu tứ xuyên 2 người ăn \ - 2 phần bún sợi \ - 2 bánh tráng nướng\ - Rau, gia vị" ,
        price:90,
        GIaGoc:60,
        Soluong:2,
        Dangco:3,
        STT:5,
    }, 
    {
        type: 'Món Tây',
        SKU:'19',
        image:'/image/hamburger.png',
        name:'Hamburger Bò Cheese',
        description: "- 100g bò \ - 2 lát Cheese \ - Bánh mì, rau, gia vị" ,
        price:30,
        GIaGoc:20,
        Soluong:2,
        Dangco:0,
        STT:1,
    }, 
    {
        type: 'Món Tây',
        SKU:'20',
        image:'/image/MiY.jpg',
        name:'Mì Ý',
        description: "Mì ý sốt cà chua thịt băm phô mai" ,
        price:25,
        GIaGoc:20,
        Soluong:2,
        Dangco:0,
        STT:1,
    }, 
    {
        type: 'Món Tây',
        SKU:'21',
        image:'/image/beafsteak.jpg',
        name:'Beafsteak',
        description: "- 200g bò \ -Bắp nướng \ -Gia vị" ,
        price:40,
        GIaGoc:30,
        Soluong:2,
        Dangco:0,
        STT:1,
    }, 
    {
        type: 'Món Tây',
        SKU:'22',
        image:'/image/Khoaitaynghien.jpg',
        name:'Khoai tây Nghiền',
        description: "- Khoai tây \ - Sữa \ - Bơ \ - Gia vị" ,
        price:15,
        GIaGoc:10,
        Soluong:2,
        Dangco:0,
        STT:1,
    }, 
    {
        type: 'Món Tây',
        SKU:'23',
        image:'/image/pizza.jpg',
        name:'Potato Pizza',
        description: "- Thịt Ham \ - Thịt Bacom \ - Hành, Bắp, Khoai tây, phô mai" ,
        price:75,
        GIaGoc:60,
        Soluong:2,
        Dangco:0,
        STT:1,
    }, 
    {
        type: 'Món Tây',
        SKU:'24',
        image:'/image/Cahoi.png',
        name:'Cá hồi áp chảo Sốt cam',
        description: "- 200g Cá hồi \ - Măng tây \ - Cam tươi, Gia vị" ,
        price:40,
        GIaGoc:30,
        Soluong:2,
        Dangco:0,
        STT:1,
    }, 
    {
        type: 'Nước',
        SKU:'25',
        image:'/image/nuocsuoi.jpg',
        name:'Nước suối',
        description: "Nước suối Aquafina 500ml" ,
        price:6,
        GIaGoc:3,
        Soluong:5,
        Dangco:20,
        STT:6,
    },    
    {
        type: 'Nước',
        SKU:'26',
        image:'/image/coca.jpg',
        name:'Coca',
        description: "Coca vị nguyên bản 500ml" ,
        price:10,
        GIaGoc:5,
        Soluong:2,
        Dangco:12,
        STT:2,
    },    
    {
        type: 'Nước',
        SKU:'27',
        image:'/image/nuoccam.jpg',
        name:'Cam vắt',
        description: "400ml cam vắt" ,
        price:12,
        GIaGoc:6,
        Soluong:2,
        Dangco:5,
        STT:1,
    },    
    {
        type: 'Nước',
        SKU:'28',
        image:'/image/tratac.png',
        name:'Trà tắc',
        description: "- 300ml Trà tắc" ,
        price:10,
        GIaGoc:5,
        Soluong:2,
        Dangco:6,
        STT:3,
    },    
    {
        type: 'Nước',
        SKU:'29',
        image:'/image/sodachanh.jpg',
        name:'Soda Chanh',
        description: "- 300ml Soda chanh" ,
        price:15,
        GIaGoc:8,
        Soluong:2,
        Dangco:4,
        STT:4,
    },  
    {
        type: 'Nước',
        SKU:'30',
        image:'/image/ruousoju.jpeg',
        name:'Rượu Soju',
        description: "Chai 330ml Soju các loại" ,
        price:15,
        GIaGoc:8,
        Soluong:2,
        Dangco:4,
        STT:4,
    },  
] 
export default Foods