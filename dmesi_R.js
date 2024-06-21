function adjustFontSize(element, maxChars, className) {
    if (element.textContent.length > maxChars) {
        element.classList.add(className);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.button-container button');

    // ボタンがクリックされたときの処理
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            // Toggle 'selected' class
            this.classList.toggle('selected');

            // ボタン内の画像を取得
            const img = this.querySelector('img');
            if (this.classList.contains('selected')) {
                // ボタンが選択された場合、画像のsrcをicon-whiteに変更
                img.src = img.src.replace('/icon-black/', '/icon-white/');
            } else {
                // ボタンの選択が解除された場合、画像のsrcをicon-blackに変更
                img.src = img.src.replace('/icon-white/', '/icon-black/');
            }
        });
    });

    // URLからクエリパラメータを取得
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const selectedIds = urlParams.get('selectedIds');

    // selectedIdsがnullでない場合にのみ結果を表示
    if (selectedIds) {
        const selectedButtons = selectedIds.split(',');
        displayResults(selectedButtons);
    } else {
        // selectedIdsがnullの場合はデフォルトの画像を表示
        displayDefaultImage();
    }

    // 名前の長さに応じてフォントサイズを調整
    document.querySelectorAll('.p_name').forEach(nameElement => {
        adjustFontSize(nameElement, 20, 'small-font'); // 22文字以上ならフォントサイズを小さく
    });
});

// 選択されたフードを表示する関数
function displayResults(selectedIds) {
    // 結果表示用のコンテナを取得
    const resultContainer = document.getElementById('resultContainer');

    // 選択されたフードのIDに一致するフードを抽出
    const selectedTypes = selectedIds;

    function isSelectedFood(food) {
        return food.type.some(type => selectedTypes.includes(type));
    }

    const result = foods.filter(food => isSelectedFood(food));

    // 結果を表示
    resultContainer.innerHTML = '';

    // 選択されたフードが見つからない場合はデフォルトの画像を表示
    if (result.length === 0) {
        displayDefaultImage();
    } else {
        // 選択されたフードを表示
        result.forEach(food => {
            const foodItem = document.createElement('div');
            foodItem.classList.add('food-item');
            foodItem.innerHTML = `
            <div class="food_box" data-restaurant-ids="${Array.isArray(food.restaurantId) ? food.restaurantId.join(',') : food.restaurantId}">
                <img src="${food.image}" alt="${food.name}">
                <div class="name_div">
                    <p class="p_name">${food.name}</p>
                </div>
                <div class="price_div">
                    <p class="p_price">${food.price}円</p>
                </div>
            </div>
            `;
            resultContainer.appendChild(foodItem);

            // フード名の長さに応じてフォントサイズを調整
            const nameElement = foodItem.querySelector('.p_name');
            adjustFontSize(nameElement, 22, 'small-font');
        });

        // クリックイベントを設定
        document.querySelectorAll('.food_box').forEach(item => {
            item.addEventListener('click', function () {
                const restaurantIds = this.getAttribute('data-restaurant-ids').split(',');
                if (restaurantIds.length > 1) {
                    showMultiRestaurantPopup(restaurantIds);
                } else {
                    const restaurant = restaurants.find(r => r.restaurantId === restaurantIds[0]);
                    if (restaurant) {
                        showPopup(restaurant);
                    }
                }
            });
        });
    }
}

// デフォルトの画像を表示する関数
function displayDefaultImage() {
    const resultContainer = document.getElementById('resultContainer');
    const defaultImage = document.createElement('img');
    defaultImage.src = "image/NoResult.jpeg";
    defaultImage.alt = "No Result";
    resultContainer.appendChild(defaultImage);
}

function redirectToResultPage() {
    const selectedButtons = document.querySelectorAll('.button-container button.selected');
    const selectedIds = Array.from(selectedButtons).map(button => button.id);
    const queryString = encodeURIComponent(selectedIds.join(','));
    window.location.href = `dmesi_R_food_result.html?selectedIds=${queryString}`;
}

function goBack() {
    window.location.href = 'dmesi_R_food_icon.html';
}

function showPopup(restaurant) {
    const restaurantImageElement = document.getElementById('restaurantImage');
    const restaurantNameElement = document.getElementById('restaurantName');
    const iconsContainer = document.getElementById('icons');
    const hoursElement = document.getElementById('hours');
    const locationImageElement = document.getElementById('locationImage');
    const foodItemsContainer = document.getElementById('foodItems');

    if (restaurantImageElement && restaurantNameElement && iconsContainer && hoursElement && locationImageElement && foodItemsContainer) {
        restaurantImageElement.src = `image/DR/${restaurant.restaurantImage}.jpg`;
        restaurantNameElement.textContent = restaurant.restaurantName;

        iconsContainer.innerHTML = '';
        restaurant.icons.forEach(icon => {
            const img = document.createElement('img');
            img.src = `image/icon/icon-black/${icon}.png`;
            iconsContainer.appendChild(img);
        });

        hoursElement.textContent = restaurant.hours;
        locationImageElement.src = `image/DLR_location/${restaurant.locationImage}.jpg`;

        foodItemsContainer.innerHTML = '';
        foods.filter(food => {
            return Array.isArray(food.restaurantId) ? food.restaurantId.includes(restaurant.restaurantId) : food.restaurantId === restaurant.restaurantId;
        }).forEach(food => {
            const img = document.createElement('img');
            img.src = food.image;
            img.alt = food.name;
            foodItemsContainer.appendChild(img);
        });

        document.getElementById('popup').classList.remove('hidden');
    } else {
        console.error("必要な要素が見つかりませんでした。");
    }
}

function showMultiRestaurantPopup(restaurantIds) {
    const popup = document.getElementById('popup');
    popup.innerHTML = ''; // 既存の内容をクリア

    const container = document.createElement('div');
    container.classList.add('multi-restaurant-container');

    restaurantIds.forEach(id => {
        const restaurant = restaurants.find(r => r.restaurantId === id);
        if (restaurant) {
            const restaurantDiv = document.createElement('div');
            restaurantDiv.classList.add('restaurant-info');

            const img = document.createElement('img');
            img.src = `image/DR/${restaurant.restaurantImage}.jpg`;
            img.alt = restaurant.restaurantName;

            const name = document.createElement('p');
            name.textContent = restaurant.restaurantName;

            restaurantDiv.appendChild(img);
            restaurantDiv.appendChild(name);
            container.appendChild(restaurantDiv);

            // クリックイベントを追加
            restaurantDiv.addEventListener('click', function () {
                closePopup(); // 現在のポップアップを閉じる
                showPopup(restaurant); // 通常のポップアップを表示
            });
        }
    });

    const closeBtn = document.createElement('span');
    closeBtn.classList.add('close-btn');
    closeBtn.textContent = '×';
    closeBtn.onclick = closePopup;

    popup.appendChild(closeBtn);
    popup.appendChild(container);
    popup.classList.remove('hidden');
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.add('hidden');

    // ポップアップの内容をクリア
    popup.innerHTML = `
        <div class="popup-background">
            <img class="restaurantImage" id="restaurantImage" src="" alt="Restaurant Image">
        </div>
        <div class="popup-foreground">
            <span class="close-btn" onclick="closePopup()">&times;</span>
            <h2 id="restaurantName"></h2>
            <div class="restaurant-info">
                <div id="icons" class="restuarant_icon"></div>
                <p id="hours"></p>
            </div>
            <div id="foodItems" class="food-items-container"></div>
            <p>location</p>
            <img class="locationImage" id="locationImage" src="" alt="Location Image">
        </div>
    `;
}
