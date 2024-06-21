const restaurants = [
    {
        restaurantId: "DLR1",
        restaurantName: "アイスクリームコーン",
        restaurantImage: "DLR1",
        icons: ["frozen", "ice-cream-cup", "kebab"],
        hours: "10:00-19:00",
        locationImage: "DLR1_location"
    },
    {
        restaurantId: "DLR2",
        restaurantName: "イーストサイド・カフェ",
        restaurantImage: "DLR2",
        icons: ["ice-cream-cup", "spaghetti"],
        hours: "11:00-20:00",
        locationImage: "DLR2_location"
    },
    {
        restaurantId: "DLR3",
        restaurantName: "グレートアメリカン・ワッフルカンパニー",
        restaurantImage: "DLR3",
        icons: ["croissant", "ice-cream-cup", "kebab"],
        hours: "9:00-19:30",
        locationImage: "DLR3_location"
    },
    {
        restaurantId: "DLR4",
        restaurantName: "スウィートハート・カフェ\n",
        restaurantImage: "DLR4",
        icons: ["croissant", "ham", "hamburger", "ice-cream-cup", "kebab"],
        hours: "9:00-21:00",
        locationImage: "DLR4_location"
    },
    {
        restaurantId: "DLR5",
        restaurantName: "センターストリート・コーヒーハウス",
        restaurantImage: "DLR5",
        icons: ["coffee-cup", "cold-drink", "frozen", "ham", "ice-cream-cup", "plant-based", "rice-bowl"],
        hours: "10:00-20:15",
        locationImage: "DLR5_location"
    },
    {
        restaurantId: "DLR6",
        restaurantName: "リフレッシュメントコーナー\n",
        restaurantImage: "DLR6",
        icons: ["cold-drink", "frozen", "ham", "hamburger", "kebab"],
        hours: "9:00-21:00",
        locationImage: "DLR6_location"
    },
    {
        restaurantId: "DLR7",
        restaurantName: "アリスのティーパーティー",
        restaurantImage: "DLR7",
        icons: ["champagne-glass", "cold-drink", "croissant", "frozen", "ham", "ice-cream-cup", "kebab"],
        hours: "10:00-18:00",
        locationImage: "DLR7_location"
    },
    {
        restaurantId: "DLR8",
        restaurantName: "グランマ・サラのキッチン",
        restaurantImage: "DLR8",
        icons: ["champagne-glass", "coffee-cup", "cold-drink", "ham", "ice-cream-cup", "kebab", "rice-bowl"],
        hours: "11:00-20:00",
        locationImage: "DLR8_location"
    },
    {
        restaurantId: "DLR9",
        restaurantName: "キャプテンフックス・ギャレー",
        restaurantImage: "DLR9",
        icons: ["cold-drink", "frozen", "ice-cream-cup", "kebab", "pizza-slice"],
        hours: "9:00-18:00",
        locationImage: "DLR9_location"
    },
    {
        restaurantId: "DLR10",
        restaurantName: "カフェ・オーリンズ",
        restaurantImage: "DLR10",
        icons: ["cold-drink", "coffee-cup", "frozen", "ice-cream-cup", "kebab"],
        hours: "11:00-19:00",
        locationImage: "DLR10_location"
    },
    {
        restaurantId: "DLR11",
        restaurantName: "スキッパーズ・ギャレー\n",
        restaurantImage: "DLR11",
        icons: ["ham", "kebab"],
        hours: "10:00-20:00",
        locationImage: "DLR11_location"
    },
    {
        restaurantId: "DLR12",
        restaurantName: "スクウィーザーズ・トロピカル・ジュースバー\n",
        restaurantImage: "DLR12",
        icons: ["frozen", "ice-cream-cup", "kebab"],
        hours: "11:00-16:30",
        locationImage: "DLR12_location"
    },
    {
        restaurantId: "DLR13",
        restaurantName: "チャイナボイジャー\n",
        restaurantImage: "DLR13",
        icons: ["coffee-cup", "noodles"],
        hours: "9:45-20:00",
        locationImage: "DLR13_location"
    },
    {
        restaurantId: "DLR14",
        restaurantName: "パークサイドワゴン\n",
        restaurantImage: "DLR14",
        icons: ["ice-cream-cup", "kebab"],
        hours: "9:30-20:30",
        locationImage: "DLR14_location"
    },
    {
        restaurantId: "DLR15",
        restaurantName: "ブルーバイユー・レストラン\n",
        restaurantImage: "DLR15",
        icons: ["dinner-table", "ham"],
        hours: "11:00-19:45",
        locationImage: "DLR15_location"
    },
    {
        restaurantId: "DLR16",
        restaurantName: "フレッシュフルーツオアシス\n",
        restaurantImage: "DLR16",
        icons: ["frozen", "ice-cream-cup", "kebab"],
        hours: "10:00-17:00",
        locationImage: "DLR16_location"
    },
    {
        restaurantId: "DLR17",
        restaurantName: "ボイラールーム・バイツ\n",
        restaurantImage: "DLR17",
        icons: ["coffee-cup", "croissant", "ham", "kebab"],
        hours: "9:30-18:30",
        locationImage: "DLR17_location"
    },
    {
        restaurantId: "DLR18",
        restaurantName: "ポリネシアンテラス・レストラン",
        restaurantImage: "DLR18",
        icons: ["dinner-table", "ham", "rice-bowl"],
        hours: "11:45-19:15",
        locationImage: "DLR18_location"
    },
    {
        restaurantId: "DLR19",
        restaurantName: "カウボーイ・クックハウス\n",
        restaurantImage: "DLR19",
        icons: ["ham", "kebab"],
        hours: "10:00-19:15",
        locationImage: "DLR19_location"
    },
    {
        restaurantId: "DLR20",
        restaurantName: "キャンプ・ウッドチャック・キッチン\n",
        restaurantImage: "DLR20",
        icons: ["ham", "hamburger", "ice-cream-cup", "kebab", "noodles", "plant-based", "rice-bowl"],
        hours: "10:30-18:30",
        locationImage: "DLR20_location"
    },
    {
        restaurantId: "DLR21",
        restaurantName: "ザ・ダイヤモンドホースシュー\n",
        restaurantImage: "DLR21",
        icons: ["dinner-table", "ham"],
        hours: "11:05-16:50",
        locationImage: "DLR21_location"
    },
    {
        restaurantId: "DLR22",
        restaurantName: "ハングリーベア・レストラン\n",
        restaurantImage: "DLR22",
        icons: ["coffee-cup", "ham", "ice-cream-cup", "kebab", "plant-based", "rice-bowl"],
        hours: "10:00-20:30",
        locationImage: "DLR22_location"
    },
    {
        restaurantId: "DLR23",
        restaurantName: "プラザパビリオン・レストラン",
        restaurantImage: "DLR23",
        icons: ["coffee-cup", "cold-drink", "frozen", "ham", "hamburger", "ice-cream-cup", "plant-based", "spaghetti"],
        hours: "10:00-19:15",
        locationImage: "DLR23_location"
    },
    {
        restaurantId: "DLR24",
        restaurantName: "ペコスビル・カフェ\n",
        restaurantImage: "DLR24",
        icons: ["coffee-cup", "ham", "ice-cream-cup", "kebab", "rice-bowl"],
        hours: "9:00-20:30",
        locationImage: "DLR24_location"
    },
    {
        restaurantId: "DLR25",
        restaurantName: "グランマ・サラのキッチン\n",
        restaurantImage: "DLR25",
        icons: ["coffee-cup", "ham", "ice-cream-cup", "plant-based", "rice-bowl"],
        hours: "10:00-19:00",
        locationImage: "DLR25_location"
    },
    {
        restaurantId: "DLR26",
        restaurantName: "ラケッティのラクーンサルーン\n",
        restaurantImage: "DLR26",
        icons: ["croissant", "frozen", "ham", "ice-cream-cup", "kebab"],
        hours: "11:00-15:30",
        locationImage: "DLR26_location"
    },
    {
        restaurantId: "DLR27",
        restaurantName: "キャプテンフックス・ギャレー\n",
        restaurantImage: "DLR27",
        icons: ["cold-drink", "frozen", "ice-cream-cup", "kebab", "pizza-slice", "plant-based"],
        hours: "10:00-19:15",
        locationImage: "DLR27_location"
    },
    {
        restaurantId: "DLR28",
        restaurantName: "クイーン・オブ・ハートのバンケットホール\n",
        restaurantImage: "DLR28",
        icons: ["coffee-cup", "ham", "ice-cream-cup", "plant-based"],
        hours: null,
        locationImage: "DLR28_location"
    },
    {
        restaurantId: "DLR29",
        restaurantName: "トルバドールタバン\n",
        restaurantImage: "DLR29",
        icons: ["champagne-glass", "cold-drink", "frozen", "kebab"],
        hours: null,
        locationImage: "DLR29_location"
    },
    {
        restaurantId: "DLR30",
        restaurantName: "ビレッジペイストリー\n",
        restaurantImage: "DLR30",
        icons: ["ice-cream-cup", "kebab"],
        hours: null,
        locationImage: "DLR30_location"
    },
    {
        restaurantId: "DLR31",
        restaurantName: "マジカルマーケット",
        restaurantImage: "DLR31",
        icons: ["frozen", "ice-cream-cup", "kebab"],
        hours: "10:00-19:30",
        locationImage: "DLR31_location"
    },
    {
        restaurantId: "DLR32",
        restaurantName: "ラ・タベルヌ・ド・ガストン\n",
        restaurantImage: "DLR32",
        icons: ["champagne-glass", "croissant", "ham", "ice-cream-cup", "kebab", "plant-based"],
        hours: "9:00-20:00",
        locationImage: "DLR32_location"
    },
    {
        restaurantId: "DLR33",
        restaurantName: "ル・フウズ\n",
        restaurantImage: "DLR33",
        icons: ["cold-drink", "frozen", "ice-cream-cup", "kebab"],
        hours: "9:00-18:00",
        locationImage: "DLR33_location"
    },
    {
        restaurantId: "DLR34",
        restaurantName: "トゥーントーン・トリート\n",
        restaurantImage: "DLR34",
        icons: ["cold-drink", "frozen", "ice-cream-cup", "kebab"],
        hours: "9:30-18:30",
        locationImage: "DLR34_location"
    },
    {
        restaurantId: "DLR35",
        restaurantName: "ヒューイ・デューイ・ルーイのグッドタイム・カフェ",
        restaurantImage: "DLR35",
        icons: ["cold-drink", "frozen", "ham", "hamburger", "ice-cream-cup", "kebab", "pizza-slice"],
        hours: "9:30-17:30",
        locationImage: "DLR35_location"
    },
    {
        restaurantId: "DLR36",
        restaurantName: "トゥモローランド・テラス",
        restaurantImage: "DLR36",
        icons: ["cold-drink", "frozen", "hamburger", "ice-cream-cup", "kebab", "plant-based"],
        hours: "9:00-20:30",
        locationImage: "DLR36_location"
    },
    {
        restaurantId: "DLR37",
        restaurantName: "パン・ギャラクティック・ピザ・ポート",
        restaurantImage: "DLR37",
        icons: ["coffee-cup", "cold-drink", "frozen", "ice-cream-cup", "kebab", "pizza-slice"],
        hours: "9:00-20:00",
        locationImage: "DLR37_location"
    },
    {
        restaurantId: "DLR38",
        restaurantName: "プラズマ・レイズ・ダイナー\n",
        restaurantImage: "DLR38",
        icons: ["champagne-glass", "ham", "ice-cream-cup", "kebab", "rice-bowl"],
        hours: "9:00-20:30",
        locationImage: "DLR38_location"
    }
    // 他のレストランも同様に追加
];