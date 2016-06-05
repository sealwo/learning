// https://api.github.com/users/sealwo
 $.ajax({
  url:'https://api.github.com/users/sealwo'
 ,
  dataType: 'json',
  success: function(data) {
    $('#avatar').attr('src', data.avatar_url)
    console.log(data.avatar_url)
     $('#gravatar_id').html(data.name)
    console.log(data)
  }
});

  
