.PHONY: run

run:
	@echo "Restarting Mysql ..."
	@sudo service mysqld restart
	@echo "Mysql started Successfully"
	@echo "Restarting Apache2 ..."
	@sudo systemctl restart apache2
	@echo "Apache2 started Successfully"
	@echo "you can visit https://localhost/phpmyadmin/index.php"
	@mvn spring-boot:run
	@echo "My application is starting at http://localhost:8080"