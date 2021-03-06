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

	"name": "DOCKER",
	"description": "En este curso aprenderas que es. como funciona, para que sirve la herramienta de despliegue docker y como usarlo en tus proyectos",
	"instructor": "Pelardo nerd",
	"video": "https://www.youtube.com/watch?v=CV_Uf3Dq-EU",
	"resourses": "https://docs.docker.com/reference/",
	"level": "Avanzado",
	"comentaries": [],
	"logo": "https://static.platzi.com/media/achievements/badges-fundamentos-docker-c1277cec-3ef7-4557-9f83-2649bec9fe70.png",
	"linkC": "/view/docker",
	"ident": "docker",
	"url_course": "/course/docker",
	"proyectDescription": "Practica con las funcionalidades vistas en el curso e intenta integrar docker a un proyecto que tengas",
})

db.users.insert({
	"name": "",
	"email": "",
	"password": ""
})