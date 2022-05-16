<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
$('#enviar').on('click', function(){
    if($('#nombre').val() != null && $('#edad').val() < 18){
        alert('No puedes enviar el formulario');
    }else{
        $.ajax({
          type: "POST",
          url: 'http://lindo-y-querido.com/',
          data: $('#form').serialize(),
          dataType: 'json'
        });
    }
});