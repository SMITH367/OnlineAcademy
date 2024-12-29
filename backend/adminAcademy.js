// Create a route

let route = { 
	"name": "Ruta de frontend",
	"url": "/route/frontend",
	"logo": "https://static.platzi.com/cdn-cgi/image/width=96,quality=75,format=auto/media/learningpath/badges/b7c4fcdc-df05-47ba-b5c1-8a3f1e373337.jpg",
	"color": "rgb(0, 182, 15)",
	"description": "Aprende los fundamentos para crear aplicaciones web mediante tecnologias de front end, desde un nivel basico, hasta avanzado",
	"courses":[ // Put here the ID of the courses
	  "61ddb4d39efe76143a9efe34",
	  "61ddba44090b4e8a139f7a8c",
	  "61ddbbb9c159659ab31aa095",
	  "61ddbdc4c159659ab31aa096",
	  "61ddbeccc159659ab31aa097",
	  "61ddc019c159659ab31aa098"
		],
	"ident":"frontend"
}






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

