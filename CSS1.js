 $.ajax({
  url:'https://api.github.com/users/xudafeng'
 ,
  dataType: 'json',
  success: function(data) {
    $('#avatar').attr('src', data.avatar_url)
    console.log(data.avatar_url)
   
  }
});