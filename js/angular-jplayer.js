var jp = angular.module('ngJplayer', [])

jp.directive('jplayer', function(){
  
  return {
    restrict: 'E',
    scope: {
      audio: '=',
    },
    templateUrl: "jplayer.html",
    link: function(scope, el, attrs) {
      console.log(scope.src)
      $("#jquery_jplayer_1").jPlayer({
        ready: function(){
          $(this).jPlayer("setMedia", {
            title: scope.audio.title,
            oga: scope.audio.src
          });
        },
        cssSelectorAncestor: "#jp_container_1",
        swfPath: "/js",
        supplied: "m4a, oga",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        remainingDuration: true,
        toggleDuration: true
      })
      scope.$watch('audio', function(n,o) {
        console.log(n)
        console.log(o)
        if (n != o) {
          $("#jquery_jplayer_1").jPlayer('setMedia', {
            title: n.title,
            oga: n.src
          });
        }
      })
    }
  }
});
