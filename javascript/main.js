app.run((FIREBASE_CONFIG) => {
    firebase.initializeApp(FIREBASE_CONFIG);
});

app.controller("ShroomyCtrl", ($scope) => { 
    $scope.shroomy = "Shroomy";

});
