app.run((FIREBASE_CONFIG) => {
    firebase.initializeApp(FIREBASE_CONFIG);
});

app.controller("ShroomyCtrl", ($http, $q, $scope, FIREBASE_CONFIG) => {
    $scope.mushrooms = [];

    let getMushrooms = () => {
        let itemz = [];
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/mushrooms.json`)
                .then((fbItems) => {
                    let itemCollection = fbItems.data;
                    Object.keys(itemCollection).forEach((key) => {
                        itemCollection[key].id = key;
                        itemz.push(itemCollection[key]);
                    });
                    resolve(itemz);
                }).catch((error) => {
                    reject(error);
                });
        });

    };

    let getItems = () => {
        getMushrooms().then((itemz) => {
            $scope.mushrooms = itemz;
            console.log($scope.mushrooms);
        }).catch((error) => {
            console.log("get Error", error);
        });
    };

    getItems();

});
