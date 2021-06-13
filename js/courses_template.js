var available_courses = [
    {
        "name" : "Administra tu sitio con WordPress",
        "description" : "Administra tu sitio hecho con Wordpress con la certeza de que todo estará bien. Aprende los conecptos que utilizarás en el mantenimiento del día a día sin depender de un desarrollador profesional.",
        "thumb" : "./assets/thumbs/wordpress.jpg",
        "path" : "./courses/wordpress/content.js",
        "id" : "wordpress"
    },
    {
        "name" : "Administra tu tienda con WooCommerce",
        "description" : "Administra tu tienda en línea con uno de los gestores más populares en la web. Muy potente pero sencillo de usar. Gestiona las tareas del día a día de tu tienda online.",
        "thumb" : "./assets/thumbs/woocommerce.jpg",
        "path" : "./courses/woocommerce/content.js",
        "id" : "woocommerce"
    }
];

var menu = document.getElementById("courses_menu");

var course;
for(course of available_courses){
    menu.innerHTML += "<div class='course'><a class='courseButton' href=./courses/"+course.id+"/index.html><img src='"+course.thumb+"'></a><h2>"+course.name+"</h2><p>"+course.description+"</p><p><a class='courseButton' href=./courses/"+course.id+"/index.html>"+courseButton+"</a></p></div>";
}