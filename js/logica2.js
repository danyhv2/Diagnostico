;(function($){

	$.ajax({
		url: 'data/datos2.json',
		type: 'GET',
		contentType: "application/json; charset=utf-8", //request
		dataType: 'json', //response

		success: function(response){


			var rand = response[Math.floor(Math.random() * response.length)];
				//agrega la pregunta al azar
				$('form').append($('<label class="pregunta">'+rand.pregunta+'</label>'));
				
				for(var i in rand.respuestas){
						$('form').append($('<div class="radio">'+'<label>'+'<input type="radio" class="options" name="optionRadios" value="'+rand.respuestas[i]+'">'+i+'</label>'+'</div>'));
						console.log(rand.respuestas[i]);
									}
				$('form').append($('<button type="button" class="btn btn-primary" id="btnRespuesta">'+"Respuesta" +" definitiva"+'</button>'));

				$('#btnRespuesta').click(function() {
					for(var i = 0; i < $('.options').length; i++){
						//valida si el checkbox seleccionado tiene la respuesta correcta
						if($('.options').eq(i).is(':checked') && $('.options').eq(i).val()== 'cierto'){
							$('<span class="label label-success">'+"Felicidades"+'</span>').insertBefore('#btnRespuesta');
						}else{
							//cambiar validacion para cuando la respuesta es incorrecta
							//$('<span class="label label-danger">'+"Respuesta incorrecta"+'</span>').insertBefore('#btnRespuesta');
	
						}

					}
				});


		},
		error: function(response){

			//console.log(response[0].provincia.length);


		}
	});
	
})(jQuery);
