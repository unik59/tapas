<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<!doctype html>
<html>
<head>
    <title><spring:message code="titre.bonjour"/> : ${personne}</title>
</head>
<body>


<spring:message code="libelle.bonjour.lemonde" arguments="${personne}"/>
</body>
</html>