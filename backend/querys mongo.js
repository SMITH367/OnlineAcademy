db.routes.save({

	"name": "Developper tools",
	"url": "/route/devTools",
	"logo": "https://static.platzi.com/media/achievements/1301-97adc02b-c21c-46fc-b753-c50bf1a98f67.png",
	"color": "rgb(0, 182, 15)",
	"description": "Aprende las herramientas que necesitas en el desarrollo software, desde basico hasta avanzado y domina las devtools.",
	"courses": [{
			"name_course": "Terminal",
			"logo": "https://static.platzi.com/media/achievements/badge-terminal-5c5518b5-43d0-4387-b39e-3d85db446c5f.png"
		},
		{
			"name_course": "Git y Github",
			"logo": "https://static.platzi.com/media/achievements/badge-github-0b729570-934d-47d8-ba6b-610d7f15e0ec.png"
		},
		{
			"name_course": "Vs code",
			"logo": "https://static.platzi.com/media/achievements/badge-prework-configuracion-entorno-windows-8b168efb-2001-4f5e-938f-a333861ab31d.png"
		},
		{
			"name_course": "Docker",
			"logo": "https://static.platzi.com/media/achievements/badges-fundamentos-docker-c1277cec-3ef7-4557-9f83-2649bec9fe70.png"
		},
	]
})





db.courses.save({

	"name": "MYSQL",
	"description": "En este curso aprenderas la base de datos relacional mas usada del mundo, entenderas conceptos de como funciona el lenguaje sql y te enseñaremos a realizar las operaciones fundamentales con esta base de datos",
	"instructor": "Codigofacilito",
	"video": "https://www.youtube.com/watch?v=QYGdXagklbA",
	"resourses": "https://dev.mysql.com/doc/",
	"level": "Intermedio",
	"comentaries": [],
	"logo": "https://static.platzi.com/media/achievements/1272-15ff4836-0221-4001-b945-5cf34bd65bab.png",
	"linkC": "/view/sql",
	"ident": "sql",
	"url_course": "/course/sql",
	"proyectDescription": "Para aplicar tus conocimientos, crea una base de datos nueva, realiza consultas, por ejemplo crea una base de datos para gestionar empleados y sus lugares de trabajo dentro de una empresa x",
})

db.users.insert({
	"name": "",
	"email": "",
	"password": ""
})