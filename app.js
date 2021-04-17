let app = angular.module("RembrandtApp", []);
app.controller("PaintingController",function($scope){
    $scope.paintingCount = 0;
    $scope.paintings = [
        "paintings/1.jpg",
        "paintings/2.jpg",
        "paintings/3.jpg",
        "paintings/4.jpg",
        "paintings/5.jpg",
        "paintings/6.jpg",
        "paintings/7.jpg",
        "paintings/8.jpg",
        "paintings/9.jpg",
        "paintings/10.jpg",
        "paintings/11.jpg",
        "paintings/12.jpg",
        "paintings/13.jpg"
    ];

    $scope.previous = function(){
        $scope.paintingCount = $scope.paintingCount - 1;
    };

    $scope.next = function(){
        $scope.paintingCount = $scope.paintingCount + 1;
    };
});

let previousButtonElement = document.querySelector('#previous');
let nextButtonElement = document.querySelector('#next');
let image = document.querySelector('#image');

previousButtonElement.addEventListener('click',()=>{
    image.className = "magnifyImage";
    image.classList.add('max');
    console.log(image)
});

nextButtonElement.addEventListener('click',()=>{
    image.className = "minifyImage";
    image.classList.add('min')
    console.log(image)
})