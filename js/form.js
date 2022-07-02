<script type="text/javascript">
var genString = function(len){
  var template = "0123456789";
  var stringId = "";

  for(var i = 0; i < len; i++){
    var randomNum = Math.floor(Math.random() * (template.length));
    console.log(randomNum);
    stringId += template[randomNum];
  }
  return stringId;
};

$(document).ready(function(){
  $('.result').html(genString(10));
})
</script>
