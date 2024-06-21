const foods = [
    {
        type: ["sweat", "onehand"],
        name: "スペシャルサンデー（チーズホイップ＆マンゴー)",
        image: "image/DL-food/DL.R1.1.jpg",
        price: 780,
        restaurantId: "DLR1"
    }, {
        type: ["sweat", "onehand", "frozen"],
        name: "アイスクリーム&フローズンデザート各種",
        image: "image/DL-food/DL.R1.2.jpg",
        price: 400,
        restaurantId: "DLR1"
    }, {
        type: ["pasta"],
        name: "スパゲッティ、生ハムとムール貝のクリームソース",
        image: "image/DL-food/DL.R2.1.jpg",
        price: 2600,
        restaurantId: "DLR2"
    }, {
        type: ["pasta"],
        name: "スパゲッティ、キノコとパンチェッタのボロネーゼ マスカルポーネ添え",
        image: "image/DL-food/DL.R2.2.jpg",
        price: 2600,
        restaurantId: "DLR2"
    }, {
        type: ["burger"],
        name: "ホットサンド（ハム、チーズ、キャベツのハニーマスタード）",
        image: "image/DL-food/DL.R2.3.jpg",
        price: 2800,
        restaurantId: "DLR2"
    }, {
        type: ["meat"],
        name: "グリルドビーフ、バルサミコソース",
        image: "image/DL-food/DL.R2.4.jpg",
        price: 3800,
        restaurantId: "DLR2"
    }, {
        type: ["pasta", "vegan"],
        name: "ベジタリアンセット",
        image: "image/DL-food/DL.R2.5.jpg",
        price: 2600,
        restaurantId: "DLR2"
    }, {
        type: ["sweat"],
        name: "エルダーフラワー風味のゼリーとマチェドニア",
        image: "image/DL-food/DL.R2.6.jpg",
        price: 750,
        restaurantId: "DLR2"
    }, {
        type: ["sweat"],
        name: "ティラミス",
        image: "image/DL-food/DL.R2.7.jpg",
        price: 750,
        restaurantId: "DLR2"
    }, {
        type: ["sweat", "onehand"],
        name: "ミッキーワッフル",
        image: "image/DL-food/DL.R3.1.jpg",
        price: 800,
        restaurantId: "DLR3"
    }, {
        type: ["burger"],
        name: "スペシャルセット",
        image: "image/DL-food/DL.R4.1.jpg",
        price: 1330,
        restaurantId: "DLR4"
    }, {
        type: ["sweat"],
        name: "パッションフルーツ・パイナップルゼリー＆バニラムース",
        image: "image/DL-food/DL.R4.2.jpg",
        price: 550,
        restaurantId: ["DLR4", "DLR22", "DLR25"]
    }, {
        type: ["sweat"],
        name: "チーズケーキ",
        image: "image/DL-food/DL.R4.3.jpg",
        price: 550,
        restaurantId: ["DLR4", "DLR22", "DLR25"]
    }, {
        type: ["bakery"],
        name: "ミッキーロングパン（塩バター味）",
        image: "image/DL-food/DL.R4.4.jpg",
        price: 1300,
        restaurantId: "DLR4"
    }, {
        type: ["bakery", "onehand"],
        name: "マイクメロンパン(クリーム入り)",
        image: "image/DL-food/DL.R4.5.jpg",
        price: 500,
        restaurantId: "DLR4"
    }, {
        type: ["bakery", "onehand"],
        name: "ライスブレッド（あん）",
        image: "image/DL-food/DL.R4.6.jpg",
        price: 300,
        restaurantId: "DLR4"
    }, {
        type: ["bakery", "onehand"],
        name: "チーズハンバーグデニッシュ",
        image: "image/DL-food/DL.R4.7.jpg",
        price: 500,
        restaurantId: "DLR4"
    }, {
        type: ["bakery", "onehand"],
        name: "明太子＆チーズフォカッチャ",
        image: "image/DL-food/DL.R4.8.jpg",
        price: 400,
        restaurantId: "DLR4"
    }, {
        type: ["bakery", "onehand"],
        name: "ツナ＆コーンフォカッチャ",
        image: "image/DL-food/DL.R4.9.jpg",
        price: 400,
        restaurantId: "DLR4"
    }, {
        type: ["bakery", "onehand"],
        name: "ダブルチョコレートマフィン",
        image: "image/DL-food/DL.R4.10.jpeg",
        price: 380,
        restaurantId: "DLR4"
    }, {
        type: ["bakery", "onehand"],
        name: "バナナ＆クルミマフィン",
        image: "image/DL-food/DL.R4.11.jpg",
        price: 380,
        restaurantId: "DLR4"
    }, {
        type: ["bakery", "onehand"],
        name: "クリームチーズ・ブラウニー",
        image: "image/DL-food/DL.R4.12.jpg",
        price: 400,
        restaurantId: ["DLR4", "DLR8"]
    }, {
        type: ["bakery", "onehand"],
        name: "シナモンロール",
        image: "image/DL-food/DL.R4.13.jpg",
        price: 480,
        restaurantId: "DLR4"
    }, {
        type: ["bakery", "onehand"],
        name: "キャラメルチョコロール（ナッツ添え）",
        image: "image/DL-food/DL.R4.14.jpg",
        price: 480,
        restaurantId: "DLR4"
    }, {
        type: ["sweat"],
        name: "グレープゼリー＆ヨーグルトムース",
        image: "image/DL-food/DL.R4.15.jpg",
        price: 400,
        restaurantId: "DLR4"
    }, {
        type: ["sweat"],
        name: "スペシャルデザートセット",
        image: "image/DL-food/DL.R5.1.jpg",
        price: 1980,
        restaurantId: "DLR5"
    }, {
        type: ["meat"],
        name: "ステーキプレート",
        image: "image/DL-food/DL.R5.2.jpg",
        price: 2980,
        restaurantId: "DLR5"
    }, {
        type: ["alcohol"],
        name: "スパークリングカクテルフロート（リモンチェッロ＆フルーツ）",
        image: "image/DL-food/DL.R5.3.jpg",
        price: 980,
        restaurantId: "DLR5"
    }, {
        type: ["rice"],
        name: "カレープレート",
        image: "image/DL-food/DL.R5.4.jpg",
        price: 1580,
        restaurantId: "DLR5"
    }, {
        type: ["meat"],
        name: "コンビプレート",
        image: "image/DL-food/DL.R5.5.jpg",
        price: 2280,
        restaurantId: "DLR5"
    }, {
        type: ["warm"],
        name: "シーフードとベーコンのトマトクリームスープ",
        image: "image/DL-food/DL.R5.6.jpg",
        price: 600,
        restaurantId: "DLR5"
    }, {
        type: ["vegan"],
        name: "生ハムとアボカドのサラダ、クリーミーバジルドレッシング",
        image: "image/DL-food/DL.R5.7.jpg",
        price: 780,
        restaurantId: "DLR5"
    }, {
        type: ["drink", "frozen"],
        name: "フロート",
        image: "image/DL-food/DL.R5.8.jpg",
        price: 640,
        restaurantId: "DLR5"
    }, {
        type: ["onehand"],
        name: "おすすめホットドッグ",
        image: "image/DL-food/DL.R6.1.jpg",
        price: 700,
        restaurantId: "DLR6"
    }, {
        type: ["drink", "frozen"],
        name: "ソイミルク＆キャラメルドリンク",
        image: "image/DL-food/DL.R6.2.jpg",
        price: 600,
        restaurantId: "DLR6"
    }, {
        type: ["onehand"],
        name: "ホットドッグ",
        image: "image/DL-food/DL.R6.3.jpg",
        price: 500,
        restaurantId: "DLR6"
    }, {
        type: ["onehand"],
        name: "チーズドッグ",
        image: "image/DL-food/DL.R6.4.jpg",
        price: 550,
        restaurantId: "DLR6"
    }, {
        type: ["rice"],
        name: "天麩羅膳",
        image: "image/DL-food/DL.R7.1.jpg",
        price: 2380,
        restaurantId: "DLR7"
    }, {
        type: ["rice"],
        name: "天麩羅とうどん膳",
        image: "image/DL-food/DL.R7.2.jpg",
        price: 2480,
        restaurantId: "DLR7"
    }, {
        type: ["rice"],
        name: "ロースかつ膳",
        image: "image/DL-food/DL.R7.3.jpg",
        price: 2380,
        restaurantId: "DLR7"
    }, {
        type: ["rice"],
        name: "ロースかつとうどん膳",
        image: "image/DL-food/DL.R7.4.jpg",
        price: 2480,
        restaurantId: "DLR7"
    }, {
        type: ["rice"],
        name: "鮪と海鮮のちらし丼",
        image: "image/DL-food/DL.R7.5.jpg",
        price: 2580,
        restaurantId: "DLR7"
    }, {
        type: ["sweat"],
        name: "れすとらん北齋オリジナルパフェ",
        image: "image/DL-food/DL.R7.6.jpg",
        price: 800,
        restaurantId: "DLR7"
    }, {
        type: ["burger", "onehand"],
        name: "フォカッチャサンド",
        image: "image/DL-food/DL.R8.1.jpg",
        price: 750,
        restaurantId: "DLR8"
    }, {
        type: ["alcohol", "frozen"],
        name: "アイスカフェラテ・カクテル",
        image: "image/DL-food/DL.R8.2.jpg",
        price: 880,
        restaurantId: "DLR8"
    }, {
        type: ["sweat", "onehand"],
        name: "ミッキーマカロン",
        image: "image/DL-food/DL.R8.3.jpg",
        price: 600,
        restaurantId: ["DLR8", "DLR31", "DLR35"]
    }, {
        type: ["drink", "frozen"],
        name: "コーヒーミルクスムージー",
        image: "image/DL-food/DL.R8.4.jpg",
        price: 700,
        restaurantId: "DLR8"
    }, {
        type: ["drink", "frozen"],
        name: "クリスタルパレス・レストラン　オリジナルソフトドリンク",
        image: "image/DL-food/DL.R9.1.jpg",
        price: 900,
        restaurantId: "DLR9"
    },
    {
        type: ["luxury"],
        name: "ブッフェ",
        image: "image/DL-food/DL.R9.2.jpg",
        price: 4500,
        restaurantId: "DLR9"
    },
    {
        type: ["drink", "frozen"],
        name: "スパークリングドリンク",
        image: "image/DL-food/DL.R10.1.jpg",
        price: 700,
        restaurantId: "DLR10"
    },
    {
        type: ["meat", "onehand"],
        name: "骨付きソーセージ",
        image: "image/DL-food/DL.R10.2.jpg",
        price: 400,
        restaurantId: "DLR10"
    },
    {
        type: ["meat", "onehand"],
        name: "テリヤキチキンレッグ",
        image: "image/DL-food/DL.R11.1.jpg",
        price: 600,
        restaurantId: "DLR11"
    },
    {
        type: ["sweat", "frozen"],
        name: "マンゴーサンデー",
        image: "image/DL-food/DL.R12.1.jpg",
        price: 680,
        restaurantId: "DLR12"
    },
    {
        type: ["sweat", "frozen"],
        name: "ソフトクリーム",
        image: "image/DL-food/DL.R12.2.jpg",
        price: 500,
        restaurantId: "DLR12"
    },
    {
        type: ["cyuka", "warm"],
        name: "ボイジャーセット",
        image: "image/DL-food/DL.R13.1.jpg",
        price: 1840,
        restaurantId: "DLR13"
    },
    {
        type: ["cyuka", "warm"],
        name: "ブラックペッパーポーク麺",
        image: "image/DL-food/DL.R13.2.jpg",
        price: 1300,
        restaurantId: "DLR13"
    },
    {
        type: ["cyuka", "warm"],
        name: "チキンと海老の白湯麺",
        image: "image/DL-food/DL.R13.3.jpg",
        price: 1300,
        restaurantId: "DLR13"
    },
    {
        type: ["cyuka", "rice"],
        name: "蒸し餃子",
        image: "image/DL-food/DL.R13.4.jpg",
        price: 460,
        restaurantId: "DLR13"
    },
    {
        type: ["cyuka"],
        name: "豚角煮ライス",
        image: "image/DL-food/DL.R13.5.jpg",
        price: 450,
        restaurantId: "DLR13"
    },
    {
        type: ["sweat", "onehand"],
        name: "クレームブリュレ風チュロス",
        image: "image/DL-food/DL.R14.1.jpg",
        price: 600,
        restaurantId: ["DLR14", "DLR20", "DLR24"]
    },
    {
        type: ["meat", "luxury"],
        name: "シェフのおすすめコース",
        image: "image/DL-food/DL.R15.1.jpg",
        price: 7000,
        restaurantId: "DLR15"
    },
    {
        type: ["sweat", "frozen"],
        name: "ミッキーアイスバー",
        image: "image/DL-food/DL.R16.1.jpg",
        price: 350,
        restaurantId: ["DLR16", "DLR31"]
    },
    {
        type: ["sweat", "frozen"],
        name: "ミニーアイスバー",
        image: "image/DL-food/DL.R16.2.jpg",
        price: 350,
        restaurantId: ["DLR16", "DLR34"]
    },
    {
        type: ["sweat", "frozen"],
        name: "ティラミス・クッキーサンドアイス",
        image: "image/DL-food/DL.R16.3.jpg",
        price: 350,
        restaurantId: ["DLR16", "DLR31"]
    },
    {
        type: ["cyuka", "onehand"],
        name: "うきわまん（エビ）",
        image: "image/DL-food/DL.R17.1.jpg",
        price: 600,
        restaurantId: "DLR17"
    },
    {
        type: ["rice", "luxury"],
        name: "「ミッキーのレインボー・ルアウ」メニュー",
        image: "image/DL-food/DL.R18.1.jpg",
        price: 6500,
        restaurantId: "DLR18"
    },
    {
        type: ["meat", "onehand"],
        name: "スモークターキーレッグ",
        image: "image/DL-food/DL.R19.1.jpg",
        price: 900,
        restaurantId: "DLR19"
    },
    {
        type: ["cyuka"],
        name: "スペシャルセット",
        image: "image/DL-food/DL.R20.1.jpg",
        price: 960,
        restaurantId: "DLR20"
    },
    {
        type: ["rice", "onehand"],
        name: "おにぎりサンド（牛カルビ）",
        image: "image/DL-food/DL.R20.2.jpg",
        price: 710,
        restaurantId: "DLR20"
    },
    {
        type: ["meat", "onehand"],
        name: "スモークターキーレッグ",
        image: "image/DL-food/DL.R20.3.jpg",
        price: 900,
        restaurantId: "DLR20"
    },
    {
        type: ["meat", "onehand"],
        name: "コンボ・プレート",
        image: "image/DL-food/DL.R20.4.jpg",
        price: 1100,
        restaurantId: "DLR20"
    },
    {
        type: ["vegan"],
        name: "ミックスサラダ",
        image: "image/DL-food/DL.R20.5.jpg",
        price: 780,
        restaurantId: "DLR20"
    },
    {
        type: ["meat", "luxury"],
        name: "「ザ・ダイヤモンド・バラエティマスター」メニュー",
        image: "image/DL-food/DL.R21.1.jpg",
        price: 6500,
        restaurantId: "DLR21"
    },
    {
        type: ["rice"],
        name: "チキンカレー",
        image: "image/DL-food/DL.R22.1.jpg",
        price: 900,
        restaurantId: "DLR22"
    },
    {
        type: ["rice"],
        name: "ポークカツカレー",
        image: "image/DL-food/DL.R22.2.jpg",
        price: 1100,
        restaurantId: "DLR22"
    },
    {
        type: ["rice"],
        name: "ハングリーベア・カレー",
        image: "image/DL-food/DL.R22.3.jpg",
        price: 1200,
        restaurantId: "DLR22"
    },
    {
        type: ["vegan", "onehand"],
        name: "カップサラダ",
        image: "image/DL-food/DL.R22.4.jpg",
        price: 360,
        restaurantId: ["DLR22", "DLR38"]
    },
    {
        type: ["meat", "onehand"],
        name: "タンドーリチキン（１ピース）",
        image: "image/DL-food/DL.R22.5.jpg",
        price: 400,
        restaurantId: "DLR22"
    },
    {
        type: ["meat"],
        name: "ドナルドのワッキークラシックセット",
        image: "image/DL-food/DL.R23.1.jpg",
        price: 1860,
        restaurantId: "DLR23"
    },
    {
        type: ["drink", "frozen"],
        name: "スパークリングゼリードリンク",
        image: "image/DL-food/DL.R23.2.jpg",
        price: 1000,
        restaurantId: "DLR23"
    },
    {
        type: ["pasta"],
        name: "フェットチーネ・カルボナーラ、ビーフミートソース添え",
        image: "image/DL-food/DL.R23.3.jpg",
        price: 1300,
        restaurantId: "DLR23"
    },
    {
        type: ["sweat"],
        name: "レアチーズムースケーキ、パイナップル添え",
        image: "image/DL-food/DL.R23.4.jpg",
        price: 600,
        restaurantId: "DLR23"
    },
    {
        type: ["warm"],
        name: "コーンチャウダー",
        image: "image/DL-food/DL.R23.5.jpg",
        price: 440,
        restaurantId: "DLR23"
    },
    {
        type: ["vegan"],
        name: "ミックスサラダ（骨付きチキン）",
        image: "image/DL-food/DL.R23.6.jpg",
        price: 950,
        restaurantId: "DLR23"
    },
    {
        type: ["meat", "onehand"],
        name: "スパイシースモークチキンレッグ",
        image: "image/DL-food/DL.R23.7.jpg",
        price: 600,
        restaurantId: "DLR23"
    },
    {
        type: ["sweat"],
        name: "ラズベリー＆レモンムースケーキ",
        image: "image/DL-food/DL.R23.8.jpg",
        price: 650,
        restaurantId: "DLR23"
    },
    {
        type: ["meat", "onehand"],
        name: "ポークライスロール",
        image: "image/DL-food/DL.R24.1.jpg",
        price: 600,
        restaurantId: "DLR24"
    },
    {
        type: ["rice", "meat"],
        name: "スペシャルセット",
        image: "image/DL-food/DL.R25.1.jpg",
        price: 2040,
        restaurantId: "DLR25"
    },
    {
        type: ["meat"],
        name: "シーフードアソートプレート",
        image: "image/DL-food/DL.R25.2.jpg",
        price: 1480,
        restaurantId: "DLR25"
    },
    {
        type: ["rice", "meat"],
        name: "チキンアソートプレート",
        image: "image/DL-food/DL.R25.3.jpg",
        price: 1480,
        restaurantId: "DLR25"
    },
    {
        type: ["meat", "onehand"],
        name: "ソーセージデニッシュ",
        image: "image/DL-food/DL.R26.1.jpg",
        price: 600,
        restaurantId: "DLR26"
    },
    {
        type: ["sweat", "onehand"],
        name: "ミッキーチュロス（シナモン）",
        image: "image/DL-food/DL.R26.2.jpg",
        price: 450,
        restaurantId: ["DLR26", "DLR36"]
    },
    {
        type: ["sweat", "frozen"],
        name: "ソフトクリーム",
        image: "image/DL-food/DL.R26.3.jpg",
        price: 500,
        restaurantId: "DLR26"
    },
    {
        type: ["sweat", "frozen"],
        name: "クリッターサンデー",
        image: "image/DL-food/DL.R26.4.jpg",
        price: 800,
        restaurantId: "DLR26"
    },
    {
        type: ["pizza", "onehand"],
        name: "おすすめピザセット",
        image: "image/DL-food/DL.R27.1.jpg",
        price: 680,
        restaurantId: "DLR27"
    },
    {
        type: ["drink", "frozen"],
        name: "スパークリングゼリードリンク（ハニーレモン）",
        image: "image/DL-food/DL.R27.2.jpg",
        price: 600,
        restaurantId: "DLR27"
    },
    {
        type: ["sweat", "onehand"],
        name: "ミッキーカステラケーキ",
        image: "image/DL-food/DL.R27.3.jpg",
        price: 400,
        restaurantId: "DLR27"
    },
    {
        type: ["pizza", "onehand"],
        name: "シーフードピザ",
        image: "image/DL-food/DL.R27.4.jpg",
        price: 600,
        restaurantId: "DLR27"
    },
    {
        type: ["pizza", "onehand"],
        name: "ベーコンとパイナップルのピザ",
        image: "image/DL-food/DL.R27.5.jpg",
        price: 600,
        restaurantId: "DLR27"
    },
    {
        type: ["onehand"],
        name: "ベイクドチーズポテト",
        image: "image/DL-food/DL.R27.6.jpg",
        price: 400,
        restaurantId: "DLR27"
    },
    {
        type: ["warm"],
        name: "コーンチャウダー",
        image: "image/DL-food/DL.R28.1.jpg",
        price: 440,
        restaurantId: "DLR28"
    },
    {
        type: ["warm"],
        name: "ミネストローネ",
        image: "image/DL-food/DL.R28.2.jpg",
        price: 440,
        restaurantId: "DLR28"
    },
    {
        type: ["vegan"],
        name: "シーザーサラダ",
        image: "image/DL-food/DL.R28.3.jpg",
        price: 720,
        restaurantId: "DLR28"
    },
    {
        type: ["meat"],
        name: "ローストチキン",
        image: "image/DL-food/DL.R28.4.jpg",
        price: 1650,
        restaurantId: "DLR28"
    },
    {
        type: ["meat"],
        name: "フランクステーキ、和風ソース",
        image: "image/DL-food/DL.R28.5.jpg",
        price: 1800,
        restaurantId: "DLR28"
    },
    {
        type: ["meat"],
        name: "チーズハンバーグ、デミグラスソース",
        image: "image/DL-food/DL.R28.6.jpg",
        price: 1650,
        restaurantId: "DLR28"
    },
    {
        type: ["meat"],
        name: "サーモンのオーブン焼き、シーフードクリームソース",
        image: "image/DL-food/DL.R28.7.jpg",
        price: 1500,
        restaurantId: "DLR28"
    },
    {
        type: ["sweat"],
        name: "ハートのストロベリームース",
        image: "image/DL-food/DL.R28.8.jpg",
        price: 500,
        restaurantId: "DLR28"
    },
    {
        type: ["sweat"],
        name: "カスタードプリン",
        image: "image/DL-food/DL.R28.9.jpg",
        price: 850,
        restaurantId: "DLR28"
    },
    {
        type: ["sweat"],
        name: "ストロベリークリームケーキ",
        image: "image/DL-food/DL.R28.10.jpg",
        price: 850,
        restaurantId: "DLR28"
    },
    {
        type: ["drink", "frozen"],
        name: "スパークリングドリンク",
        image: "image/DL-food/DL.R29.1.jpg",
        price: 700,
        restaurantId: ["DLR29", "DLR35", "DLR37"]
    },
    {
        type: ["frozen"],
        name: "カクテルスムージー",
        image: "image/DL-food/DL.R29.2.jpg",
        price: 780,
        restaurantId: "DLR29"
    },
    {
        type: ["sweat", "onehand"],
        name: "ティポトルタ(チョコレート＆オレンジ)",
        image: "image/DL-food/DL.R30.1.jpg",
        price: 500,
        restaurantId: "DLR30"
    },
    {
        type: ["alcohol", "frozen"],
        name: "ワインカクテル（アップルスプリッツァー）",
        image: "image/DL-food/DL.R32.1.jpg",
        price: 780,
        restaurantId: "DLR32"
    },
    {
        type: ["meat", "bakery", "onehand"],
        name: "ビッグバイト･クロワッサン",
        image: "image/DL-food/DL.R32.2.jpg",
        price: 780,
        restaurantId: "DLR32"
    },
    {
        type: ["bakery", "onehand"],
        name: "フレンチトースト・サンド",
        image: "image/DL-food/DL.R32.3.jpg",
        price: 780,
        restaurantId: "DLR32"
    },
    {
        type: ["meat", "bakery", "onehand"],
        name: "ハンターズ･パイ（ビーフシチュー）",
        image: "image/DL-food/DL.R32.4.jpg",
        price: 780,
        restaurantId: "DLR32"
    },
    {
        type: ["sweat"],
        name: "スウィート・ガストン",
        image: "image/DL-food/DL.R32.5.jpg",
        price: 480,
        restaurantId: "DLR32"
    },
    {
        type: ["sweat", "onehand"],
        name: "ル・フウズ・チュロス",
        image: "image/DL-food/DL.R32.6.jpg",
        price: 500,
        restaurantId: ["DLR32", "DLR33"]
    },
    {
        type: ["drink", "frozen"],
        name: "ベリーチアーズ",
        image: "image/DL-food/DL.R32.7.jpg",
        price: 600,
        restaurantId: "DLR32"
    },
    {
        type: ["drink", "frozen"],
        name: "ドナルドダックのハーモニーフロスティ",
        image: "image/DL-food/DL.R33.1.jpg",
        price: 700,
        restaurantId: ["DLR33", "DLR34"]
    },
    {
        type: ["pizza", "onehand"],
        name: "ミッキーピザ（チェダーチーズ＆ソーセージ）",
        image: "image/DL-food/DL.R35.1.jpg",
        price: 750,
        restaurantId: "DLR35"
    },
    {
        type: ["burger", "onehand"],
        name: "グローブシェイプ･エッグチキンパオ",
        image: "image/DL-food/DL.R35.2.jpg",
        price: 600,
        restaurantId: "DLR35"
    },
    {
        type: ["burger", "onehand"],
        name: "エビカツバーガー",
        image: "image/DL-food/DL.R35.3.jpg",
        price: 600,
        restaurantId: "DLR35"
    },
    {
        type: ["meat", "onehand"],
        name: "骨付きソーセージ",
        image: "image/DL-food/DL.R35.4.jpg",
        price: 400,
        restaurantId: "DLR35"
    },
    {
        type: ["onehand"],
        name: "スプリングロール（エッグ＆シュリンプ）",
        image: "image/DL-food/DL.R35.5.jpg",
        price: 380,
        restaurantId: "DLR35"
    },
    {
        type: ["sweat", "onehand"],
        name: "ストロベリーチョコチップマフィン",
        image: "image/DL-food/DL.R35.6.jpg",
        price: 400,
        restaurantId: "DLR35"
    },
    {
        type: ["drink", "frozen"],
        name: "スパークリングゼリードリンク（コカ・コーラ＆レモン・バニラ）",
        image: "image/DL-food/DL.R36.1.jpg",
        price: 700,
        restaurantId: "DLR36"
    },
    {
        type: ["burger", "onehand"],
        name: "おすすめバーガーセット",
        image: "image/DL-food/DL.R36.2.jpg",
        price: 850,
        restaurantId: "DLR36"
    },
    {
        type: ["burger", "onehand"],
        name: "BLTチーズバーガー",
        image: "image/DL-food/DL.R36.3.jpg",
        price: 750,
        restaurantId: "DLR36"
    },
    {
        type: ["burger", "onehand"],
        name: "フライドチキンバーガー（タルタルソース）",
        image: "image/DL-food/DL.R36.4.jpg",
        price: 750,
        restaurantId: "DLR36"
    },
    {
        type: ["onehand", "warm"],
        name: "チキンとトマトのカルツォーネ",
        image: "image/DL-food/DL.R37.1.jpg",
        price: 620,
        restaurantId: "DLR37"
    },
    {
        type: ["pizza"],
        name: "ソフトサラミソーセージのピザ",
        image: "image/DL-food/DL.R37.2.jpg",
        price: 740,
        restaurantId: "DLR37"
    },
    {
        type: ["sweat", "onehand"],
        name: "リトルグリーンまん",
        image: "image/DL-food/DL.R37.3.jpg",
        price: 400,
        restaurantId: ["DLR37", "DLR38"]
    },
    {
        type: ["cyuka"],
        name: "シェフのおすすめセット",
        image: "image/DL-food/DL.R38.1.jpg",
        price: 1100,
        restaurantId: "DLR38"
    },
    {
        type: ["alcohol", "frozen"],
        name: "スパークリングカクテル（梅酒＆キウイ）",
        image: "image/DL-food/DL.R38.2.jpg",
        price: 780,
        restaurantId: "DLR38"
    },
    {
        type: ["rice", "cyuka"],
        name: "ハッシュドビーフライス、エッグとエビフライ添え",
        image: "image/DL-food/DL.R38.3.jpg",
        price: 1200,
        restaurantId: "DLR38"
    },
    {
        type: ["rice", "cyuka"],
        name: "プラントベースフードのビビンバ",
        image: "image/DL-food/DL.R38.4.jpg",
        price: 1250,
        restaurantId: "DLR38"
    },
    {
        type: ["meat", "onehand"],
        name: "チキンテンダーとチーズフライ",
        image: "image/DL-food/DL.R38.5.jpg",
        price: 650,
        restaurantId: "DLR38"
    }
    // 他のフードも同様に追加
];
