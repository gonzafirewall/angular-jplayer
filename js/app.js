var app = angular.module('jplayerApp', ['ngJplayer'])

app.controller('jplayerCtrl', function($scope){
  $scope.audioVar = {
    title: "Aplausos",
    src: "http://www.pdsounds.org/audio/download/406/STE-005+-+Klatschen-1.mp3"}
  $scope.changeAudio = function (){
    $scope.audioVar = {
      title: "Aplausos2",
      src: "http://www.pdsounds.org/audio/download/405/STE-005+-+Klatschen-2.mp3"}
  }
});


